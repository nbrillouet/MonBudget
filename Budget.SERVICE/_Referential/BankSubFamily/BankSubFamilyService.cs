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
    public class BankSubFamilyService : IBankSubFamilyService
    {
        private readonly IMapper _mapper;
        private readonly IBankSubFamilyRepository _bankSubFamilyRepository;
        private readonly ISelectService _selectService;

        public BankSubFamilyService(
            IBankSubFamilyRepository bankSubFamilyRepository,
            ISelectService selectService,
            IMapper mapper
            )
        {
            _bankSubFamilyRepository = bankSubFamilyRepository;
            _selectService = selectService;
            _mapper = mapper;
        }

        public BankSubFamily GetById(int idBankAgency)
        {
            return _bankSubFamilyRepository.GetById(idBankAgency);
        }

        public List<Select> GetSelectList(int idBankFamily, EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var bankAgencies = _bankSubFamilyRepository.GetByIdBankFamily(idBankFamily);
            selectList.AddRange(_mapper.Map<IEnumerable<Select>>(bankAgencies).ToList());

            return selectList;
        }

    }
}
