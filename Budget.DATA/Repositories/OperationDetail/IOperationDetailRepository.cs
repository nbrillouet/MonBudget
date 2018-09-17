using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationDetailRepository : IBaseRepository<OperationDetail>
    {
        OperationDetail GetForAddressById(int id);
        OperationDetail GetByIdOperation(int idOperation);
        List<OperationDetail> GetAllByIdOperationMethod(int idOperationMethod);
        OperationDetail GetByOperationDetail(OperationDetail operationDetail);
    }

}
