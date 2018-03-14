using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class addTable1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_IMPORT",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DATE_IMPORT = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FILE_IMPORT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_BANK = table.Column<int>(type: "int", nullable: false),
                    ID_USER = table.Column<int>(type: "int", nullable: false)
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
                name: "OPERATION_METHOD",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_METHOD", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_PLACE",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CITY = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    DEPARTMENT = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    KEYWORD = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_PLACE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TYPE_FAMILY",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_MOVEMENT = table.Column<int>(type: "int", nullable: false),
                    LABEL = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LOGO_CLASS_NAME = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TYPE_FAMILY", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "OPERATION_TYPE",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(type: "int", nullable: false),
                    LABEL = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
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
                name: "OPERATION",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_METHOD = table.Column<int>(type: "int", nullable: false),
                    ID_OPERATION_TYPE = table.Column<int>(type: "int", nullable: false),
                    KEYWORD = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    LABEL = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    REFERENCE = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true)
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
                name: "ACCOUNT_STATEMENT",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AMOUNT_OPERATION = table.Column<double>(type: "float", nullable: false),
                    DATE_IMPORT = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DATE_INTEGRATION = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DATE_OPERATION = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ID_ACCOUNT = table.Column<int>(type: "int", nullable: true),
                    ID_IMPORT = table.Column<int>(type: "int", nullable: false),
                    ID_MOVEMENT = table.Column<int>(type: "int", nullable: false),
                    ID_OPERATION = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_METHOD = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_PLACE = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_TYPE = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(type: "int", nullable: true),
                    LABEL_OPERATION = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    REFERENCE = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_STATEMENT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_ACCOUNT_ID_ACCOUNT",
                        column: x => x.ID_ACCOUNT,
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_ACCOUNT_STATEMENT_IMPORT_ID_IMPORT",
                        column: x => x.ID_IMPORT,
                        principalTable: "ACCOUNT_STATEMENT_IMPORT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_PLACE_ID_OPERATION_PLACE",
                        column: x => x.ID_OPERATION_PLACE,
                        principalTable: "OPERATION_PLACE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

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
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_PLACE",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_PLACE");

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
                name: "IX_OPERATION_ID_OPERATION_METHOD",
                table: "OPERATION",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_ID_OPERATION_TYPE",
                table: "OPERATION",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_OperationKeyword",
                table: "OPERATION",
                column: "KEYWORD",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OperationLabel",
                table: "OPERATION",
                column: "LABEL",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TYPE_ID_OPERATION_TYPE_FAMILY",
                table: "OPERATION_TYPE",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_OTF_Id_IdMovement",
                table: "OPERATION_TYPE_FAMILY",
                columns: new[] { "ID", "ID_MOVEMENT" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT");

            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_IMPORT");

            migrationBuilder.DropTable(
                name: "OPERATION");

            migrationBuilder.DropTable(
                name: "OPERATION_PLACE");

            migrationBuilder.DropTable(
                name: "OPERATION_METHOD");

            migrationBuilder.DropTable(
                name: "OPERATION_TYPE");

            migrationBuilder.DropTable(
                name: "OPERATION_TYPE_FAMILY");
        }
    }
}
