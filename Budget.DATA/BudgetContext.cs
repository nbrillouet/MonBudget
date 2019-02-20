using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA
{

    /// <summary>
    /// changement DATABASE
    /// --> table operation_place mettre à NULL les departement pour id 1 / 20 / 27
    /// --> remplacer l'id 2 (bordeaux) par NON APPLICABLE : 
    ///   update OPERATION_PLACE set city = 'N/A'  WHERE id=2
    ///   update OPERATION_PLACE set DEPARTMENT = NULL  WHERE id = 2
    ///   update OPERATION_PLACE set keyword = '--FAKE_KEYWORD--'  WHERE id = 2
    ///   insert into OPERATION_PLACE values( 'BORDEAUX','33','33BORDEAUX')
    /// </summary>
    public class BudgetContext : DbContext
    {
        public BudgetContext(DbContextOptions<BudgetContext> options) : base(options)
        {
            
        }
        
        public DbSet<User> User { get; set; }
        public DbSet<UserShortcut> Shortcut { get; set; }
        public DbSet<Bank> Bank { get; set; }
        public DbSet<AccountType> AccountType { get; set; }
        public DbSet<Account> Account { get; set; }
        public DbSet<OperationTypeFamily> OperationTypeFamily { get; set; }
        public DbSet<OperationType> OperationType { get; set; }
        //public DbSet<OperationPlace> OperationPlace { get; set; }
        public DbSet<OperationMethod> OperationMethod { get; set; }
        public DbSet<OperationMethodLexical> OperationMethodLexical { get; set; }
        public DbSet<Operation> Operation { get; set; }
        public DbSet<AccountStatement> AccountStatement { get; set; }
        public DbSet<AccountStatementPlan> AccountStatementPlan { get; set; }
        public DbSet<AccountStatementImport> AccountStatementImport { get; set; }
        public DbSet<BankFileDefinition> BankFileDefinition { get; set; }
        public DbSet<AccountStatementImportFile> AccountStatementImportFile { get; set; }
        public DbSet<Parameter> Parameter { get; set; }
        public DbSet<UserAccount> UserAccount { get; set; }


        public DbSet<GMapAddress> GMapAddress { get; set; }
        public DbSet<GMapAdministrativeAreaLevel1> GMapAdministrativeAreaLevel1 { get; set; }
        public DbSet<GMapAdministrativeAreaLevel2> GMapAdministrativeAreaLevel2 { get; set; }
        public DbSet<GMapCountry> GMapCountry { get; set; }
        public DbSet<GMapLocality> GMapLocality { get; set; }
        public DbSet<GMapNeighborhood> GMapNeighborhood { get; set; }
        public DbSet<GMapPostalCode> GMapPostalCode { get; set; }
        public DbSet<GMapRoute> GMapRoute { get; set; }
        public DbSet<GMapStreetNumber> GMapStreetNumber { get; set; }
        public DbSet<GMapSublocalityLevel1> GMapSublocalityLevel1 { get; set; }
        public DbSet<GMapSublocalityLevel2> GMapSublocalityLevel2 { get; set; }
        public DbSet<OperationDetail> OperationDetail { get; set; }
        public DbSet<GMapType> GMapType { get; set; }
        public DbSet<GMapAddressType> GMapAddressType { get; set; }
        public DbSet<Plan> Plan { get; set; }
        public DbSet<PlanUser> PlanUser { get; set; }
        public DbSet<Poste> Poste { get; set; }
        public DbSet<Frequency> Frequency { get; set; }
        public DbSet<ReferenceTable> ReferenceTable { get; set; }
        public DbSet<PlanPoste> PlanPoste { get; set; }
        public DbSet<PlanPosteUser> PlanPosteUser { get; set; }
        public DbSet<PlanPosteFrequency> PlanPosteFrequency { get; set; }
        public DbSet<PlanPosteReference> PlanPosteReference { get; set; }
        

        //Procedures NOT MAPPED
        public virtual DbSet<SoldeDto> SoldeDto { get; set; }
        public DbQuery<VPlanGlobal> VPlanGlobal { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            //optionsBuilder.UseSqlServer(@"Server=DESKTOP-0M47AE3\SQLEXPRESS;Database=Budget;Trusted_Connection=True;MultipleActiveResultSets=true");
            optionsBuilder.UseSqlServer(@"Server=PS10;Database=XmlToSwift_Demo;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //Procedures NOT MAPPED
            //modelBuilder.Ignore<SoldeDto>();

            modelBuilder.Entity<Account>()
                .HasIndex(b => b.Number)
                .HasName("IX_AccountNumber")
                .IsUnique();

            modelBuilder.Entity<Operation>()
                .HasIndex("Label", "IdOperationMethod", "IdOperationType")
                .HasName("IX_OperationKey")
                .IsUnique();

            modelBuilder.Entity<OperationDetail>()
                .HasIndex(p => new { p.KeywordOperation, p.KeywordPlace})
                .HasName("IX_Keyword")
                .IsUnique();

            modelBuilder.Entity<PlanUser>()
                .HasIndex(p => new { p.IdPlan, p.IdUser })
                .HasName("IX_PlanUser")
                .IsUnique();

            modelBuilder.Entity<OperationTypeFamily>()
                .HasIndex(i => new { i.Id, i.IdMovement })
                .HasName("IX_OTF_Id_IdMovement")
                .IsUnique();

            modelBuilder
                .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL");
                //.Property(x => x.AmountOperation).HasColumnName("AMOUNT_OPERATION");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.AU).HasColumnName("AU");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.DateIntegration).HasColumnName("DATE_INTEGRATION");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.FirstName).HasColumnName("FIRST_NAME");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.IdAccountStatement).HasColumnName("ID_ACCOUNT_STATEMENT");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.IdPlan).HasColumnName("ID_PLAN");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.IdPlanPoste).HasColumnName("ID_PLAN_POSTE");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.IdPoste).HasColumnName("ID_POSTE");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.IdReference).HasColumnName("ID_REFERENCE");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.LabelReference).HasColumnName("LABEL_REFERENCE");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.Month).HasColumnName("MONTH");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.PA).HasColumnName("PA");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.PreviewAmount).HasColumnName("PREVIEW_AMOUNT");
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL")
            //    .Property(x => x.Year).HasColumnName("YEAR");



        }
    }
}
