using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IBankSubFamilyService
    {
        List<Select> GetSelectList(int idBankFamily, EnumSelectType enumSelectType);

        BankSubFamily GetById(int idBankAgency);

    }

}
