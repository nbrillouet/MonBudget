using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public class FrequencyService : IFrequencyService
    {
        private readonly IMapper _mapper;
        private readonly IFrequencyRepository _frequencyRepository;

        public FrequencyService(
            IMapper mapper,
            IFrequencyRepository frequencyRepository
        )
        {
            _mapper = mapper;
            _frequencyRepository = frequencyRepository;
        }


        public List<SelectDto> GetSelectAll()
        {
            List<Frequency> frequencies = _frequencyRepository.GetAllByOrder();
            var frequenciesDto = _mapper.Map<List<SelectDto>>(frequencies);
            return frequenciesDto;
        }

        public List<FrequencyDto> GetAll()
        {
            List<Frequency> frequencies = _frequencyRepository.GetAllByOrder();
            var frequenciesDto = _mapper.Map<List<FrequencyDto>>(frequencies);
            return frequenciesDto;
        }

    }


}
