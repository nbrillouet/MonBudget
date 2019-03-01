using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTransverseAsifService
    {
        List<SelectDto> GetOperationTransverseSelectList(int IdAccountStatementFile, EnumSelectType enumSelectType);
    }
}
