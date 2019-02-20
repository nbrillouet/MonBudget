using AutoMapper;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class PlanDetailService: IPlanDetailService
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        private readonly IPlanService _planService;
        private readonly IPlanUserService _planUserService;
        private readonly IPlanPosteService _planPosteService;
        private readonly IPlanPosteUserService _planPosteUserService;
        private readonly IPosteService _posteService;


        public PlanDetailService(
            IMapper mapper,
            IUserService userService,
            IPlanService planService,
            IPlanUserService planUserService,
            IPlanPosteService planPosteService,
            IPosteService posteService,
            IPlanPosteUserService planPosteUserService

            )
        {
            _mapper = mapper;
            _userService = userService;
            _planService = planService;
            _planUserService = planUserService;
            _planPosteService = planPosteService;
            _posteService = posteService;
            _planPosteUserService = planPosteUserService;
        }

        public PlanForDetailDto GetForDetail(int idPlan)
        {
            var users = _userService.GetAll();
            var userList = _mapper.Map<List<SelectDto>>(users);

            //nouveau Plan
            if (idPlan == 0)
            {
                PlanForDetailDto planForDetailDto = new PlanForDetailDto();
                planForDetailDto.Plan = new Plan
                {
                    Id = 0,
                    Label = null,
                    Year = DateTime.Now.Year
                };
                planForDetailDto.Users.List = userList;
                planForDetailDto.Users.ListSelected = new List<SelectDto>();
                return planForDetailDto;
            }


            var plan = _planService.GetById(idPlan);

            var planUsers = _planUserService.GetByIdPlan(idPlan);
            var usersSelected = _mapper.Map<List<SelectDto>>(planUsers);

            var planForDetail = _mapper.Map<PlanForDetailDto>(plan);
            planForDetail.Users.List = userList;
            planForDetail.Users.ListSelected = usersSelected;

            var postes = _posteService.GetAllSelect();
            foreach(var poste in postes)
            {
                PlanPosteDto planPosteDto = new PlanPosteDto
                {
                    Poste = poste,
                    List = _mapper.Map<List<PlanPosteForListDto>>(_planPosteService.Get(idPlan, poste.Id))
                };
                planForDetail.PlanPostes.Add(planPosteDto);
            };

            return planForDetail;
        }

        public void Save(PlanForDetailDto planForDetailDto)
        {
            Plan plan = planForDetailDto.Plan;

            //sauvegarde de plan et de user selected
            if (planForDetailDto.Plan.Id == 0)
            {
                _planService.Create(plan);
            }
            else
            {
                _planService.Update(plan);
            }

            _planPosteUserService.SavePlanUserByIdPlan(plan.Id, planForDetailDto.Users.ListSelected);


        }
    }
}
