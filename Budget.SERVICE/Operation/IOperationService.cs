using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationService : IGenericListService
    {
        Operation GetById(int idOperation);
        List<Operation> GetAllByOrder();
        List<Operation> GetAllByIdOperationMethod(int idOperationMethod);
        List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily);
        Operation GetOperationByFileLabel(string operationLabel, string reference, EnumBank bankEnum, OperationMethod operationMethod, int idMovement);
        DateTime? GetDateOperationByFileLabel(string operationLabel, OperationMethod operationMethod);
        Operation GetOperationByParsingLabel(AccountStatementImportFile accountStatementImportFile);
        int Create(Operation operation);
        void Update(Operation operation);
        void Delete(Operation operation);

    }
}
