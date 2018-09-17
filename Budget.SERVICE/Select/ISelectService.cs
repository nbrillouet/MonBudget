using System;
using System.Collections.Generic;
using System.Text;
using Budget.MODEL;
using Budget.MODEL.Dto;

namespace Budget.SERVICE
{
    public interface ISelectService
    {
        List<SelectDto> GetSelectList(int typeList);
    }
}
