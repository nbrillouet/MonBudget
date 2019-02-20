using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTypeFamilyRepository : IBaseRepository<OperationTypeFamily>
    {

        List<OperationTypeFamily> GetByIdMovement(int idMovement);

        List<OperationTypeFamily> GetAllByOrder();

        List<GenericList> GetGenericList();
        List<GenericList> GetGenericListByIdMovement(int idMovement, EnumSelect enumSelect);
        List<OperationTypeFamily> GetByIdMovement(int idMovement, EnumSelect enumSelect);

        List<OperationTypeFamily> GetByIdList(List<int> idList);

        new int Create(OperationTypeFamily operationTypeFamily);
    }
}
