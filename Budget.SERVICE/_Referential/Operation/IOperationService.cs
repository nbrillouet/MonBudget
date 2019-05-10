using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationService 
    {
        SelectDto GetUnknown(int idUserGroup);
        List<SelectDto> GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType, EnumSelectType enumSelectType);
        List<SelectDto> GetSelectList(int idUserGroup, List<SelectDto> operationMethods);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);
        

        Operation Create(Operation operation);
        void Update(Operation operation);
        void Delete(Operation operation);

    }
}
