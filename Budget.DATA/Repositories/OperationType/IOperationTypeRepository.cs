using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTypeRepository : IBaseRepository<OperationType>
    {
        List<OperationType> GetAllByOrder(EnumSelect enumSelect);
        OperationType GetByIdWithOperationTypeFamily(int idOperationType);
        List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect);
        List<GenericList> GetGenericList();
        List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect);
        List<GenericList> GetGenericListByIdMovement(int IdMovement);
        List<OperationType> GetByIdMovement(int IdMovement);
        OperationType GetFirstByIdOperationTypeFamily(int idOperationTypeFamily);
        new int Create(OperationType operationType);
    }
}
