﻿using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Microsoft.EntityFrameworkCore;

namespace Budget.DATA
{

    public class BudgetContext : DbContext
    {
        public BudgetContext(DbContextOptions<BudgetContext> options) : base(options)
        {
            
        }
        
        public DbSet<User> User { get; set; }
        public DbSet<UserShortcut> Shortcut { get; set; }
        public DbSet<UserCustomOtf> UserCustomOtf { get; set; }
        public DbSet<BankSubFamily> BankAgency { get; set; }
        public DbSet<BankFileDefinition> BankFileDefinition { get; set; }
        public DbSet<BankFamily> BankFamily { get; set; }
        public DbSet<Movement> Movement { get; set; }
        public DbSet<AccountType> AccountType { get; set; }
        public DbSet<Account> Account { get; set; }
        public DbSet<OperationTypeFamily> OperationTypeFamily { get; set; }
        public DbSet<OperationType> OperationType { get; set; }
        public DbSet<OperationTransverse> OperationTransverse { get; set; }
        public DbSet<OperationTransverseAsif> OperationTransverseAsif { get; set; }
        public DbSet<OperationTransverseAs> OperationTransverseAs { get; set; }
        public DbSet<OperationMethod> OperationMethod { get; set; }
        public DbSet<OperationMethodLexical> OperationMethodLexical { get; set; }
        public DbSet<Operation> Operation { get; set; }
        public DbSet<AccountStatement> AccountStatement { get; set; }
        public DbSet<AccountStatementPlan> AccountStatementPlan { get; set; }
        public DbSet<AccountStatementImport> AccountStatementImport { get; set; }
        public DbSet<AccountStatementImportFile> AccountStatementImportFile { get; set; }
        public DbSet<Month> Month { get; set; }
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
        public DbSet<GMapTypeLanguage> GMapTypeLanguage { get; set; }
        public DbSet<GMapAddressType> GMapAddressType { get; set; }
        public DbSet<Plan> Plan { get; set; }
        public DbSet<PlanUser> PlanUser { get; set; }
        public DbSet<Poste> Poste { get; set; }
        public DbSet<ReferenceTable> ReferenceTable { get; set; }
        public DbSet<PlanPoste> PlanPoste { get; set; }
        public DbSet<PlanPosteUser> PlanPosteUser { get; set; }
        public DbSet<PlanPosteFrequency> PlanPosteFrequency { get; set; }
        public DbSet<PlanPosteReference> PlanPosteReference { get; set; }
        public DbSet<VPlanGlobal> VPlanGlobal { get; set; }

        //Procedures NOT MAPPED
        public virtual DbSet<SoldeDto> SoldeDto { get; set; }
        public virtual DbSet<AsEvolutionCdbDto> AsEvolutionDto { get; set; }
        public virtual DbSet<BaseChartData> BaseChartData { get; set; }
        //public DbQuery<VPlanGlobal> VPlanGlobal { get; set; }

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
                .HasIndex(p => new { p.KeywordOperation, p.KeywordPlace, p.IdUserGroup })
                .HasName("IX_Keyword")
                .IsUnique();

            //modelBuilder.Entity<OperationDetail>()
            //    .HasIndex(p => new { p.KeywordOperation, p.KeywordPlace,p.IdUser})
            //    .HasName("IX_Keyword")
            //    .IsUnique();

            modelBuilder.Entity<PlanUser>()
                .HasIndex(p => new { p.IdPlan, p.IdUser })
                .HasName("IX_PlanUser")
                .IsUnique();

            modelBuilder.Entity<OperationTypeFamily>()
                .HasIndex(i => new { i.Id, i.IdMovement })
                .HasName("IX_OTF_Id_IdMovement")
                .IsUnique();

            modelBuilder.Entity<AccountStatementPlan>()
                .HasIndex(p => new { p.IdAccountStatement, p.IdPlan })
                .HasName("IX_ASP_IdAccountStatement_IdPlan")
                .IsUnique();

            modelBuilder.Entity<UserCustomOtf>()
                .HasIndex(p => new { p.IdOperationTypeFamily, p.IdUser, p.IdAccount })
                .HasName("IX_UCO_IdOperationTypeFamily_IdUser_IdAccount")
                .IsUnique();
            //modelBuilder
            //    .Query<VPlanGlobal>().ToView("V_PLAN_GLOBAL");



            //Clef composite pour (une clef primaire ne suffit pas pour les proc stock: dans EF meme clef, meme resultat)
            modelBuilder.Entity<BaseChartData>()
                .HasKey(a => new { a.Id, a.Amount });
        }
    }
}
