using Budget.MODEL.Database;
using System;
using System.Collections.Generic;

namespace Budget.MODEL.Dto
{
    public class AsifForListDto
    {
        public int Id { get; set; }

        public int IdImport { get; set; }

        public int? IdAccount { get; set; }

        public Account Account { get; set; }

        public DateTime? DateOperation { get; set; }

        public string LabelOperation { get; set; }

        public int? IdOperationMethod { get; set; }

        public OperationMethod OperationMethod { get; set; }

        public int? IdOperation { get; set; }
        public string OperationLabelTemp { get; set; }
        public string OperationKeywordTemp { get; set; }
        public string OperationReferenceTemp { get; set; }
        public Operation Operation { get; set; }
        public int? IdOperationPlace { get; set; }
        public string OperationPlaceDepartmentTemp { get; set; }
        public string OperationPlaceCityTemp { get; set; }
        public string OperationPlaceKeywordTemp { get; set; }
        public OperationPlace OperationPlace { get; set; }
        public int? IdOperationType { get; set; }
        public int? IdOperationTypeFamily { get; set; }
        public OperationType OperationType { get; set; }
        public string Reference { get; set; }
        public DateTime? DateIntegration { get; set; }
        public double AmountOperation { get; set; }
        public int IdMovement { get; set; }
        public DateTime DateImport { get; set; }
        public string LabelOperationWork { get; set; }
        //public EnumAccountStatementImportFileState EnumAccountStatementImportFileState { get; set; }
        public bool IsDuplicated { get; set; }
    }

    public class AsifGroup
    {
        public List<AsifForListDto> AccountStatementsFull { get; set; }
        public List<AsifForListDto> AccountStatementsComplete { get; set; }
        public List<AsifForListDto> AccountStatementsMethodLess { get; set; }
        public List<AsifForListDto> AccountStatementsOperationLess { get; set; }
    }

    public class AsifGroupByAccounts
    {
        public List<Account> Accounts { get; set; }
        public int IdImport { get; set; }
        //public Account Account { get; set; }
        //public AsifGroup AsifGroup { get; set; }
        public AsifGroupByAccounts()
        {
            //AsifGroup = new AsifGroup();
            Accounts = new List<Account>();
        }
    }

    public class AsifsGroupByAccount
    {
        //public List<AsifGroupByAccount> AsifGroupByAccountList { get; set; }

        public int IdImport { get; set; }

        public AsifsGroupByAccount()
        {
            //AsifGroupByAccountList = new List<AsifGroupByAccount>();
        }
    }

    public class AsifState
    {
        public int Id { get; set; }
        public string Label { get; set; }
    }

}
