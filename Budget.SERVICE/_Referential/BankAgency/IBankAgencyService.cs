using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IBankAgencyService
    {
        List<Select> GetSelectList(int idBankSubFamily, EnumSelectType enumSelectType);

    }

}
