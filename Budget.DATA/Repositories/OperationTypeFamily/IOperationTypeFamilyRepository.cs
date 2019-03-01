using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTypeFamilyRepository : IBaseRepository<OperationTypeFamily>
    {

        List<OperationTypeFamily> GetByIdMovement(EnumMovement enumMovement);

        List<OperationTypeFamily> GetAllByOrder();

        //List<GenericList> GetGenericList();
        //List<GenericList> GetGenericListByIdMovement(EnumMovement enumMovement, EnumSelect enumSelect);
        //List<OperationTypeFamily> GetByIdMovement(EnumMovement enumMovement, EnumSelect enumSelect);

        List<OperationTypeFamily> GetByIdList(List<int> idList);

        new int Create(OperationTypeFamily operationTypeFamily);
    }
}
