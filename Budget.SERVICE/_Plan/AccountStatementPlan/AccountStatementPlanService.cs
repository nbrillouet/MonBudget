using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
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
        
        public AccountStatementPlanService(
            IMapper mapper,
            IVPlanGlobalService vPlanGlobalService,
            IAccountStatementPlanRepository accountStatementPlanRepository
            )
        {
            _mapper = mapper;
            _vPlanGlobalService = vPlanGlobalService;
            _accountStatementPlanRepository = accountStatementPlanRepository;
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

        public List<SelectColorDto> GetPlansByIdAccountStatement(int IdAccountStatement,int year)
        {
            var accountStatementPlans = _accountStatementPlanRepository.GetPlansByIdAccountStatement(IdAccountStatement,year);

            return _mapper.Map<List<SelectColorDto>>(accountStatementPlans);
        }

    }
}
