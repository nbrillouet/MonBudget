using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class PlanService : IPlanService
    {
        private readonly IMapper _mapper;
        private readonly IPlanRepository _planRepository;
        private readonly IPlanUserRepository _planUserRepository;
        private readonly IUserRepository _userRepository;
        private readonly IPlanPosteRepository _planPosteRepository;
        
        //private readonly IPlanService _planService;

        public PlanService(
            IMapper mapper,
            IPlanRepository planRepository,
            IPlanUserRepository planUserRepository,
            IUserRepository userRepository,
            IPlanPosteRepository planPosteRepository)
            //IPlanService planService)
        {
            _mapper = mapper;
            _planRepository = planRepository;
            _planUserRepository = planUserRepository;
            _userRepository = userRepository;
            _planPosteRepository = planPosteRepository;
            //_planService = planService;
        }

        //public List<Plan> Get(FilterPlan filter)
        //{
        //    var results = _planRepository.Get(filter);
        //    //var result = new PagedList1<Plan>(pagedList.Datas, pagedList.Pagination);

        //    return results; 

        //}

        public PagedList<Plan> GetPlanTable(FilterPlanTableSelected filter)
        {
            var pagedList = _planRepository.GetPlanTable(filter);
            //var result = new PagedList<UserForTableDto>(_mapper.Map<List<UserForTableDto>>(pagedList.Datas), pagedList.Pagination);
            return pagedList;

            //var datas = _planRepository.Get(filter);
            //return datas;
        }

        public List<int> GetDistinctYears()
        {
            var results = _planRepository.GetDistinctYears();

            return results; // _mapper.Map<List<SelectDto>>(results);
        }

        //public PlanForTableComboFilter GetPlanTableComboFilter()
        //{
        //    //PlanForTableComboFilter PlanForTableComboFilter = new PlanForTableComboFilter();
        //    var years = _planRepository.GetDistinctYears();
        //    List<SelectDto> comboYears = new List<SelectDto>();
        //    SelectDto selected = new SelectDto();
        //    foreach (var year in years)
        //    {
        //        selected = new SelectDto { Id = year, Label = year.ToString() };
        //        comboYears.Add(selected);
        //    }

        //    return new PlanForTableComboFilter
        //    {
        //        Years = new ComboSimple<SelectDto>
        //        {
        //            List = comboYears,
        //            Selected = selected
        //        }
        //    };
        //}


        public Plan GetById(int idPlan)
        {
            return _planRepository.GetById(idPlan);
        }

        
        public void Create(Plan plan)
        {
            _planRepository.Create(plan);
        }

        public void Update(Plan plan)
        {
            _planRepository.Update(plan);
        }




    }


}
