using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class BankAgencyService : IBankAgencyService
    {
        private readonly IMapper _mapper;
        private readonly IBankAgencyRepository _bankAgencyRepository;
        private readonly ISelectService _selectService;

        public BankAgencyService(
            IBankAgencyRepository bankAgencyRepository,
            ISelectService selectService,
            IMapper mapper
            )
        {
            _bankAgencyRepository = bankAgencyRepository;
            _selectService = selectService;
            _mapper = mapper;
        }


        public List<SelectDto> GetSelectList(int idBankSubFamily, EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var bankAgencies = _bankAgencyRepository.GetByIdBankSubFamily(idBankSubFamily);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(bankAgencies).ToList());

            return selectList;
        }

    }

}
