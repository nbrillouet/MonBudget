using Budget.MODEL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA
{
    public class BudgetContext : DbContext
    {
        public BudgetContext(DbContextOptions<BudgetContext> options) : base(options){ }

        public DbSet<User> User { get; set; }
        public DbSet<Shortcut> Shortcut { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=SQLDEVGD;Database=Test_NB;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}
