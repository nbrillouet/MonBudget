﻿// <auto-generated />
using Budget.DATA;
using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Budget.DATA.Migrations
{
    [DbContext(typeof(BudgetContext))]
    partial class BudgetContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Budget.MODEL.Bank", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("AddressBank")
                        .HasColumnName("ADDRESS_BANK")
                        .HasMaxLength(50);

                    b.Property<string>("AdviserFirstName")
                        .HasColumnName("ADVISER_FIRST_NAME")
                        .HasMaxLength(50);

                    b.Property<string>("AdviserFixedPhone")
                        .HasColumnName("ADVISER_FIXED_PHONE")
                        .HasMaxLength(30);

                    b.Property<string>("AdviserLastName")
                        .HasColumnName("ADVISER_LAST_NAME")
                        .HasMaxLength(50);

                    b.Property<string>("AdviserMail")
                        .HasColumnName("ADVISER_MAIL")
                        .HasMaxLength(50);

                    b.Property<string>("AdviserMobilePhone")
                        .HasColumnName("ADVISER_MOBILE_PHONE")
                        .HasMaxLength(30);

                    b.Property<string>("FolderFileSave")
                        .HasColumnName("FOLDER_FILE_SAVE");

                    b.Property<string>("LabelBankLong")
                        .HasColumnName("LABEL_BANK_LONG")
                        .HasMaxLength(50);

                    b.Property<string>("LabelBankShort")
                        .HasColumnName("LABEL_BANK_SHORT")
                        .HasMaxLength(50);

                    b.Property<string>("LogoClassName")
                        .HasColumnName("LOGO_CLASS_NAME")
                        .HasMaxLength(30);

                    b.Property<int>("PostalCodeBank")
                        .HasColumnName("POSTAL_CODE_BANK");

                    b.HasKey("Id");

                    b.ToTable("BANK");
                });

            modelBuilder.Entity("Budget.MODEL.Database.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<double>("AlertThreshold")
                        .HasColumnName("ALERT_THRESHOLD");

                    b.Property<int>("IdAccountType")
                        .HasColumnName("ID_ACCOUNT_TYPE");

                    b.Property<int>("IdBank")
                        .HasColumnName("ID_BANK");

                    b.Property<string>("Label")
                        .HasColumnName("LABEL")
                        .HasMaxLength(50);

                    b.Property<string>("Number")
                        .HasColumnName("NUMBER")
                        .HasMaxLength(50);

                    b.Property<double>("StartAmount")
                        .HasColumnName("START_AMOUNT");

                    b.HasKey("Id");

                    b.HasIndex("IdAccountType");

                    b.HasIndex("IdBank");

                    b.HasIndex("Number")
                        .IsUnique()
                        .HasName("IX_AccountNumber")
                        .HasFilter("[NUMBER] IS NOT NULL");

                    b.ToTable("ACCOUNT");
                });

            modelBuilder.Entity("Budget.MODEL.Database.AccountStatement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<double>("AmountOperation")
                        .HasColumnName("AMOUNT_OPERATION");

                    b.Property<DateTime>("DateImport")
                        .HasColumnName("DATE_IMPORT");

                    b.Property<DateTime?>("DateIntegration")
                        .HasColumnName("DATE_INTEGRATION");

                    b.Property<DateTime?>("DateOperation")
                        .HasColumnName("DATE_OPERATION");

                    b.Property<int?>("IdAccount")
                        .HasColumnName("ID_ACCOUNT");

                    b.Property<int>("IdImport")
                        .HasColumnName("ID_IMPORT");

                    b.Property<int>("IdMovement")
                        .HasColumnName("ID_MOVEMENT");

                    b.Property<int?>("IdOperation")
                        .HasColumnName("ID_OPERATION");

                    b.Property<int?>("IdOperationMethod")
                        .HasColumnName("ID_OPERATION_METHOD");

                    b.Property<int?>("IdOperationPlace")
                        .HasColumnName("ID_OPERATION_PLACE");

                    b.Property<int?>("IdOperationType")
                        .HasColumnName("ID_OPERATION_TYPE");

                    b.Property<int?>("IdOperationTypeFamily")
                        .HasColumnName("ID_OPERATION_TYPE_FAMILY");

                    b.Property<string>("LabelOperation")
                        .HasColumnName("LABEL_OPERATION")
                        .HasMaxLength(500);

                    b.Property<string>("Reference")
                        .HasColumnName("REFERENCE")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("IdAccount");

                    b.HasIndex("IdImport");

                    b.HasIndex("IdOperation");

                    b.HasIndex("IdOperationMethod");

                    b.HasIndex("IdOperationPlace");

                    b.HasIndex("IdOperationType");

                    b.ToTable("ACCOUNT_STATEMENT");
                });

            modelBuilder.Entity("Budget.MODEL.Database.AccountStatementImport", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<DateTime>("DateImport")
                        .HasColumnName("DATE_IMPORT");

                    b.Property<string>("FileImport")
                        .HasColumnName("FILE_IMPORT");

                    b.Property<int>("IdBank")
                        .HasColumnName("ID_BANK");

                    b.Property<int>("IdUser")
                        .HasColumnName("ID_USER");

                    b.HasKey("Id");

                    b.HasIndex("IdBank");

                    b.HasIndex("IdUser");

                    b.ToTable("ACCOUNT_STATEMENT_IMPORT");
                });

            modelBuilder.Entity("Budget.MODEL.Database.AccountStatementImportFile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<double>("AmountOperation")
                        .HasColumnName("AMOUNT_OPERATION");

                    b.Property<DateTime>("DateImport")
                        .HasColumnName("DATE_IMPORT");

                    b.Property<DateTime?>("DateIntegration")
                        .HasColumnName("DATE_INTEGRATION");

                    b.Property<DateTime?>("DateOperation")
                        .HasColumnName("DATE_OPERATION");

                    b.Property<int>("EnumAccountStatementImportFileState")
                        .HasColumnName("STATE");

                    b.Property<int?>("IdAccount")
                        .HasColumnName("ID_ACCOUNT");

                    b.Property<int>("IdImport")
                        .HasColumnName("ID_IMPORT");

                    b.Property<int>("IdMovement")
                        .HasColumnName("ID_MOVEMENT");

                    b.Property<int?>("IdOperation")
                        .HasColumnName("ID_OPERATION");

                    b.Property<int?>("IdOperationMethod")
                        .HasColumnName("ID_OPERATION_METHOD");

                    b.Property<int?>("IdOperationPlace")
                        .HasColumnName("ID_OPERATION_PLACE");

                    b.Property<int?>("IdOperationType")
                        .HasColumnName("ID_OPERATION_TYPE");

                    b.Property<int?>("IdOperationTypeFamily")
                        .HasColumnName("ID_OPERATION_TYPE_FAMILY");

                    b.Property<bool>("IsDuplicated")
                        .HasColumnName("IS_DUPLICATED");

                    b.Property<string>("LabelOperation")
                        .HasColumnName("LABEL_OPERATION")
                        .HasMaxLength(500);

                    b.Property<string>("LabelOperationWork")
                        .HasColumnName("LABEL_OPERATION_WORK")
                        .HasMaxLength(500);

                    b.Property<string>("OperationKeywordTemp")
                        .HasColumnName("OPERATION_KEYWORD_TEMP");

                    b.Property<string>("OperationLabelTemp")
                        .HasColumnName("OPERATION_LABEL_TEMP");

                    b.Property<string>("OperationPlaceCityTemp")
                        .HasColumnName("OPERATION_PLACE_CITY_TEMP");

                    b.Property<string>("OperationPlaceDepartmentTemp")
                        .HasColumnName("OPERATION_PLACE_DEPARTMENT_TEMP");

                    b.Property<string>("OperationPlaceKeywordTemp")
                        .HasColumnName("OPERATION_PLACE_KEYWORD_TEMP");

                    b.Property<string>("OperationReferenceTemp")
                        .HasColumnName("OPERATION_REFERENCE_TEMP");

                    b.Property<string>("Reference")
                        .HasColumnName("REFERENCE")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("IdAccount");

                    b.HasIndex("IdImport");

                    b.HasIndex("IdOperation");

                    b.HasIndex("IdOperationMethod");

                    b.HasIndex("IdOperationPlace");

                    b.HasIndex("IdOperationType");

                    b.ToTable("ACCOUNT_STATEMENT_IMPORT_FILE");
                });

            modelBuilder.Entity("Budget.MODEL.Database.AccountType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("Label")
                        .HasColumnName("LABEL")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("ACCOUNT_TYPE");
                });

            modelBuilder.Entity("Budget.MODEL.Database.BankFileDefinition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<int>("IdBank")
                        .HasColumnName("ID_BANK");

                    b.Property<string>("LabelField")
                        .HasColumnName("LABEL_FIELD")
                        .HasMaxLength(50);

                    b.Property<int>("LabelOrder")
                        .HasColumnName("LABEL_ORDER");

                    b.HasKey("Id");

                    b.HasIndex("IdBank");

                    b.ToTable("BANK_FILE_DEFINITION");
                });

            modelBuilder.Entity("Budget.MODEL.Database.Operation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<int>("IdOperationMethod")
                        .HasColumnName("ID_OPERATION_METHOD");

                    b.Property<int>("IdOperationType")
                        .HasColumnName("ID_OPERATION_TYPE");

                    b.Property<string>("Keyword")
                        .IsRequired()
                        .HasColumnName("KEYWORD")
                        .HasMaxLength(255);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnName("LABEL")
                        .HasMaxLength(255);

                    b.Property<string>("Reference")
                        .HasColumnName("REFERENCE")
                        .HasMaxLength(20);

                    b.HasKey("Id");

                    b.HasIndex("IdOperationMethod");

                    b.HasIndex("IdOperationType");

                    b.HasIndex("Keyword")
                        .IsUnique()
                        .HasName("IX_OperationKeyword");

                    b.HasIndex("Label")
                        .IsUnique()
                        .HasName("IX_OperationLabel");

                    b.ToTable("OPERATION");
                });

            modelBuilder.Entity("Budget.MODEL.Database.OperationMethod", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("Label")
                        .HasColumnName("LABEL")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("OPERATION_METHOD");
                });

            modelBuilder.Entity("Budget.MODEL.Database.OperationMethodLexical", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<int>("IdBank")
                        .HasColumnName("ID_BANK");

                    b.Property<int>("IdOperationMethod")
                        .HasColumnName("ID_OPERATION_METHOD");

                    b.Property<string>("Keyword")
                        .HasColumnName("KEYWORD")
                        .HasMaxLength(50);

                    b.Property<int>("OrderId")
                        .HasColumnName("ORDER_ID");

                    b.HasKey("Id");

                    b.HasIndex("IdBank");

                    b.HasIndex("IdOperationMethod");

                    b.ToTable("OPERATION_METHOD_LEXICAL");
                });

            modelBuilder.Entity("Budget.MODEL.Database.OperationPlace", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("City")
                        .HasColumnName("CITY")
                        .HasMaxLength(50);

                    b.Property<string>("Department")
                        .HasColumnName("DEPARTMENT")
                        .HasMaxLength(10);

                    b.Property<string>("Keyword")
                        .HasColumnName("KEYWORD")
                        .HasMaxLength(60);

                    b.HasKey("Id");

                    b.ToTable("OPERATION_PLACE");
                });

            modelBuilder.Entity("Budget.MODEL.Database.OperationType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<int>("IdOperationTypeFamily")
                        .HasColumnName("ID_OPERATION_TYPE_FAMILY");

                    b.Property<string>("Label")
                        .HasColumnName("LABEL")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("IdOperationTypeFamily");

                    b.ToTable("OPERATION_TYPE");
                });

            modelBuilder.Entity("Budget.MODEL.Database.OperationTypeFamily", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<int>("IdMovement")
                        .HasColumnName("ID_MOVEMENT");

                    b.Property<string>("Label")
                        .HasColumnName("LABEL")
                        .HasMaxLength(50);

                    b.Property<string>("LogoClassName")
                        .HasColumnName("LOGO_CLASS_NAME")
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.HasIndex("Id", "IdMovement")
                        .IsUnique()
                        .HasName("IX_OTF_Id_IdMovement");

                    b.ToTable("OPERATION_TYPE_FAMILY");
                });

            modelBuilder.Entity("Budget.MODEL.Database.Parameter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<int>("IdUser")
                        .HasColumnName("ID_USER");

                    b.Property<string>("ImportFileDir")
                        .HasColumnName("IMPORT_FILE_DIR")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.HasIndex("IdUser");

                    b.ToTable("PARAMETER");
                });

            modelBuilder.Entity("Budget.MODEL.Shortcut", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("Icon")
                        .HasColumnName("ICON");

                    b.Property<int>("IdUser")
                        .HasColumnName("ID_USER");

                    b.Property<string>("Title")
                        .HasColumnName("TITLE");

                    b.Property<string>("Type")
                        .HasColumnName("TYPE");

                    b.Property<string>("Url")
                        .HasColumnName("URL");

                    b.HasKey("Id");

                    b.HasIndex("IdUser");

                    b.ToTable("SHORTCUT");
                });

            modelBuilder.Entity("Budget.MODEL.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("AvatarUrl")
                        .HasColumnName("AVATAR_URL");

                    b.Property<string>("City")
                        .HasColumnName("CITY");

                    b.Property<string>("Country")
                        .HasColumnName("COUNTRY");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnName("CREATION_DATE");

                    b.Property<DateTime>("DateLastActive")
                        .HasColumnName("LAST_ACTIVE_DATE");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnName("BIRTH_DATE");

                    b.Property<string>("FirstName")
                        .HasColumnName("FIRST_NAME");

                    b.Property<string>("Gender")
                        .HasColumnName("GENDER");

                    b.Property<string>("IdAvatarCloud")
                        .HasColumnName("ID_AVATAR_CLOUD");

                    b.Property<string>("LastName")
                        .HasColumnName("LAST_NAME");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnName("PASSWORD_HASH");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnName("PASSWORD_SALT");

                    b.Property<int>("PostalCode")
                        .HasColumnName("POSTAL_CODE");

                    b.Property<string>("UserName")
                        .HasColumnName("USER_NAME");

                    b.HasKey("Id");

                    b.ToTable("USER");
                });

            modelBuilder.Entity("Budget.MODEL.Database.Account", b =>
                {
                    b.HasOne("Budget.MODEL.Database.AccountType", "AccountType")
                        .WithMany()
                        .HasForeignKey("IdAccountType")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Budget.MODEL.Bank", "Bank")
                        .WithMany()
                        .HasForeignKey("IdBank")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Budget.MODEL.Database.AccountStatement", b =>
                {
                    b.HasOne("Budget.MODEL.Database.Account", "Account")
                        .WithMany()
                        .HasForeignKey("IdAccount");

                    b.HasOne("Budget.MODEL.Database.AccountStatementImport", "AccountStatementImport")
                        .WithMany()
                        .HasForeignKey("IdImport")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Budget.MODEL.Database.Operation", "Operation")
                        .WithMany()
                        .HasForeignKey("IdOperation");

                    b.HasOne("Budget.MODEL.Database.OperationMethod", "OperationMethod")
                        .WithMany()
                        .HasForeignKey("IdOperationMethod");

                    b.HasOne("Budget.MODEL.Database.OperationPlace", "OperationPlace")
                        .WithMany()
                        .HasForeignKey("IdOperationPlace");

                    b.HasOne("Budget.MODEL.Database.OperationType", "OperationType")
                        .WithMany()
                        .HasForeignKey("IdOperationType");
                });

            modelBuilder.Entity("Budget.MODEL.Database.AccountStatementImport", b =>
                {
                    b.HasOne("Budget.MODEL.Bank", "Bank")
                        .WithMany()
                        .HasForeignKey("IdBank")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Budget.MODEL.User", "User")
                        .WithMany()
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Budget.MODEL.Database.AccountStatementImportFile", b =>
                {
                    b.HasOne("Budget.MODEL.Database.Account", "Account")
                        .WithMany()
                        .HasForeignKey("IdAccount");

                    b.HasOne("Budget.MODEL.Database.AccountStatementImport", "AccountStatementImport")
                        .WithMany()
                        .HasForeignKey("IdImport")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Budget.MODEL.Database.Operation", "Operation")
                        .WithMany()
                        .HasForeignKey("IdOperation");

                    b.HasOne("Budget.MODEL.Database.OperationMethod", "OperationMethod")
                        .WithMany()
                        .HasForeignKey("IdOperationMethod");

                    b.HasOne("Budget.MODEL.Database.OperationPlace", "OperationPlace")
                        .WithMany()
                        .HasForeignKey("IdOperationPlace");

                    b.HasOne("Budget.MODEL.Database.OperationType", "OperationType")
                        .WithMany()
                        .HasForeignKey("IdOperationType");
                });

            modelBuilder.Entity("Budget.MODEL.Database.BankFileDefinition", b =>
                {
                    b.HasOne("Budget.MODEL.Bank", "Bank")
                        .WithMany()
                        .HasForeignKey("IdBank")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Budget.MODEL.Database.Operation", b =>
                {
                    b.HasOne("Budget.MODEL.Database.OperationMethod", "OperationMethod")
                        .WithMany()
                        .HasForeignKey("IdOperationMethod")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Budget.MODEL.Database.OperationType", "OperationType")
                        .WithMany()
                        .HasForeignKey("IdOperationType")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Budget.MODEL.Database.OperationMethodLexical", b =>
                {
                    b.HasOne("Budget.MODEL.Bank", "Bank")
                        .WithMany()
                        .HasForeignKey("IdBank")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Budget.MODEL.Database.OperationMethod", "OperationMethod")
                        .WithMany()
                        .HasForeignKey("IdOperationMethod")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Budget.MODEL.Database.OperationType", b =>
                {
                    b.HasOne("Budget.MODEL.Database.OperationTypeFamily", "OperationTypeFamily")
                        .WithMany()
                        .HasForeignKey("IdOperationTypeFamily")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Budget.MODEL.Database.Parameter", b =>
                {
                    b.HasOne("Budget.MODEL.User", "User")
                        .WithMany()
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Budget.MODEL.Shortcut", b =>
                {
                    b.HasOne("Budget.MODEL.User", "User")
                        .WithMany("Shortcuts")
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
