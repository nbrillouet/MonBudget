using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
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

        public BankAgency GetById(int idBankAgency)
        {
            return _bankAgencyRepository.GetById(idBankAgency);
        }

        public List<SelectDto> GetSelectList(int idSelectType)
        {
            var selectList = _selectService.GetSelectList((EnumSelectType)idSelectType);
            var bankAgencies = _bankAgencyRepository.GetAllOrdering();
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(bankAgencies).ToList());

            return selectList;
        }

    }
}
