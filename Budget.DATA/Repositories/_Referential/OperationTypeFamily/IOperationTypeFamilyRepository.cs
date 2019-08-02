using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTypeFamilyRepository : IBaseRepository<OperationTypeFamily>
    {
        List<OperationTypeFamily> GetByIdMovement(int idUserGroup, EnumMovement enumMovement);
        List<OperationTypeFamily> GetByIdUserGroup(int idUserGroup);
        List<OperationTypeFamily> GetAllByOrder(int idUserGroup);
        List<OperationTypeFamily> GetByIdList(List<int> idList);
        OperationTypeFamily GetByCodeUserGroup(EnumCodeOtf enumCodeOtf, int idUserGroup);

        PagedList<OperationTypeFamily> GetOtfTable(FilterOtfTableSelected filter);
        OperationTypeFamily GetOtfDetail(int idOperationTypeFamily);
        //OperationTypeFamily GetUnknown(int idUserGroup);

        void DeleteWithEscalation(OperationTypeFamily operationTypeFamily);

    }
}
