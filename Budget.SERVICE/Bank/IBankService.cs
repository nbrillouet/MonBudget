using Budget.MODEL;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IBankService
    {
        List<SelectDto> GetSelectList(int idSelectType);
        //Bank GetBankByAccountNumber(string accountNumber);
        Bank GetById(int idBank);
        //List<Bank> GetAll();
        //List<Bank> GetAllWithNoUnknown();
        //List<GenericList> GetGenericList();

    }

}
