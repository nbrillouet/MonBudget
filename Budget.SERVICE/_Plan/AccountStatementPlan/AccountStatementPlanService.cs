using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountStatementPlanService : IAccountStatementPlanService
    {
        private readonly IMapper _mapper;
        private readonly IAccountStatementPlanRepository _accountStatementPlanRepository;
        private readonly IVPlanGlobalService _vPlanGlobalService;
        private readonly IPlanAccountService _planAccountService;
        private readonly IPlanService _planService;
        private readonly ReferentialService _referentialService;
        //private readonly IAccountStatementService _accountStatementService;

        public AccountStatementPlanService(
            IMapper mapper,
            IVPlanGlobalService vPlanGlobalService,
            IPlanAccountService planAccountService,
            IAccountStatementPlanRepository accountStatementPlanRepository,
            ReferentialService referentialService,
            IPlanService planService
            //IAccountStatementService accountStatementService
            )
        {
            _mapper = mapper;
            _vPlanGlobalService = vPlanGlobalService;
            _accountStatementPlanRepository = accountStatementPlanRepository;
            _planAccountService = planAccountService;
            _referentialService = referentialService;
            _planService = planService;
            //_accountStatementService = accountStatementService;
        }

        public List<AccountStatementPlan> GetByIdPlan(int IdPlan)
        {
            return _accountStatementPlanRepository.GetByIdPlan(IdPlan);
        }

        public void SaveByIdPlan(int idPlan)
        {
            // Suppression des AccountStatementPlan pour l'idplan
            DeleteByIdPlan(idPlan);
            // Recuperation des idAccountStatement pour le plan dans la vue: V_PLAN_GLOBAL
            List<VPlanGlobal> vPlanGlobals = _vPlanGlobalService.GetByIdPlan(idPlan);
            foreach(var vPlanGlobal in vPlanGlobals)
            {
                var AccountStatementPlan = new AccountStatementPlan
                {
                    IdAccountStatement = vPlanGlobal.IdAccountStatement.Value,
                    IdPlan = idPlan
                };
                _accountStatementPlanRepository.Create(AccountStatementPlan);

            }
            //List<Int32> idAccountStatementList = vPlanGlobals.Select(x => x.IdAccountStatement.Value).ToList();
            //accountStatements = accountStatements.Where(x => idOperationMethods.Contains(x.IdOperationMethod))

        }

        public void DeleteByIdPlan(int IdPlan)
        {
            var accountStatementPlans = GetByIdPlan(IdPlan);
            foreach( var accountStatementPlan in accountStatementPlans)
            {
                _accountStatementPlanRepository.Delete(accountStatementPlan);
            }
        }

        public List<SelectValueDto<string>> GetPlansByIdAccountStatement(int IdAccountStatement,int year)
        {
            var accountStatementPlans = _accountStatementPlanRepository.GetPlansByIdAccountStatement(IdAccountStatement,year);

            return _mapper.Map<List<SelectValueDto<string>>>(accountStatementPlans);
        }

        //Recherche des account statement non pris en compte dans le plan indiqué en parametre
        public List<AsForTableDto> GetAsNotInPlan(int idPlan, int idUserGroup)
        {
            //Recherche du plan
            var plan = _planService.GetById(idPlan);
            //Recherche des account statement pris en compte dans le plan
            var asInPlan = _accountStatementPlanRepository.GetByIdPlan(idPlan);
            //Recherche des Accounts utilisés dans le plan
            var planAccounts = _planAccountService.GetByIdPlan(idPlan);
            //Recherche du virement interne pour le user group (pas de prise en compte dess virements internes)
            var otfViri = _referentialService.OperationTypeFamilyService.GetByCodeUserGroupForSelect(EnumCodeOtf.VIRI, idUserGroup);
            FilterAsNotInPlan filterAsNotInPlan = new FilterAsNotInPlan
            {
                Year = plan.Year,
                IdInternalTransfert = otfViri.Id,
                AsInPlan = asInPlan.Select(x => x.IdAccountStatement).ToList(),
                Accounts = planAccounts.Select(x => x.IdAccount).ToList()
            };

            var accountStatements = _accountStatementPlanRepository.GetAsNotInPlan(filterAsNotInPlan);
            return _mapper.Map<List<AsForTableDto>>(accountStatements);
            //return null;
        }

    }
}
