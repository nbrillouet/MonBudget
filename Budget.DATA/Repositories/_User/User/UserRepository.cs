﻿using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(BudgetContext context) : base(context)
        {

        }

        public PagedList<User> GetUserTable(FilterUserTableSelected filter)
        {
            var users = Context.User
                .Include(x => x.Shortcuts)
                .AsQueryable();

            if (filter.Keyword != null)
            {
                users = users.Where(x => x.FirstName.ToUpper().Contains(filter.Keyword.ToUpper())
                    || x.LastName.ToUpper().Contains(filter.Keyword.ToUpper())
                    || x.UserName.ToUpper().Contains(filter.Keyword.ToUpper())
                    );
            }
            
            if (filter.Pagination.SortDirection == "asc")
                users = users.OrderBy(filter.Pagination.SortColumn);
            else
                users = users.OrderByDescending(filter.Pagination.SortColumn);

            var results = PagedListRepository<User>.Create(users, filter.Pagination);

            return results;
        }

        
        public User GetForDetailById(int id)
        {
            return Context.User
                .Where(x => x.Id == id)
                .Include(x => x.Shortcuts)
                .FirstOrDefault();
        }

        public List<BankAgency> GetBankAgencies(int idUser)
        {
            List<Account> results = Context.UserAccount
                .Where(x => x.IdUser == idUser)
                .Select(x => x.Account)
                .Include(x => x.BankAgency)
                .Include(x => x.AccountType)
                .Include(x=>x.UserAccounts)
                    .ThenInclude(ua=>ua.User)
                .ToList();

            var bankAgencies = results.Select(x => x.BankAgency).ToList();
            var distinctBankAgencies= bankAgencies.GroupBy(x =>x.Id)
                .Select(x=>x.FirstOrDefault())
                .ToList();
            return distinctBankAgencies;
        }
    }
}
