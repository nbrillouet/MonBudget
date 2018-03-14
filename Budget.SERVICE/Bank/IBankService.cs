using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IBankService
    {
        Bank GetBankByAccountNumber(string accountNumber);
        Bank GetById(int idBank);
        List<Bank> GetAll();
        List<Bank> GetAllWithNoUnknown();
        List<GenericList> GetGenericList();

    }

}
