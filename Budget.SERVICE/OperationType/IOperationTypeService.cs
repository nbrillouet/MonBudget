using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTypeService
    {

        OperationType GetByIdWithOperationTypeFamily(int idOperationType);

        List<OperationType> GetAll();
        List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect);
        OperationType GetFirstByIdOperationTypeFamily(int idOperationTypeFamily);
        OperationType GetById(int idOperationType);
        List<GenericList> GetGenericList();
        List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect);
        List<GenericList> GetGenericListByIdMovement(int IdMovement);
        List<OperationType> GetByIdMovement(int IdMovement);

        int Create(OperationType operationType);
        void Update(OperationType operationType);
        void Delete(OperationType operationType);
    }
}
