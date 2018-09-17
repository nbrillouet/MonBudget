using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTypeRepository : IBaseRepository<OperationType>
    {
        List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily);
        List<OperationType> GetByOperationTypeFamilies(List<SelectDto> OperationTypeFamilies);


        List<OperationType> GetAllByOrder(EnumSelect enumSelect);
        OperationType GetByIdWithOperationTypeFamily(int idOperationType);
        List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect);
        List<GenericList> GetGenericList();
        List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect);
        List<GenericList> GetGenericListByIdMovement(int IdMovement);
        List<OperationType> GetByIdMovement(int IdMovement);
        OperationType GetFirstByIdOperationTypeFamily(int idOperationTypeFamily);
        new int Create(OperationType operationType);
    }
}
