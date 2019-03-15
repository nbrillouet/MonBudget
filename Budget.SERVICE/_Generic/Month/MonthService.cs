using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public class MonthService : IMonthService
    {
        private readonly IMapper _mapper;
        private readonly IMonthRepository _monthRepository;

        public MonthService(
            IMapper mapper,
            IMonthRepository monthRepository
        )
        {
            _mapper = mapper;
            _monthRepository = monthRepository;
        }


        public List<SelectDto> GetSelectAll()
        {
            List<Month> months = _monthRepository.GetAllByOrder();
            var monthsDto = _mapper.Map<List<SelectDto>>(months);
            return monthsDto;
        }

        public List<Month> GetAll()
        {
            List<Month> months = _monthRepository.GetAllByOrder();
            //var monthsDto = _mapper.Map<List<FrequencyDto>>(frequencies);
            return months;
        }

    }


}
