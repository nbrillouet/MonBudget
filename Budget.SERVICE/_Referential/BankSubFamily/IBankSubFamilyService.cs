using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IBankSubFamilyService
    {
        List<SelectDto> GetSelectList(int idSelectType);

        BankSubFamily GetById(int idBankAgency);

    }

}
