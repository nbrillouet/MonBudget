using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ACCOUNT_TYPE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_TYPE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "BANK",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL_BANK_SHORT = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL_BANK_LONG = table.Column<string>(maxLength: 50, nullable: true),
                    ADDRESS_BANK = table.Column<string>(maxLength: 50, nullable: true),
                    POSTAL_CODE_BANK = table.Column<int>(nullable: false),
                    ADVISER_FIRST_NAME = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_LAST_NAME = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_MAIL = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_FIXED_PHONE = table.Column<string>(maxLength: 30, nullable: true),
                    ADVISER_MOBILE_PHONE = table.Column<string>(maxLength: 30, nullable: true),
                    LOGO_CLASS_NAME = table.Column<string>(maxLength: 30, nullable: true),
                    FOLDER_FILE_SAVE = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "BANK_FILE_DEFINITION",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_BANK_FAMILY = table.Column<int>(nullable: false),
                    LABEL_FIELD = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL_ORDER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK_FILE_DEFINITION", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FREQUENCY",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MONTH_NUMBER = table.Column<int>(nullable: false),
                    MONTH_LABEL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FREQUENCY", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_ADMINISTRATIVE_AREA_LEVEL_1", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_ADMINISTRATIVE_AREA_LEVEL_2", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_COUNTRY",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_COUNTRY", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_LOCALITY",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_LOCALITY", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_NEIGHBORHOOD",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_NEIGHBORHOOD", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_POSTAL_CODE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_POSTAL_CODE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ROUTE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_ROUTE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_STREET_NUMBER",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_STREET_NUMBER", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_SUBLOCALITY_LEVEL_1",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_SUBLOCALITY_LEVEL_1", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_SUBLOCALITY_LEVEL_2",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_SUBLOCALITY_LEVEL_2", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_TYPE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_TYPE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_METHOD",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_METHOD", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TYPE_FAMILY",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true),
                    ID_MOVEMENT = table.Column<int>(nullable: false),
                    LOGO_CLASS_NAME = table.Column<string>(maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TYPE_FAMILY", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PLAN",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 100, nullable: true),
                    YEAR = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "POSTE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_POSTE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "REFERENCE_TABLE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TABLE_NAME = table.Column<string>(nullable: true),
                    LABEL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_REFERENCE_TABLE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "SoldeDto",
                columns: table => new
                {
                    Credit = table.Column<decimal>(nullable: false),
                    Debit = table.Column<decimal>(nullable: false),
                    Total = table.Column<decimal>(nullable: false),
                    Solde = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoldeDto", x => x.Credit);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NUMBER = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true),
                    ID_BANK = table.Column<int>(nullable: false),
                    START_AMOUNT = table.Column<double>(nullable: false),
                    ID_ACCOUNT_TYPE = table.Column<int>(nullable: false),
                    ALERT_THRESHOLD = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_ACCOUNT_TYPE_ID_ACCOUNT_TYPE",
                        column: x => x.ID_ACCOUNT_TYPE,
                        principalTable: "ACCOUNT_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_BANK_ID_BANK",
                        column: x => x.ID_BANK,
                        principalTable: "BANK",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ADDRESS",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FORMATTED_ADDRESS = table.Column<string>(nullable: false),
                    LAT = table.Column<double>(nullable: false),
                    LNG = table.Column<double>(nullable: false),
                    ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1 = table.Column<int>(nullable: false),
                    ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2 = table.Column<int>(nullable: false),
                    ID_GMAP_COUNTRY = table.Column<int>(nullable: false),
                    ID_GMAP_LOCALITY = table.Column<int>(nullable: false),
                    ID_GMAP_NEIGHBORHOOD = table.Column<int>(nullable: false),
                    ID_GMAP_POSTAL_CODE = table.Column<int>(nullable: false),
                    ID_GMAP_ROUTE = table.Column<int>(nullable: false),
                    ID_GMAP_STREET_NUMBER = table.Column<int>(nullable: false),
                    ID_GMAP_SUBLOCALITY_LEVEL_1 = table.Column<int>(nullable: false),
                    ID_GMAP_SUBLOCALITY_LEVEL_2 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_ADDRESS", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_ADMINISTRATIVE_AREA_LEVEL_1_ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                        column: x => x.ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1,
                        principalTable: "GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_ADMINISTRATIVE_AREA_LEVEL_2_ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                        column: x => x.ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2,
                        principalTable: "GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_COUNTRY_ID_GMAP_COUNTRY",
                        column: x => x.ID_GMAP_COUNTRY,
                        principalTable: "GMAP_COUNTRY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_LOCALITY_ID_GMAP_LOCALITY",
                        column: x => x.ID_GMAP_LOCALITY,
                        principalTable: "GMAP_LOCALITY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_NEIGHBORHOOD_ID_GMAP_NEIGHBORHOOD",
                        column: x => x.ID_GMAP_NEIGHBORHOOD,
                        principalTable: "GMAP_NEIGHBORHOOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_POSTAL_CODE_ID_GMAP_POSTAL_CODE",
                        column: x => x.ID_GMAP_POSTAL_CODE,
                        principalTable: "GMAP_POSTAL_CODE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_ROUTE_ID_GMAP_ROUTE",
                        column: x => x.ID_GMAP_ROUTE,
                        principalTable: "GMAP_ROUTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_STREET_NUMBER_ID_GMAP_STREET_NUMBER",
                        column: x => x.ID_GMAP_STREET_NUMBER,
                        principalTable: "GMAP_STREET_NUMBER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_SUBLOCALITY_LEVEL_1_ID_GMAP_SUBLOCALITY_LEVEL_1",
                        column: x => x.ID_GMAP_SUBLOCALITY_LEVEL_1,
                        principalTable: "GMAP_SUBLOCALITY_LEVEL_1",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_SUBLOCALITY_LEVEL_2_ID_GMAP_SUBLOCALITY_LEVEL_2",
                        column: x => x.ID_GMAP_SUBLOCALITY_LEVEL_2,
                        principalTable: "GMAP_SUBLOCALITY_LEVEL_2",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_METHOD_LEXICAL",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_BANK_FAMILY = table.Column<int>(nullable: false),
                    ID_OPERATION_METHOD = table.Column<int>(nullable: false),
                    KEYWORD = table.Column<string>(maxLength: 50, nullable: true),
                    ORDER_ID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_METHOD_LEXICAL", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_METHOD_LEXICAL_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TYPE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TYPE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TYPE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_PLAN = table.Column<int>(nullable: false),
                    ID_POSTE = table.Column<int>(nullable: false),
                    ID_REFERENCE_TABLE = table.Column<int>(nullable: false),
                    LABEL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN_POSTE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_PLAN_ID_PLAN",
                        column: x => x.ID_PLAN,
                        principalTable: "PLAN",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_POSTE_ID_POSTE",
                        column: x => x.ID_POSTE,
                        principalTable: "POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_REFERENCE_TABLE_ID_REFERENCE_TABLE",
                        column: x => x.ID_REFERENCE_TABLE,
                        principalTable: "REFERENCE_TABLE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ADDRESS_TYPE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_GMAP_ADDRESS = table.Column<int>(nullable: false),
                    ID_GMAP_TYPE = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_ADDRESS_TYPE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_TYPE_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                        column: x => x.ID_GMAP_ADDRESS,
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_TYPE_GMAP_TYPE_ID_GMAP_TYPE",
                        column: x => x.ID_GMAP_TYPE,
                        principalTable: "GMAP_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    USER_NAME = table.Column<string>(nullable: true),
                    LAST_NAME = table.Column<string>(nullable: true),
                    FIRST_NAME = table.Column<string>(nullable: true),
                    PASSWORD_HASH = table.Column<byte[]>(nullable: true),
                    PASSWORD_SALT = table.Column<byte[]>(nullable: true),
                    GENDER = table.Column<string>(nullable: true),
                    BIRTH_DATE = table.Column<DateTime>(nullable: false),
                    CREATION_DATE = table.Column<DateTime>(nullable: false),
                    LAST_ACTIVE_DATE = table.Column<DateTime>(nullable: false),
                    ID_GMAP_ADDRESS = table.Column<int>(nullable: true),
                    AVATAR_URL = table.Column<string>(nullable: true),
                    ID_AVATAR_CLOUD = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                        column: x => x.ID_GMAP_ADDRESS,
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 255, nullable: false),
                    REFERENCE = table.Column<string>(maxLength: 20, nullable: true),
                    ID_OPERATION_METHOD = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OPERATION_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE_FREQUENCY",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_PLAN_POSTE = table.Column<int>(nullable: false),
                    ID_FREQUENCY = table.Column<int>(nullable: false),
                    PREVIEW_AMOUNT = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN_POSTE_FREQUENCY", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_FREQUENCY_FREQUENCY_ID_FREQUENCY",
                        column: x => x.ID_FREQUENCY,
                        principalTable: "FREQUENCY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_FREQUENCY_PLAN_POSTE_ID_PLAN_POSTE",
                        column: x => x.ID_PLAN_POSTE,
                        principalTable: "PLAN_POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE_REFERENCE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_PLAN_POSTE = table.Column<int>(nullable: false),
                    ID_REFERENCE_TABLE = table.Column<int>(nullable: false),
                    ID_REFERENCE = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN_POSTE_REFERENCE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_REFERENCE_PLAN_POSTE_ID_PLAN_POSTE",
                        column: x => x.ID_PLAN_POSTE,
                        principalTable: "PLAN_POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_REFERENCE_REFERENCE_TABLE_ID_REFERENCE_TABLE",
                        column: x => x.ID_REFERENCE_TABLE,
                        principalTable: "REFERENCE_TABLE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_IMPORT",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_BANK = table.Column<int>(nullable: false),
                    FILE_IMPORT = table.Column<string>(nullable: true),
                    DATE_IMPORT = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_STATEMENT_IMPORT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_BANK_ID_BANK",
                        column: x => x.ID_BANK,
                        principalTable: "BANK",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PARAMETER",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IMPORT_FILE_DIR = table.Column<string>(maxLength: 100, nullable: true),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PARAMETER", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PARAMETER_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_USER",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_PLAN = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN_USER", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PLAN_USER_PLAN_ID_PLAN",
                        column: x => x.ID_PLAN,
                        principalTable: "PLAN",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_USER_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_ACCOUNT",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_ACCOUNT = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_ACCOUNT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_ACCOUNT_ACCOUNT_ID_ACCOUNT",
                        column: x => x.ID_ACCOUNT,
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_ACCOUNT_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_SHORTCUT",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TITLE = table.Column<string>(nullable: true),
                    TYPE = table.Column<string>(nullable: true),
                    ICON = table.Column<string>(nullable: true),
                    URL = table.Column<string>(nullable: true),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_SHORTCUT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_SHORTCUT_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_DETAIL",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION = table.Column<int>(nullable: false),
                    KEYWORD_OPERATION = table.Column<string>(nullable: true),
                    KEYWORD_PLACE = table.Column<string>(nullable: true),
                    ID_GMAP_ADDRESS = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_DETAIL", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_DETAIL_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                        column: x => x.ID_GMAP_ADDRESS,
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OPERATION_DETAIL_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE_USER",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_PLAN_POSTE = table.Column<int>(nullable: false),
                    ID_PLAN_USER = table.Column<int>(nullable: false),
                    IS_SALARY_ESTIMATED_PART = table.Column<int>(nullable: false),
                    PERCENTAGE_PART = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN_POSTE_USER", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_USER_PLAN_POSTE_ID_PLAN_POSTE",
                        column: x => x.ID_PLAN_POSTE,
                        principalTable: "PLAN_POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_USER_PLAN_USER_ID_PLAN_USER",
                        column: x => x.ID_PLAN_USER,
                        principalTable: "PLAN_USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_IMPORT = table.Column<int>(nullable: false),
                    ID_ACCOUNT = table.Column<int>(nullable: false),
                    DATE_OPERATION = table.Column<DateTime>(nullable: true),
                    LABEL_OPERATION = table.Column<string>(maxLength: 500, nullable: true),
                    ID_OPERATION_METHOD = table.Column<int>(nullable: false),
                    ID_OPERATION = table.Column<int>(nullable: false),
                    ID_OPERATION_DETAIL = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: false),
                    REFERENCE = table.Column<string>(maxLength: 50, nullable: true),
                    DATE_INTEGRATION = table.Column<DateTime>(nullable: true),
                    AMOUNT_OPERATION = table.Column<double>(nullable: false),
                    ID_MOVEMENT = table.Column<int>(nullable: false),
                    DATE_IMPORT = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_STATEMENT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_ACCOUNT_ID_ACCOUNT",
                        column: x => x.ID_ACCOUNT,
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_ACCOUNT_STATEMENT_IMPORT_ID_IMPORT",
                        column: x => x.ID_IMPORT,
                        principalTable: "ACCOUNT_STATEMENT_IMPORT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                        column: x => x.ID_OPERATION_DETAIL,
                        principalTable: "OPERATION_DETAIL",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_IMPORT_FILE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_IMPORT = table.Column<int>(nullable: false),
                    ID_ACCOUNT = table.Column<int>(nullable: true),
                    DATE_OPERATION = table.Column<DateTime>(nullable: true),
                    LABEL_OPERATION = table.Column<string>(maxLength: 500, nullable: true),
                    ID_OPERATION_METHOD = table.Column<int>(nullable: true),
                    ID_OPERATION = table.Column<int>(nullable: true),
                    ID_OPERATION_DETAIL = table.Column<int>(nullable: true),
                    OPERATION_LABEL_TEMP = table.Column<string>(nullable: true),
                    OPERATION_KEYWORD_TEMP = table.Column<string>(nullable: true),
                    OPERATION_REFERENCE_TEMP = table.Column<string>(nullable: true),
                    PLACE_KEYWORD_TEMP = table.Column<string>(maxLength: 500, nullable: true),
                    PLACE_LABEL_TEMP = table.Column<string>(maxLength: 500, nullable: true),
                    ID_OPERATION_TYPE = table.Column<int>(nullable: true),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: true),
                    REFERENCE = table.Column<string>(maxLength: 50, nullable: true),
                    DATE_INTEGRATION = table.Column<DateTime>(nullable: true),
                    AMOUNT_OPERATION = table.Column<double>(nullable: false),
                    ID_MOVEMENT = table.Column<int>(nullable: false),
                    DATE_IMPORT = table.Column<DateTime>(nullable: false),
                    LABEL_OPERATION_WORK = table.Column<string>(maxLength: 500, nullable: true),
                    STATE = table.Column<int>(nullable: false),
                    IS_DUPLICATED = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_STATEMENT_IMPORT_FILE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_ACCOUNT_ID_ACCOUNT",
                        column: x => x.ID_ACCOUNT,
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_ACCOUNT_STATEMENT_IMPORT_ID_IMPORT",
                        column: x => x.ID_IMPORT,
                        principalTable: "ACCOUNT_STATEMENT_IMPORT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                        column: x => x.ID_OPERATION_DETAIL,
                        principalTable: "OPERATION_DETAIL",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_ID_ACCOUNT_TYPE",
                table: "ACCOUNT",
                column: "ID_ACCOUNT_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_ID_BANK",
                table: "ACCOUNT",
                column: "ID_BANK");

            migrationBuilder.CreateIndex(
                name: "IX_AccountNumber",
                table: "ACCOUNT",
                column: "NUMBER",
                unique: true,
                filter: "[NUMBER] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_ACCOUNT",
                table: "ACCOUNT_STATEMENT",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_IMPORT",
                table: "ACCOUNT_STATEMENT",
                column: "ID_IMPORT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_ID_BANK",
                table: "ACCOUNT_STATEMENT_IMPORT",
                column: "ID_BANK");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_ID_USER",
                table: "ACCOUNT_STATEMENT_IMPORT",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_ACCOUNT",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_IMPORT",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_IMPORT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_COUNTRY",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_COUNTRY");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_LOCALITY",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_LOCALITY");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_NEIGHBORHOOD",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_NEIGHBORHOOD");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_POSTAL_CODE",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_POSTAL_CODE");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_ROUTE",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_ROUTE");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_STREET_NUMBER",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_STREET_NUMBER");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_SUBLOCALITY_LEVEL_1",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_SUBLOCALITY_LEVEL_1");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_SUBLOCALITY_LEVEL_2",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_SUBLOCALITY_LEVEL_2");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_TYPE_ID_GMAP_ADDRESS",
                table: "GMAP_ADDRESS_TYPE",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_TYPE_ID_GMAP_TYPE",
                table: "GMAP_ADDRESS_TYPE",
                column: "ID_GMAP_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_ID_OPERATION_METHOD",
                table: "OPERATION",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_ID_OPERATION_TYPE",
                table: "OPERATION",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_OperationKey",
                table: "OPERATION",
                columns: new[] { "LABEL", "ID_OPERATION_METHOD", "ID_OPERATION_TYPE" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_DETAIL_ID_GMAP_ADDRESS",
                table: "OPERATION_DETAIL",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_DETAIL_ID_OPERATION",
                table: "OPERATION_DETAIL",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_Keyword",
                table: "OPERATION_DETAIL",
                columns: new[] { "KEYWORD_OPERATION", "KEYWORD_PLACE" },
                unique: true,
                filter: "[KEYWORD_OPERATION] IS NOT NULL AND [KEYWORD_PLACE] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_METHOD_LEXICAL_ID_OPERATION_METHOD",
                table: "OPERATION_METHOD_LEXICAL",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TYPE_ID_OPERATION_TYPE_FAMILY",
                table: "OPERATION_TYPE",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_OTF_Id_IdMovement",
                table: "OPERATION_TYPE_FAMILY",
                columns: new[] { "ID", "ID_MOVEMENT" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PARAMETER_ID_USER",
                table: "PARAMETER",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_ID_PLAN",
                table: "PLAN_POSTE",
                column: "ID_PLAN");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_ID_POSTE",
                table: "PLAN_POSTE",
                column: "ID_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_ID_REFERENCE_TABLE",
                table: "PLAN_POSTE",
                column: "ID_REFERENCE_TABLE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_FREQUENCY_ID_FREQUENCY",
                table: "PLAN_POSTE_FREQUENCY",
                column: "ID_FREQUENCY");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_FREQUENCY_ID_PLAN_POSTE",
                table: "PLAN_POSTE_FREQUENCY",
                column: "ID_PLAN_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_REFERENCE_ID_PLAN_POSTE",
                table: "PLAN_POSTE_REFERENCE",
                column: "ID_PLAN_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_REFERENCE_ID_REFERENCE_TABLE",
                table: "PLAN_POSTE_REFERENCE",
                column: "ID_REFERENCE_TABLE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_USER_ID_PLAN_POSTE",
                table: "PLAN_POSTE_USER",
                column: "ID_PLAN_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_USER_ID_PLAN_USER",
                table: "PLAN_POSTE_USER",
                column: "ID_PLAN_USER");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_USER_ID_USER",
                table: "PLAN_USER",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_PlanUser",
                table: "PLAN_USER",
                columns: new[] { "ID_PLAN", "ID_USER" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_USER_ID_GMAP_ADDRESS",
                table: "USER",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.CreateIndex(
                name: "IX_USER_ACCOUNT_ID_ACCOUNT",
                table: "USER_ACCOUNT",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_USER_ACCOUNT_ID_USER",
                table: "USER_ACCOUNT",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_SHORTCUT_ID_USER",
                table: "USER_SHORTCUT",
                column: "ID_USER");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT");

            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropTable(
                name: "BANK_FILE_DEFINITION");

            migrationBuilder.DropTable(
                name: "GMAP_ADDRESS_TYPE");

            migrationBuilder.DropTable(
                name: "OPERATION_METHOD_LEXICAL");

            migrationBuilder.DropTable(
                name: "PARAMETER");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE_FREQUENCY");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE_REFERENCE");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE_USER");

            migrationBuilder.DropTable(
                name: "SoldeDto");

            migrationBuilder.DropTable(
                name: "USER_ACCOUNT");

            migrationBuilder.DropTable(
                name: "USER_SHORTCUT");

            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_IMPORT");

            migrationBuilder.DropTable(
                name: "OPERATION_DETAIL");

            migrationBuilder.DropTable(
                name: "GMAP_TYPE");

            migrationBuilder.DropTable(
                name: "FREQUENCY");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE");

            migrationBuilder.DropTable(
                name: "PLAN_USER");

            migrationBuilder.DropTable(
                name: "ACCOUNT");

            migrationBuilder.DropTable(
                name: "OPERATION");

            migrationBuilder.DropTable(
                name: "POSTE");

            migrationBuilder.DropTable(
                name: "REFERENCE_TABLE");

            migrationBuilder.DropTable(
                name: "PLAN");

            migrationBuilder.DropTable(
                name: "USER");

            migrationBuilder.DropTable(
                name: "ACCOUNT_TYPE");

            migrationBuilder.DropTable(
                name: "BANK");

            migrationBuilder.DropTable(
                name: "OPERATION_METHOD");

            migrationBuilder.DropTable(
                name: "OPERATION_TYPE");

            migrationBuilder.DropTable(
                name: "GMAP_ADDRESS");

            migrationBuilder.DropTable(
                name: "OPERATION_TYPE_FAMILY");

            migrationBuilder.DropTable(
                name: "GMAP_ADMINISTRATIVE_AREA_LEVEL_1");

            migrationBuilder.DropTable(
                name: "GMAP_ADMINISTRATIVE_AREA_LEVEL_2");

            migrationBuilder.DropTable(
                name: "GMAP_COUNTRY");

            migrationBuilder.DropTable(
                name: "GMAP_LOCALITY");

            migrationBuilder.DropTable(
                name: "GMAP_NEIGHBORHOOD");

            migrationBuilder.DropTable(
                name: "GMAP_POSTAL_CODE");

            migrationBuilder.DropTable(
                name: "GMAP_ROUTE");

            migrationBuilder.DropTable(
                name: "GMAP_STREET_NUMBER");

            migrationBuilder.DropTable(
                name: "GMAP_SUBLOCALITY_LEVEL_1");

            migrationBuilder.DropTable(
                name: "GMAP_SUBLOCALITY_LEVEL_2");
        }
    }
}
