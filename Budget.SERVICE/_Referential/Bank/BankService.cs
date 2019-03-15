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
    public class BankService : IBankService
    {
        private readonly IMapper _mapper;
        private readonly IBankRepository _bankRepository;
        private readonly ISelectService _selectService;

        public BankService(
            IBankRepository bankRepository,
            ISelectService selectService,
            IMapper mapper
            )
        {
            _bankRepository = bankRepository;
            _selectService = selectService;
            _mapper = mapper;
        }

        public Bank GetById(int idBank)
        {
            return _bankRepository.GetById(idBank);
        }

        public List<SelectDto> GetSelectList(int idSelectType)
        {
            var selectList = _selectService.GetSelectList((EnumSelectType)idSelectType);
            var banks = _bankRepository.GetAllOrdering();
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(banks).ToList());

            return selectList;
        }

        //public List<Bank> GetAll()
        //{
        //    return _bankRepository.GetAll();
        //}

        //public List<Bank> GetAllWithNoUnknown()
        //{
        //    return _bankRepository.GetAllWithNoUnknown();
        //}

        //public Bank GetBankByAccountNumber(string accountNumber)
        //{
        //    //Account account = _accountService.GetAccountByNumber(accountNumber);
        //    //if (account != null)
        //    //    return _bankRepository.GetById(account.IdBank);
        //    //else
        //    //    return null;
        //    return null;
        //}

        //public List<GenericList> GetGenericList()
        //{
        //    return _bankRepository.GetGenericList();
        //}
    }
}
