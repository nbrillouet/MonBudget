using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationService : IGenericListService
    {
        List<SelectDto> GetSelectList(int idOperationMethod,int idOperationType);
        List<SelectDto> GetSelectList(List<SelectDto> operationMethods);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);

        Operation GetById(int idOperation);
        List<Operation> GetAllByOrder();
        List<Operation> GetAllByIdOperationMethod(int idOperationMethod);
        List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily);

        Operation Add(Operation operation);
        void Update(Operation operation);
        void Delete(Operation operation);

    }
}
