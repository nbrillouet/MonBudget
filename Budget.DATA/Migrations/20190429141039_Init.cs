using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "ref");

            migrationBuilder.EnsureSchema(
                name: "as");

            migrationBuilder.EnsureSchema(
                name: "gmap");

            migrationBuilder.EnsureSchema(
                name: "gen");

            migrationBuilder.EnsureSchema(
                name: "plan");

            migrationBuilder.EnsureSchema(
                name: "user");

            migrationBuilder.CreateTable(
                name: "AsEvolutionDto",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Month = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Credit = table.Column<double>(nullable: false),
                    Debit = table.Column<double>(nullable: false),
                    Balance = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AsEvolutionDto", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseChartData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Amount = table.Column<double>(nullable: false),
                    Month = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseChartData", x => new { x.Id, x.Amount });
                });

            migrationBuilder.CreateTable(
                name: "SoldeDto",
                columns: table => new
                {
                    Credit = table.Column<double>(nullable: false),
                    Debit = table.Column<double>(nullable: false),
                    Total = table.Column<double>(nullable: false),
                    Solde = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoldeDto", x => x.Credit);
                });

            migrationBuilder.CreateTable(
                name: "MONTH",
                schema: "gen",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NUMBER = table.Column<string>(nullable: true),
                    LANGUAGE_CODE = table.Column<string>(nullable: true),
                    LABEL_LONG = table.Column<string>(nullable: true),
                    LABEL_SHORT = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MONTH", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
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
                schema: "gmap",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    KEYWORD = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_TYPE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PLAN",
                schema: "plan",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 100, nullable: true),
                    YEAR = table.Column<int>(nullable: false),
                    COLOR = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "POSTE",
                schema: "plan",
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
                schema: "plan",
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
                name: "V_PLAN_GLOBAL",
                schema: "plan",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_ACCOUNT_STATEMENT = table.Column<int>(nullable: true),
                    DATE_INTEGRATION = table.Column<DateTime>(nullable: true),
                    AMOUNT_OPERATION = table.Column<double>(nullable: true),
                    PREVIEW_AMOUNT = table.Column<double>(nullable: true),
                    ID_PLAN = table.Column<int>(nullable: true),
                    ID_PLAN_POSTE = table.Column<int>(nullable: true),
                    PLAN_POSTE_LABEL = table.Column<string>(nullable: true),
                    ID_POSTE = table.Column<int>(nullable: true),
                    ID_REFERENCE = table.Column<int>(nullable: true),
                    LABEL_REFERENCE = table.Column<string>(nullable: true),
                    MONTH = table.Column<int>(nullable: true),
                    YEAR = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_V_PLAN_GLOBAL", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_TYPE",
                schema: "ref",
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
                name: "BANK_FAMILY",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL_SHORT = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL_LONG = table.Column<string>(maxLength: 50, nullable: true),
                    LOGO_CLASS_NAME = table.Column<string>(maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK_FAMILY", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_METHOD",
                schema: "ref",
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
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true),
                    ID_MOVEMENT = table.Column<int>(nullable: false),
                    LOGO_CLASS_NAME = table.Column<string>(maxLength: 30, nullable: true),
                    IS_GENERIC = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TYPE_FAMILY", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ADDRESS",
                schema: "gmap",
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
                        principalSchema: "gmap",
                        principalTable: "GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_ADMINISTRATIVE_AREA_LEVEL_2_ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                        column: x => x.ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2,
                        principalSchema: "gmap",
                        principalTable: "GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_COUNTRY_ID_GMAP_COUNTRY",
                        column: x => x.ID_GMAP_COUNTRY,
                        principalSchema: "gmap",
                        principalTable: "GMAP_COUNTRY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_LOCALITY_ID_GMAP_LOCALITY",
                        column: x => x.ID_GMAP_LOCALITY,
                        principalSchema: "gmap",
                        principalTable: "GMAP_LOCALITY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_NEIGHBORHOOD_ID_GMAP_NEIGHBORHOOD",
                        column: x => x.ID_GMAP_NEIGHBORHOOD,
                        principalSchema: "gmap",
                        principalTable: "GMAP_NEIGHBORHOOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_POSTAL_CODE_ID_GMAP_POSTAL_CODE",
                        column: x => x.ID_GMAP_POSTAL_CODE,
                        principalSchema: "gmap",
                        principalTable: "GMAP_POSTAL_CODE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_ROUTE_ID_GMAP_ROUTE",
                        column: x => x.ID_GMAP_ROUTE,
                        principalSchema: "gmap",
                        principalTable: "GMAP_ROUTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_STREET_NUMBER_ID_GMAP_STREET_NUMBER",
                        column: x => x.ID_GMAP_STREET_NUMBER,
                        principalSchema: "gmap",
                        principalTable: "GMAP_STREET_NUMBER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_SUBLOCALITY_LEVEL_1_ID_GMAP_SUBLOCALITY_LEVEL_1",
                        column: x => x.ID_GMAP_SUBLOCALITY_LEVEL_1,
                        principalSchema: "gmap",
                        principalTable: "GMAP_SUBLOCALITY_LEVEL_1",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_GMAP_SUBLOCALITY_LEVEL_2_ID_GMAP_SUBLOCALITY_LEVEL_2",
                        column: x => x.ID_GMAP_SUBLOCALITY_LEVEL_2,
                        principalSchema: "gmap",
                        principalTable: "GMAP_SUBLOCALITY_LEVEL_2",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_TYPE_LANGUAGE",
                schema: "gmap",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_GMAP_TYPE = table.Column<int>(nullable: false),
                    LANGUAGE_CODE = table.Column<string>(nullable: false),
                    LABEL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_TYPE_LANGUAGE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GMAP_TYPE_LANGUAGE_GMAP_TYPE_ID_GMAP_TYPE",
                        column: x => x.ID_GMAP_TYPE,
                        principalSchema: "gmap",
                        principalTable: "GMAP_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE",
                schema: "plan",
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
                        principalSchema: "plan",
                        principalTable: "PLAN",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_POSTE_ID_POSTE",
                        column: x => x.ID_POSTE,
                        principalSchema: "plan",
                        principalTable: "POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_REFERENCE_TABLE_ID_REFERENCE_TABLE",
                        column: x => x.ID_REFERENCE_TABLE,
                        principalSchema: "plan",
                        principalTable: "REFERENCE_TABLE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BANK_FILE_DEFINITION",
                schema: "ref",
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
                    table.ForeignKey(
                        name: "FK_BANK_FILE_DEFINITION_BANK_FAMILY_ID_BANK_FAMILY",
                        column: x => x.ID_BANK_FAMILY,
                        principalSchema: "ref",
                        principalTable: "BANK_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BANK_SUB_FAMILY",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL_SHORT = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL_LONG = table.Column<string>(maxLength: 50, nullable: true),
                    LOGO_CLASS_NAME = table.Column<string>(maxLength: 30, nullable: true),
                    ID_BANK_FAMILY = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK_SUB_FAMILY", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BANK_SUB_FAMILY_BANK_FAMILY_ID_BANK_FAMILY",
                        column: x => x.ID_BANK_FAMILY,
                        principalSchema: "ref",
                        principalTable: "BANK_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_METHOD_LEXICAL",
                schema: "ref",
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
                        principalSchema: "ref",
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TYPE",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: false),
                    IS_GENERIC = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TYPE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TYPE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GMAP_ADDRESS_TYPE",
                schema: "gmap",
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
                        principalSchema: "gmap",
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GMAP_ADDRESS_TYPE_GMAP_TYPE_ID_GMAP_TYPE",
                        column: x => x.ID_GMAP_TYPE,
                        principalSchema: "gmap",
                        principalTable: "GMAP_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER",
                schema: "user",
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
                        principalSchema: "gmap",
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE_FREQUENCY",
                schema: "plan",
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
                        name: "FK_PLAN_POSTE_FREQUENCY_MONTH_ID_FREQUENCY",
                        column: x => x.ID_FREQUENCY,
                        principalSchema: "gen",
                        principalTable: "MONTH",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_FREQUENCY_PLAN_POSTE_ID_PLAN_POSTE",
                        column: x => x.ID_PLAN_POSTE,
                        principalSchema: "plan",
                        principalTable: "PLAN_POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE_REFERENCE",
                schema: "plan",
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
                        principalSchema: "plan",
                        principalTable: "PLAN_POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_REFERENCE_REFERENCE_TABLE_ID_REFERENCE_TABLE",
                        column: x => x.ID_REFERENCE_TABLE,
                        principalSchema: "plan",
                        principalTable: "REFERENCE_TABLE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "BANK_AGENCY",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 100, nullable: true),
                    ID_BANK_SUB_FAMILY = table.Column<int>(nullable: false),
                    ID_GMAP_ADDRESS = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK_AGENCY", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BANK_AGENCY_BANK_SUB_FAMILY_ID_BANK_SUB_FAMILY",
                        column: x => x.ID_BANK_SUB_FAMILY,
                        principalSchema: "ref",
                        principalTable: "BANK_SUB_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BANK_AGENCY_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                        column: x => x.ID_GMAP_ADDRESS,
                        principalSchema: "gmap",
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 255, nullable: false),
                    REFERENCE = table.Column<string>(maxLength: 20, nullable: true),
                    ID_OPERATION_METHOD = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE = table.Column<int>(nullable: false),
                    IS_GENERIC = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalSchema: "ref",
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OPERATION_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PARAMETER",
                schema: "gen",
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
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_USER",
                schema: "plan",
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
                        principalSchema: "plan",
                        principalTable: "PLAN",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_USER_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TRANSVERSE",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 255, nullable: false),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TRANSVERSE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_OPERATION_TYPE",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION_TYPE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_OPERATION_TYPE_FAMILY",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION_TYPE_FAMILY", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_FAMILY_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_FAMILY_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_SHORTCUT",
                schema: "user",
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
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_IMPORT",
                schema: "as",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_BANK_AGENCY = table.Column<int>(nullable: false),
                    FILE_IMPORT = table.Column<string>(nullable: true),
                    DATE_IMPORT = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_STATEMENT_IMPORT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_BANK_AGENCY_ID_BANK_AGENCY",
                        column: x => x.ID_BANK_AGENCY,
                        principalSchema: "ref",
                        principalTable: "BANK_AGENCY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NUMBER = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true),
                    ID_BANK_AGENCY = table.Column<int>(nullable: false),
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
                        principalSchema: "ref",
                        principalTable: "ACCOUNT_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_BANK_AGENCY_ID_BANK_AGENCY",
                        column: x => x.ID_BANK_AGENCY,
                        principalSchema: "ref",
                        principalTable: "BANK_AGENCY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_DETAIL",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION = table.Column<int>(nullable: false),
                    KEYWORD_OPERATION = table.Column<string>(nullable: true),
                    KEYWORD_PLACE = table.Column<string>(nullable: true),
                    ID_GMAP_ADDRESS = table.Column<int>(nullable: false),
                    IS_GENERIC = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_DETAIL", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_DETAIL_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                        column: x => x.ID_GMAP_ADDRESS,
                        principalSchema: "gmap",
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OPERATION_DETAIL_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalSchema: "ref",
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_OPERATION",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_OPERATION = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalSchema: "ref",
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PLAN_POSTE_USER",
                schema: "plan",
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
                        principalSchema: "plan",
                        principalTable: "PLAN_POSTE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_POSTE_USER_PLAN_USER_ID_PLAN_USER",
                        column: x => x.ID_PLAN_USER,
                        principalSchema: "plan",
                        principalTable: "PLAN_USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "USER_ACCOUNT",
                schema: "user",
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
                        principalSchema: "ref",
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_ACCOUNT_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_CUSTOM_OTF",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_ACCOUNT = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_CUSTOM_OTF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_CUSTOM_OTF_ACCOUNT_ID_ACCOUNT",
                        column: x => x.ID_ACCOUNT,
                        principalSchema: "ref",
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_CUSTOM_OTF_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_CUSTOM_OTF_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT",
                schema: "as",
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
                        principalSchema: "ref",
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_ACCOUNT_STATEMENT_IMPORT_ID_IMPORT",
                        column: x => x.ID_IMPORT,
                        principalSchema: "as",
                        principalTable: "ACCOUNT_STATEMENT_IMPORT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalSchema: "ref",
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                        column: x => x.ID_OPERATION_DETAIL,
                        principalSchema: "ref",
                        principalTable: "OPERATION_DETAIL",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalSchema: "ref",
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_IMPORT_FILE",
                schema: "as",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_IMPORT = table.Column<int>(nullable: false),
                    ID_ACCOUNT = table.Column<int>(nullable: true),
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
                    DATE_IMPORT = table.Column<DateTime>(nullable: false),
                    OPERATION_LABEL_TEMP = table.Column<string>(nullable: true),
                    OPERATION_KEYWORD_TEMP = table.Column<string>(nullable: true),
                    OPERATION_REFERENCE_TEMP = table.Column<string>(nullable: true),
                    PLACE_KEYWORD_TEMP = table.Column<string>(maxLength: 500, nullable: true),
                    PLACE_LABEL_TEMP = table.Column<string>(maxLength: 500, nullable: true),
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
                        principalSchema: "ref",
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_ACCOUNT_STATEMENT_IMPORT_ID_IMPORT",
                        column: x => x.ID_IMPORT,
                        principalSchema: "as",
                        principalTable: "ACCOUNT_STATEMENT_IMPORT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalSchema: "ref",
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                        column: x => x.ID_OPERATION_DETAIL,
                        principalSchema: "ref",
                        principalTable: "OPERATION_DETAIL",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalSchema: "ref",
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "USER_OPERATION_DETAIL",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_OPERATION_DETAIL = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION_DETAIL", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_DETAIL_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                        column: x => x.ID_OPERATION_DETAIL,
                        principalSchema: "ref",
                        principalTable: "OPERATION_DETAIL",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_DETAIL_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_PLAN",
                schema: "as",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_ACCOUNT_STATEMENT = table.Column<int>(nullable: false),
                    ID_PLAN = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_STATEMENT_PLAN", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_PLAN_ACCOUNT_STATEMENT_ID_ACCOUNT_STATEMENT",
                        column: x => x.ID_ACCOUNT_STATEMENT,
                        principalSchema: "as",
                        principalTable: "ACCOUNT_STATEMENT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_PLAN_PLAN_ID_PLAN",
                        column: x => x.ID_PLAN,
                        principalSchema: "plan",
                        principalTable: "PLAN",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TRANSVERSE_AS",
                schema: "as",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_TRANSVERSE = table.Column<int>(nullable: false),
                    ID_ACCOUNT_STATEMENT = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TRANSVERSE_AS", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_AS_ACCOUNT_STATEMENT_ID_ACCOUNT_STATEMENT",
                        column: x => x.ID_ACCOUNT_STATEMENT,
                        principalSchema: "as",
                        principalTable: "ACCOUNT_STATEMENT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_AS_OPERATION_TRANSVERSE_ID_OPERATION_TRANSVERSE",
                        column: x => x.ID_OPERATION_TRANSVERSE,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TRANSVERSE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TRANSVERSE_ASIF",
                schema: "as",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_TRANSVERSE = table.Column<int>(nullable: false),
                    ID_ACCOUNT_STATEMENT_IMPORT_FILE = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TRANSVERSE_ASIF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_ASIF_ACCOUNT_STATEMENT_IMPORT_FILE_ID_ACCOUNT_STATEMENT_IMPORT_FILE",
                        column: x => x.ID_ACCOUNT_STATEMENT_IMPORT_FILE,
                        principalSchema: "as",
                        principalTable: "ACCOUNT_STATEMENT_IMPORT_FILE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_ASIF_OPERATION_TRANSVERSE_ID_OPERATION_TRANSVERSE",
                        column: x => x.ID_OPERATION_TRANSVERSE,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TRANSVERSE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_ACCOUNT",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_IMPORT",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                column: "ID_IMPORT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_ID_BANK_AGENCY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                column: "ID_BANK_AGENCY");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_ID_USER",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_ACCOUNT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_IMPORT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_IMPORT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_PLAN_ID_PLAN",
                schema: "as",
                table: "ACCOUNT_STATEMENT_PLAN",
                column: "ID_PLAN");

            migrationBuilder.CreateIndex(
                name: "IX_ASP_IdAccountStatement_IdPlan",
                schema: "as",
                table: "ACCOUNT_STATEMENT_PLAN",
                columns: new[] { "ID_ACCOUNT_STATEMENT", "ID_PLAN" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_AS_ID_ACCOUNT_STATEMENT",
                schema: "as",
                table: "OPERATION_TRANSVERSE_AS",
                column: "ID_ACCOUNT_STATEMENT");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_AS_ID_OPERATION_TRANSVERSE",
                schema: "as",
                table: "OPERATION_TRANSVERSE_AS",
                column: "ID_OPERATION_TRANSVERSE");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_ASIF_ID_ACCOUNT_STATEMENT_IMPORT_FILE",
                schema: "as",
                table: "OPERATION_TRANSVERSE_ASIF",
                column: "ID_ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_ASIF_ID_OPERATION_TRANSVERSE",
                schema: "as",
                table: "OPERATION_TRANSVERSE_ASIF",
                column: "ID_OPERATION_TRANSVERSE");

            migrationBuilder.CreateIndex(
                name: "IX_PARAMETER_ID_USER",
                schema: "gen",
                table: "PARAMETER",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_COUNTRY",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_COUNTRY");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_LOCALITY",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_LOCALITY");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_NEIGHBORHOOD",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_NEIGHBORHOOD");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_POSTAL_CODE",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_POSTAL_CODE");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_ROUTE",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_ROUTE");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_STREET_NUMBER",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_STREET_NUMBER");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_SUBLOCALITY_LEVEL_1",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_SUBLOCALITY_LEVEL_1");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_ID_GMAP_SUBLOCALITY_LEVEL_2",
                schema: "gmap",
                table: "GMAP_ADDRESS",
                column: "ID_GMAP_SUBLOCALITY_LEVEL_2");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_TYPE_ID_GMAP_ADDRESS",
                schema: "gmap",
                table: "GMAP_ADDRESS_TYPE",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_ADDRESS_TYPE_ID_GMAP_TYPE",
                schema: "gmap",
                table: "GMAP_ADDRESS_TYPE",
                column: "ID_GMAP_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_TYPE_LANGUAGE_ID_GMAP_TYPE",
                schema: "gmap",
                table: "GMAP_TYPE_LANGUAGE",
                column: "ID_GMAP_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_ID_PLAN",
                schema: "plan",
                table: "PLAN_POSTE",
                column: "ID_PLAN");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_ID_POSTE",
                schema: "plan",
                table: "PLAN_POSTE",
                column: "ID_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_ID_REFERENCE_TABLE",
                schema: "plan",
                table: "PLAN_POSTE",
                column: "ID_REFERENCE_TABLE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_FREQUENCY_ID_FREQUENCY",
                schema: "plan",
                table: "PLAN_POSTE_FREQUENCY",
                column: "ID_FREQUENCY");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_FREQUENCY_ID_PLAN_POSTE",
                schema: "plan",
                table: "PLAN_POSTE_FREQUENCY",
                column: "ID_PLAN_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_REFERENCE_ID_PLAN_POSTE",
                schema: "plan",
                table: "PLAN_POSTE_REFERENCE",
                column: "ID_PLAN_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_REFERENCE_ID_REFERENCE_TABLE",
                schema: "plan",
                table: "PLAN_POSTE_REFERENCE",
                column: "ID_REFERENCE_TABLE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_USER_ID_PLAN_POSTE",
                schema: "plan",
                table: "PLAN_POSTE_USER",
                column: "ID_PLAN_POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_POSTE_USER_ID_PLAN_USER",
                schema: "plan",
                table: "PLAN_POSTE_USER",
                column: "ID_PLAN_USER");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_USER_ID_USER",
                schema: "plan",
                table: "PLAN_USER",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_PlanUser",
                schema: "plan",
                table: "PLAN_USER",
                columns: new[] { "ID_PLAN", "ID_USER" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_ID_ACCOUNT_TYPE",
                schema: "ref",
                table: "ACCOUNT",
                column: "ID_ACCOUNT_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_ID_BANK_AGENCY",
                schema: "ref",
                table: "ACCOUNT",
                column: "ID_BANK_AGENCY");

            migrationBuilder.CreateIndex(
                name: "IX_AccountNumber",
                schema: "ref",
                table: "ACCOUNT",
                column: "NUMBER",
                unique: true,
                filter: "[NUMBER] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_BANK_AGENCY_ID_BANK_SUB_FAMILY",
                schema: "ref",
                table: "BANK_AGENCY",
                column: "ID_BANK_SUB_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_BANK_AGENCY_ID_GMAP_ADDRESS",
                schema: "ref",
                table: "BANK_AGENCY",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.CreateIndex(
                name: "IX_BANK_FILE_DEFINITION_ID_BANK_FAMILY",
                schema: "ref",
                table: "BANK_FILE_DEFINITION",
                column: "ID_BANK_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_BANK_SUB_FAMILY_ID_BANK_FAMILY",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                column: "ID_BANK_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_ID_OPERATION_METHOD",
                schema: "ref",
                table: "OPERATION",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_ID_OPERATION_TYPE",
                schema: "ref",
                table: "OPERATION",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_OperationKey",
                schema: "ref",
                table: "OPERATION",
                columns: new[] { "LABEL", "ID_OPERATION_METHOD", "ID_OPERATION_TYPE" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_DETAIL_ID_GMAP_ADDRESS",
                schema: "ref",
                table: "OPERATION_DETAIL",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_DETAIL_ID_OPERATION",
                schema: "ref",
                table: "OPERATION_DETAIL",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_Keyword",
                schema: "ref",
                table: "OPERATION_DETAIL",
                columns: new[] { "KEYWORD_OPERATION", "KEYWORD_PLACE" },
                unique: true,
                filter: "[KEYWORD_OPERATION] IS NOT NULL AND [KEYWORD_PLACE] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_METHOD_LEXICAL_ID_OPERATION_METHOD",
                schema: "ref",
                table: "OPERATION_METHOD_LEXICAL",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_ID_USER",
                schema: "ref",
                table: "OPERATION_TRANSVERSE",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TYPE_ID_OPERATION_TYPE_FAMILY",
                schema: "ref",
                table: "OPERATION_TYPE",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_OTF_Id_IdMovement",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                columns: new[] { "ID", "ID_MOVEMENT" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_USER_ID_GMAP_ADDRESS",
                schema: "user",
                table: "USER",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.CreateIndex(
                name: "IX_USER_ACCOUNT_ID_ACCOUNT",
                schema: "user",
                table: "USER_ACCOUNT",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_USER_ACCOUNT_ID_USER",
                schema: "user",
                table: "USER_ACCOUNT",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_CUSTOM_OTF_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_USER_CUSTOM_OTF_ID_USER",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser_IdAccount",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                columns: new[] { "ID_OPERATION_TYPE_FAMILY", "ID_USER", "ID_ACCOUNT" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_ID_OPERATION",
                schema: "user",
                table: "USER_OPERATION",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_ID_USER",
                schema: "user",
                table: "USER_OPERATION",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                schema: "user",
                table: "USER_OPERATION_DETAIL",
                column: "ID_OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_DETAIL_ID_USER",
                schema: "user",
                table: "USER_OPERATION_DETAIL",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_ID_OPERATION_TYPE",
                schema: "user",
                table: "USER_OPERATION_TYPE",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_ID_USER",
                schema: "user",
                table: "USER_OPERATION_TYPE",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                schema: "user",
                table: "USER_OPERATION_TYPE_FAMILY",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_FAMILY_ID_USER",
                schema: "user",
                table: "USER_OPERATION_TYPE_FAMILY",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_SHORTCUT_ID_USER",
                schema: "user",
                table: "USER_SHORTCUT",
                column: "ID_USER");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AsEvolutionDto");

            migrationBuilder.DropTable(
                name: "BaseChartData");

            migrationBuilder.DropTable(
                name: "SoldeDto");

            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_PLAN",
                schema: "as");

            migrationBuilder.DropTable(
                name: "OPERATION_TRANSVERSE_AS",
                schema: "as");

            migrationBuilder.DropTable(
                name: "OPERATION_TRANSVERSE_ASIF",
                schema: "as");

            migrationBuilder.DropTable(
                name: "PARAMETER",
                schema: "gen");

            migrationBuilder.DropTable(
                name: "GMAP_ADDRESS_TYPE",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_TYPE_LANGUAGE",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE_FREQUENCY",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE_REFERENCE",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE_USER",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "V_PLAN_GLOBAL",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "BANK_FILE_DEFINITION",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "OPERATION_METHOD_LEXICAL",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "USER_ACCOUNT",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_CUSTOM_OTF",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_OPERATION",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_OPERATION_DETAIL",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_OPERATION_TYPE",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_OPERATION_TYPE_FAMILY",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_SHORTCUT",
                schema: "user");

            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT",
                schema: "as");

            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_IMPORT_FILE",
                schema: "as");

            migrationBuilder.DropTable(
                name: "OPERATION_TRANSVERSE",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "GMAP_TYPE",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "MONTH",
                schema: "gen");

            migrationBuilder.DropTable(
                name: "PLAN_POSTE",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "PLAN_USER",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "ACCOUNT",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_IMPORT",
                schema: "as");

            migrationBuilder.DropTable(
                name: "OPERATION_DETAIL",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "POSTE",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "REFERENCE_TABLE",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "PLAN",
                schema: "plan");

            migrationBuilder.DropTable(
                name: "ACCOUNT_TYPE",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "BANK_AGENCY",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "USER",
                schema: "user");

            migrationBuilder.DropTable(
                name: "OPERATION",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "BANK_SUB_FAMILY",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "GMAP_ADDRESS",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "OPERATION_METHOD",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "OPERATION_TYPE",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "BANK_FAMILY",
                schema: "ref");

            migrationBuilder.DropTable(
                name: "GMAP_ADMINISTRATIVE_AREA_LEVEL_1",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_ADMINISTRATIVE_AREA_LEVEL_2",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_COUNTRY",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_LOCALITY",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_NEIGHBORHOOD",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_POSTAL_CODE",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_ROUTE",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_STREET_NUMBER",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_SUBLOCALITY_LEVEL_1",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "GMAP_SUBLOCALITY_LEVEL_2",
                schema: "gmap");

            migrationBuilder.DropTable(
                name: "OPERATION_TYPE_FAMILY",
                schema: "ref");
        }
    }
}
