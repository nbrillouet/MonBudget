using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTransverseAsRepository
    {
        List<OperationTransverse> GetOperationTransverseList(int IdAccountStatement);
        List<OperationTransverseAs> GetByIdAs(int idAsif);

        bool Update(List<SelectDto> operationTransverses, int idAsif);
    }

}
