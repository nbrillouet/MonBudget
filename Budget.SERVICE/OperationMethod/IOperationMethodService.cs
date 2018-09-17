using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationMethodService : IGenericListService
    {
        List<SelectDto> GetSelect(int idSelectType);

        OperationMethod GetOperationMethodByFileLabel(string operationLabel, int idBank);
        OperationMethod GetById(int idOperationMethod);
        List<OperationMethod> GetAll();
        List<OperationMethod> GetAllForEdit();

        int Create(OperationMethod operationMethod);
        void Update(OperationMethod operationMethod);
        void Delete(OperationMethod operationMethod);
    }
}
