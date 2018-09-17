//using Budget.MODEL;
//using Budget.MODEL.Database;
//using Budget.MODEL.Dto;
//using System;
//using System.Collections.Generic;
//using System.Text;

//namespace Budget.SERVICE
//{
//    public interface IOperationPlaceService
//    {
//        List<SelectDto> GetSelect(int idSelectType);


//        List<OperationPlace> GetAll();
//        List<OperationPlace> GetAllWithKeyword();
//        OperationPlace GetById(int id);
//        List<GenericList> GetGenericList();

//        //Specific service
//        OperationPlace GetByFileLabel(string fileLabel);
//        OperationPlace GetOperationPlaceByParsingLabel(AccountStatementImportFile accountStatementImportFile);

//        int Create(OperationPlace operationPlace);
//        void Update(OperationPlace operationPlace);
//        void Delete(OperationPlace operationPlace);
//    }
//}
