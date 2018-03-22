using Budget.MODEL;
using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA
{
    public class BudgetContext : DbContext
    {
        public BudgetContext(DbContextOptions<BudgetContext> options) : base(options)
        {
            
        }
        
        public DbSet<User> User { get; set; }
        public DbSet<Shortcut> Shortcut { get; set; }
        public DbSet<Bank> Bank { get; set; }
        public DbSet<AccountType> AccountType { get; set; }
        public DbSet<Account> Account { get; set; }
        public DbSet<OperationTypeFamily> OperationTypeFamily { get; set; }
        public DbSet<OperationType> OperationType { get; set; }
        public DbSet<OperationPlace> OperationPlace { get; set; }
        public DbSet<OperationMethod> OperationMethod { get; set; }
        public DbSet<OperationMethodLexical> OperationMethodLexical { get; set; }
        public DbSet<Operation> Operation { get; set; }
        public DbSet<AccountStatement> AccountStatement { get; set; }
        public DbSet<AccountStatementImport> AccountStatementImport { get; set; }
        public DbSet<BankFileDefinition> BankFileDefinition { get; set; }
        public DbSet<AccountStatementImportFile> AccountStatementImportFile { get; set; }
        public DbSet<Parameter> Parameter { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-0M47AE3\SQLEXPRESS;Database=Budget;Trusted_Connection=True;MultipleActiveResultSets=true");
            //optionsBuilder.UseSqlServer(@"Server=PS10;Database=XmlToSwift_Demo;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>()
                .HasIndex(b => b.Number)
                .HasName("IX_AccountNumber")
                .IsUnique();

            modelBuilder.Entity<Operation>()
                .HasIndex(i => i.Label)
                .HasName("IX_OperationLabel")
                .IsUnique();

           modelBuilder.Entity<Operation>()
                .HasIndex(i => i.Keyword)
                .HasName("IX_OperationKeyword")
                .IsUnique();

            modelBuilder.Entity<OperationTypeFamily>()
                .HasIndex(i => new { i.Id, i.IdMovement })
                .HasName("IX_OTF_Id_IdMovement")
                .IsUnique();
        }
    }
}
