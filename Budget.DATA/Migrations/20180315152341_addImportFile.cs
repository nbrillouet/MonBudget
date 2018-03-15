using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class addImportFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_IMPORT_FILE",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AMOUNT_OPERATION = table.Column<double>(type: "float", nullable: false),
                    DATE_IMPORT = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DATE_INTEGRATION = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DATE_OPERATION = table.Column<DateTime>(type: "datetime2", nullable: true),
                    STATE = table.Column<int>(type: "int", nullable: false),
                    ID_ACCOUNT = table.Column<int>(type: "int", nullable: true),
                    ID_IMPORT = table.Column<int>(type: "int", nullable: false),
                    ID_MOVEMENT = table.Column<int>(type: "int", nullable: false),
                    ID_OPERATION = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_METHOD = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_PLACE = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_TYPE = table.Column<int>(type: "int", nullable: true),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(type: "int", nullable: true),
                    IS_DUPLICATED = table.Column<bool>(type: "bit", nullable: false),
                    LABEL_OPERATION = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    LABEL_OPERATION_WORK = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    OPERATION_KEYWORD_TEMP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OPERATION_LABEL_TEMP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OPERATION_PLACE_CITY_TEMP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OPERATION_PLACE_DEPARTMENT_TEMP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OPERATION_PLACE_KEYWORD_TEMP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OPERATION_REFERENCE_TEMP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    REFERENCE = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
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
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_PLACE_ID_OPERATION_PLACE",
                        column: x => x.ID_OPERATION_PLACE,
                        principalTable: "OPERATION_PLACE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

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
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_METHOD");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_PLACE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_PLACE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_IMPORT_FILE");
        }
    }
}
