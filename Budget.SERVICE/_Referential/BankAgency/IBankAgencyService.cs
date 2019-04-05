using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IBankAgencyService
    {
        List<SelectDto> GetSelectList(int idSelectType);

        BankAgency GetById(int idBankAgency);

    }

}
