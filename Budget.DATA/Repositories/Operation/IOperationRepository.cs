using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationRepository : IBaseRepository<Operation>, IGenericListRepository
    {
        List<Operation> GetAllByOrder();

        List<Operation> GetAllByIdOperationMethod(int idOperationMethod);
        List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily);
        new int Create(Operation operation);
    }
}
