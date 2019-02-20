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
    public class PlanUserService: IPlanUserService
    {
        private readonly IMapper _mapper;
        private readonly IPlanUserRepository _planUserRepository;
        //private readonly IPlanPosteUserService _planPosteUserService;

        public PlanUserService(
            IMapper mapper,
            
            IPlanUserRepository planUserRepository
            //IPlanPosteUserService planPosteUserService
        )
        {
            _mapper = mapper;
            
            _planUserRepository = planUserRepository;
            //_planPosteUserService = planPosteUserService;

        }

        public List<PlanUser> GetByIdPlan(int idPlan)
        {
            return _planUserRepository.GetByIdPlan(idPlan);
        }

        public List<Plan> GetPlansByIdUser(int idUser)
        {
            var planUsers = _planUserRepository.GetByIdUser(idUser);
            return planUsers.Select(x => x.Plan).ToList();
        }

        public void Create(PlanUser planUser)
        {
            _planUserRepository.Create(planUser);
        }

        

        public void DeleteByIdPlan(int idPlan)
        {
            _planUserRepository.DeleteByIdPlan(idPlan);
        }
    }
}
