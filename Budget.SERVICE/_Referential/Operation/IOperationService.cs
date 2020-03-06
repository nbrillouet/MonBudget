using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationService 
    {
        SelectDto GetUnknown(int idUserGroup);
        List<SelectDto> GetSelectList(int idUserGroup);
        List<SelectDto> GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType, EnumSelectType enumSelectType);
        List<SelectDto> GetSelectList(int idUserGroup, List<SelectDto> operationMethodList, List<SelectDto> operationTypeFamilyList, List<SelectDto> operationTypeList);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);
        PagedList<OperationForTableDto> GetTable(FilterOperationTableSelected filter);
        OperationForDetailDto GetDetail(int idOperation, int idUserGroup);

        OperationForDetailDto SaveDetail(OperationForDetailDto operationForDetailDto);
        Operation Create(Operation operation);
        void Update(Operation operation);
        void Delete(Operation operation);
        bool DeleteDetail(int idOperation);
        void DeleteOperations(List<int> idOperationList);

    }
}
