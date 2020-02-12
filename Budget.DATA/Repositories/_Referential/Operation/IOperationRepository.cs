using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationRepository : IBaseRepository<Operation>
    {
        List<Operation> GetSelectList(int idUserGroup);
        List<Operation> GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType);
        List<Operation> GetSelectList(int idUserGroup, List<SelectDto> operationMethodList, List<SelectDto> operationTypeFamilyList, List<SelectDto> operationTypeList);
        List<Operation> GetByIdMovement(int idUserGroup, EnumMovement enumMovement);
        List<Operation> GetByIdList(List<int> idList);
        Operation GetUnknown(int idUserGroup);
        PagedList<Operation> GetTable(FilterOperationTableSelected filter);
        Operation GetDetail(int idOperation);
        //void DeleteWithEscalation(Operation operation);

    }
}
