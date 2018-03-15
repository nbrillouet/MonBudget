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

        public async Task<PagedList<AccountStatementImport>> GetAsync(FilterAccountStatementImport filter)
        {
            var accountStatementImports = Context.AccountStatementImport
                .Include(x=>x.Bank)
                .Include(x=>x.User)
                .AsQueryable();

            if (filter.idUser != null)
            {
                accountStatementImports = accountStatementImports.Where(x => x.IdUser == filter.idUser);
            }
            if(filter.idBank !=null)
            {
                accountStatementImports = accountStatementImports.Where(x => x.IdBank == filter.idBank);
            }

            if (filter.SortDirection == "asc")
                accountStatementImports = accountStatementImports.OrderBy(filter.SortColumn);
            else
                accountStatementImports = accountStatementImports.OrderByDescending(filter.SortColumn);

            return await PagedListRepository<AccountStatementImport>.CreateAsync(accountStatementImports, filter.PageNumber, filter.PageSize);
        }

        public async Task<List<Bank>> GetDistinctBankAsync(int idUser)
        {
            var Banks = Context.AccountStatementImport
                .Include(x => x.Bank)
                .Where(x=>x.IdUser == idUser)
                .Select(x=>x.Bank)
                .Distinct()
                .AsQueryable();

            return await Banks.ToListAsync();
        }

        public new int Create(AccountStatementImport entity)
        {
            Context.Set<AccountStatementImport>().Add(entity);
            //ne pas enregistrer les entité attachés
            //foreach (var item in entity.AccountStatements)
            //{
            //    Context.Entry(item.Account).State = EntityState.Unchanged;
            //    Context.Entry(item).State= EntityState.Unchanged;
            //}
            //entity.AccountStatements.ForEach(x => Context.Entry(x).State = EntityState.Unchanged);
            Context.Entry(entity.Bank).State = EntityState.Unchanged;
            //entity.AccountStatements = null;
            //entity.Bank = null;

            Context.SaveChanges();

            return entity.Id;
        }

        public List<AccountStatement> ImportFile()
        {
            return null;
        }

    }
}