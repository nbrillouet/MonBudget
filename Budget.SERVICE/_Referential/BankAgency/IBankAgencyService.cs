using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IBankAgencyService
    {
        List<SelectDto> GetSelectList(int idBankSubFamily, EnumSelectType enumSelectType);

    }

}
