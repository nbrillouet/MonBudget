using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Budget.SERVICE
{
    public abstract class BankingImportService
    {
        public abstract List<AccountStatementImportFile> ImportFile(StreamReader reader, AccountStatementImport accountStatementImport, User user);
        //protected abstract DateTime? GetDateOperationByFileLabel(string operationLabelWork, EnumOperationMethod enumOperationMethod);
        protected abstract OperationInformation GetOperationInformationByParsingLabel(string label, string labelWork, OperationMethod operationMethod);
        protected abstract OperationInformation GetOperationInformationForCardPayment(string label, string labelWork, string operationMethodKeyword);
        protected abstract OperationInformation GetOperationInformationForCashWithdrawal(string label, string labelWork, string operationMethodKeyword);
        protected abstract OperationInformation GetOperationInformationForCotisation(string label, string labelWork, string operationMethodKeyword);
        protected abstract OperationInformation GetOperationInformationForVirement(string label, string labelWork, string operationMethodKeyword);
        protected abstract OperationInformation GetOperationInformationForRemiseCheque(string label, string labelWork, string operationMethodKeyword);
        protected abstract OperationInformation GetOperationInformationForEmissionCheque(string label, string labelWork, string operationMethodKeyword);
        protected abstract OperationInformation GetOperationInformationForPrelevement(string label, string labelWork, string operationMethodKeyword);
        protected abstract OperationInformation GetOperationInformationForFrais(string label, string labelWork, string operationMethodKeyword);

    }
}
