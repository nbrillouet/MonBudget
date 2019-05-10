using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationRepository : IBaseRepository<Operation>
    {
        List<Operation> GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType);
        List<Operation> GetSelectList(int idUserGroup, List<SelectDto> operationMethods);
        List<Operation> GetByIdMovement(int idUserGroup, EnumMovement enumMovement);
        List<Operation> GetByIdList(List<int> idList);
        Operation GetUnknown(int idUserGroup);

    }
}
