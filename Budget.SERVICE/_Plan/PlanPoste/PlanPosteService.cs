using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class PlanPosteService : IPlanPosteService
    {
        private readonly IMapper _mapper;
        private readonly IPlanPosteRepository _planPosteRepository;
        private readonly IPosteRepository _posteRepository;
        private readonly IPlanPosteUserService _planPosteUserService;
        private readonly IReferenceTableRepository _referenceTableRepository;
        private readonly IPlanPosteReferenceService _planPosteReferenceService;
        private readonly IPlanPosteFrequencyService _planPosteFrequencyService;
        private readonly IMonthService _frequencyService;


        public PlanPosteService(
            IMapper mapper,
            IPlanPosteRepository planPosteRepository,
            IPosteRepository posteRepository,
            IPlanPosteUserService planPosteUserService,
            IReferenceTableRepository referenceTableRepository,
            IPlanPosteReferenceService planPosteReferenceService,
            IPlanPosteFrequencyService planPosteFrequencyService,
            IMonthService frequencyService)
        {
            _mapper = mapper;
            _planPosteRepository = planPosteRepository;
            _posteRepository = posteRepository;
            _planPosteUserService = planPosteUserService;
            _referenceTableRepository = referenceTableRepository;
            _planPosteReferenceService = planPosteReferenceService;
            _planPosteFrequencyService = planPosteFrequencyService;
            _frequencyService = frequencyService;
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
