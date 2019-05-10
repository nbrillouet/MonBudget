using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IMovementService
    {
        List<SelectDto> GetSelectList(EnumSelectType enumSelectType);
    }

}
