using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationMethodRepository : IBaseRepository<OperationMethod>, IGenericListRepository
    {
        List<OperationMethod> GetAllForEdit();
        List<OperationMethod> GetAllByOrder();
        new int Create(OperationMethod operationMethod);
        //OperationMethod GetOperationMethodByFileLabel(string operationLabel, int idBank);
        //OperationMethod GetById(int idOperationMethod);


    }
}
