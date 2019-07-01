using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class PlanAccountService : IPlanAccountService
    {
        private readonly IMapper _mapper;
        private readonly IPlanAccountRepository _planAccountRepository;
        private IPlanUserService _planUserService;
        private IUserAccountService _userAccountService;

        public PlanAccountService(
            IMapper mapper,
            IPlanAccountRepository planAccountRepository,
            IPlanUserService planUserService,
            IUserAccountService userAccountService
            )
        {
            _mapper = mapper;
            _planAccountRepository = planAccountRepository;
            _planUserService = planUserService;
            _userAccountService = userAccountService;
        }

        public ComboMultiple<SelectGroupDto> GetAccountComboMultiple(int idPlan, int idUserGroup)
        {
            //var planUsers = _planUserService.GetByIdPlan(idPlan);
            //var idUsers = planUsers.Select(x => x.IdUser).ToList();

            ComboMultiple<SelectGroupDto> result = new ComboMultiple<SelectGroupDto>
            {
                List = _userAccountService.GetBankSubFamilySelectGroup(idUserGroup),
                ListSelected = GetSelectAccountByIdPlan(idPlan)
            };
            //    ;
            //result.List = 
            //result.ListSelected = GetSelectAccountByIdPlan(idPlan);
            return result;
        }

        private List<SelectDto> GetSelectAccountByIdPlan(int idPlan)
        {
            List<Account> accounts = _planAccountRepository.GetSelectAccountByIdPlan(idPlan);

            return _mapper.Map<List<SelectDto>>(accounts);
        }

        public void DeleteByIdPlan(int idPlan)
        {
            var planAccounts = _planAccountRepository.GetByIdPlan(idPlan);
            foreach(var planAccount in planAccounts)
            {
                _planAccountRepository.Delete(planAccount);
            }
        }

        public void Create(PlanAccount planAccount)
        {
            _planAccountRepository.Create(planAccount);
        }

        public void Save(int idPlan, List<SelectDto> accounts)
        {
            DeleteByIdPlan(idPlan);
            foreach (var account in accounts)
            {
                PlanAccount planAccount = new PlanAccount
                {
                    Id = 0,
                    IdAccount = account.Id,
                    IdPlan = idPlan
                };
                Create(planAccount);
            }
        }

    }
}
