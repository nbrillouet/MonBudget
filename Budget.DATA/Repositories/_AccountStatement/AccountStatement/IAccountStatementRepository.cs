﻿using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementRepository : IBaseRepository<AccountStatement>
    {
        PagedList<AccountStatement> GetAsTable(FilterAsTableSelected filter);
        
        AccountStatement GetAsDetail(int id);

        List<AccountStatement> GetByDatePlanPosteReferenceList(List<PlanPosteReference> planPosteReferences, DateTime dateMin, DateTime dateMax);

        Boolean Save(List<AccountStatement> accountStatements);
        AccountStatement Save(AccountStatement accountStatement);
        SoldeDto GetSolde(int? idUser, int? idAccount, DateTime dateMin, DateTime dateMax, bool isWithITransfer);
        List<AccountStatement> GetAsInternalTransfer(int idUserGroup, int? idAccount, DateTime dateMin, DateTime dateMax);
        AccountStatement GetAsInternalTransferCouple(int idUserGroup, int idAccountStatement);

    }
}
