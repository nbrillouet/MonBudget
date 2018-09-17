using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationRepository : IBaseRepository<Operation>, IGenericListRepository
    {
        //List<Operation> GetByIdOperationMethod(int idOperationMethod);
        List<Operation> GetSelectList(int idOperationMethod, int idOperationType);
        List<Operation> GetSelectList(List<SelectDto> operationMethods);
        Operation Add(Operation operation);


        List<Operation> GetAllByOrder();

        List<Operation> GetAllByIdOperationMethod(int idOperationMethod);
        List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily);

    }
}
