using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class alterAccountStatementImportFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY",
                principalTable: "OPERATION_TYPE_FAMILY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");
        }
    }
}
