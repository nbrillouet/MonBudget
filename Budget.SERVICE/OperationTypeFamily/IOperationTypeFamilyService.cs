using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTypeFamilyService
    {
        OperationTypeFamily GetById(int idOperationTypeFamily);
        List<GenericList> GetGenericList();
        List<GenericList> GetGenericListByIdMovement(int idMovement, EnumSelect enumSelect);
        List<OperationTypeFamily> GetByIdMovement(int idMovement, EnumSelect enumSelect);

        int Create(OperationTypeFamily operationTypeFamily);
        void Update(OperationTypeFamily operationTypeFamily);
        void Delete(OperationTypeFamily operationTypeFamily);
    }
}
