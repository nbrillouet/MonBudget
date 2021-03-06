﻿using Budget.MODEL;
using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class AccountStatementImportRepository : BaseRepository<AccountStatementImport>, IAccountStatementImportRepository
    {
        public AccountStatementImportRepository(BudgetContext context) : base(context)
        {
        }

        public AccountStatementImport GetByIdForDetail(int id)
        {
            return Context.AccountStatementImport
                .Where(x => x.Id == id)
                .Include(x => x.User)
                .Include(x => x.BankAgency)
                .First();
        }
        public PagedList<AccountStatementImport> GetAsiTable(FilterAsiTableSelected filter)
        {
            var accountStatementImports = Context.AccountStatementImport
                .Include(x => x.User)
                .AsQueryable();

            if (filter.IdUser.HasValue)
            {
                accountStatementImports = accountStatementImports.Where(x => x.IdUser == filter.IdUser);
            }
            if (filter.IdBankAgency.HasValue)
            {
                accountStatementImports = accountStatementImports.Where(x => x.IdBankAgency == filter.IdBankAgency);
            }

            if (filter.Pagination.SortDirection == "asc")
            {
                accountStatementImports = accountStatementImports.OrderBy(filter.Pagination.SortColumn);
            }
            else
            {
                accountStatementImports = accountStatementImports.OrderByDescending(filter.Pagination.SortColumn);
            }
            var results = PagedListRepository<AccountStatementImport>.Create(accountStatementImports, filter.Pagination);

            return results;
        }
                

        public List<BankAgency> GetDistinctBankAgencies(int idUser)
        {
            var accountStatementImport = Context.AccountStatementImport
                .Include(x => x.BankAgency)
                    .ThenInclude(x=>x.BankSubFamily)
                        .ThenInclude(x=>x.BankFamily)
                .Where(x => x.IdUser == idUser)
                //.Select(x => x.BankAgency)
                //.Distinct()
                .ToList();
            var bankAgencies = accountStatementImport
                .Select(x => x.BankAgency)
                .Distinct()
                .ToList();

            return bankAgencies;
        }

        public new int Create(AccountStatementImport entity)
        {
            Context.Set<AccountStatementImport>().Add(entity);

            Context.SaveChanges();

            return entity.Id;
        }

        

        public List<AccountStatement> ImportFile()
        {
            return null;
        }

    }
}
