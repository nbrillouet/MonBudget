using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationService : IGenericListService
    {

        //List<Operation> GetByIdOperationMethod(int idOperationMethod);
        List<SelectDto> GetSelectList(int idOperationMethod,int idOperationType);
        List<SelectDto> GetSelectList(List<SelectDto> operationMethods);

        Operation Add(Operation operation);


        Operation GetById(int idOperation);
        List<Operation> GetAllByOrder();
        List<Operation> GetAllByIdOperationMethod(int idOperationMethod);
        List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily);
        //Operation GetOperationByFileLabel(string operationLabel, string reference, EnumBank bankEnum, OperationMethod operationMethod, int idMovement);
        DateTime? GetDateOperationByFileLabel(string operationLabel, OperationMethod operationMethod);
        OperationTmpDto GetOperationByParsingLabel(AccountStatementImportFile accountStatementImportFile);
        //int Create(Operation operation);
        void Update(Operation operation);
        void Delete(Operation operation);

    }
}
