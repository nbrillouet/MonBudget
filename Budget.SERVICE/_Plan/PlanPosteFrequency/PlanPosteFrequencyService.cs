using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class PlanPosteFrequencyService : IPlanPosteFrequencyService
    {
        private readonly IMapper _mapper;
        private readonly IPlanPosteFrequencyRepository _planPosteFrequencyRepository;
        private readonly IMonthService _monthService;

        public PlanPosteFrequencyService(
            IMapper mapper,
            IPlanPosteFrequencyRepository planPosteFrequencyRepository,
            IMonthService monthService
        )
        {
            _mapper = mapper;
            _planPosteFrequencyRepository = planPosteFrequencyRepository;
            _monthService = monthService;
        }

        public List<PlanPosteFrequencyForDetailDto> GetByIdPlanPoste(int idPlanPoste)
        {
            List<PlanPosteFrequency> PlanPosteFrequencies = GetBaseByIdPlanPoste(idPlanPoste);
            List<PlanPosteFrequencyForDetailDto> PlanPosteFrequenciesDto = _mapper.Map<List<PlanPosteFrequencyForDetailDto>>(PlanPosteFrequencies);

            return PlanPosteFrequenciesDto;
        }

        public List<PlanPosteFrequency> GetBaseByIdPlanPoste(int idPlanPoste)
        {
            List<PlanPosteFrequency> PlanPosteFrequencies = _planPosteFrequencyRepository.GetByIdPlanPoste(idPlanPoste);
            return PlanPosteFrequencies;
        }

        public List<PlanPosteFrequencyForDetailDto> InitForCreation(bool isAnnualEstimation)
        {
            
            List<PlanPosteFrequencyForDetailDto> PlanPosteFrequenciesForDetailDto = new List<PlanPosteFrequencyForDetailDto>();
            List<Month> frequencies;
            if (!isAnnualEstimation)
                frequencies = _monthService.GetAll();
            else
                frequencies= _monthService.GetAnnual();

            foreach (var frequency in frequencies)
            {
                PlanPosteFrequencyForDetailDto planPosteFrequencyForDetailDto = new PlanPosteFrequencyForDetailDto
                {
                    Id = 0,
                    Frequency = frequency,
                    PreviewAmount = 100
                };

                PlanPosteFrequenciesForDetailDto.Add(planPosteFrequencyForDetailDto);
            }

            return PlanPosteFrequenciesForDetailDto;
        }

        public void DeleteByIdPlanPoste(int idPlanPoste)
        {
            _planPosteFrequencyRepository.DeleteByIdPlanPoste(idPlanPoste);
        }

        public void Create(PlanPosteFrequency planPosteFrequency)
        {
            _planPosteFrequencyRepository.Create(planPosteFrequency);
        }


    }

}
