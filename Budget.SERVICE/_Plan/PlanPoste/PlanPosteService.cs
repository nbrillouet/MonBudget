using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System.Collections.Generic;


namespace Budget.SERVICE
{
    public class PlanPosteService : IPlanPosteService
    {
        private readonly IMapper _mapper;
        private readonly IPlanPosteRepository _planPosteRepository;

        public PlanPosteService(
            IMapper mapper,
            IPlanPosteRepository planPosteRepository
            )
        {
            _mapper = mapper;
            _planPosteRepository = planPosteRepository;
        }

        public PagedList<PlanPosteForTableDto> GetPlanPosteTable(FilterPlanPosteTableSelected filter)
        {
            var pagedList = _planPosteRepository.GetPlanPosteTable(filter);

            var result = new PagedList<PlanPosteForTableDto>(_mapper.Map<List<PlanPosteForTableDto>>(pagedList.Datas), pagedList.Pagination);

            return result;
        }

        public PlanPoste GetById(int idPlanPoste)
        {
            return _planPosteRepository.GetById(idPlanPoste);
        }

        public List<PlanPoste> Get(int idPlan, int idPoste)
        {
            return _planPosteRepository.Get(idPlan, idPoste);
        }

        public void Create(PlanPoste planPoste)
        {
            _planPosteRepository.Create(planPoste);
        }

        public void Update(PlanPoste planPoste)
        {
            _planPosteRepository.Update(planPoste);
        }

        public void Delete(PlanPoste planPoste)
        {
            _planPosteRepository.Delete(planPoste);
        }
    }


}
