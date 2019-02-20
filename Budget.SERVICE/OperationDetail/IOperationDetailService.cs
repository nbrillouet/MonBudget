using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationDetailService 
    {
        OperationDetail GetForAddressById(int id);
        OperationDetail GetByIdOperation(int idOperation);
        OperationDetail GetByKeywordOperation(string operationLabel, int idOperationMethod, int idMovement);
        OperationDetail GetByKeywords(string operationLabel, int idOperationMethod, int idMovement);
        KeyLabel GetKeywordPlaceByParsingLabel(AccountStatementImportFile accountStatementImportFile);
        OperationDetail GetByOperationDetail(OperationDetail operationDetail);
        OperationDetail FindKeywordPlace(string operationLabel);
        //OperationDetail Create(OperationDetail operationDetail);
        OperationDetail GetOrCreate(OperationDetail operationDetail);

    }
}
