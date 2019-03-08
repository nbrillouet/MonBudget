using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTransverseAsService
    {
        List<SelectDto> GetOperationTransverseSelectList(int IdAccountStatementFile, EnumSelectType enumSelectType);
        bool Update(List<SelectDto> operationTransverses, int idAs);

    }


}
