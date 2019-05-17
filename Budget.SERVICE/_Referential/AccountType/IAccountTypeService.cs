using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountTypeService
    {
        List<SelectDto> GetSelectList(EnumSelectType enumSelectType);
        AccountType GetById(int id);
        //List<AccountType> GetAll();

    }
}
