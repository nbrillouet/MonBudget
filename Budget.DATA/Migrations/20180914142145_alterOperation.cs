using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class alterOperation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_OperationKeyword",
                table: "OPERATION");

            migrationBuilder.DropIndex(
                name: "IX_OperationLabel",
                table: "OPERATION");

            migrationBuilder.DropColumn(
                name: "KEYWORD",
                table: "OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_OperationKey",
                table: "OPERATION",
                columns: new[] { "LABEL", "ID_OPERATION_METHOD", "ID_OPERATION_TYPE" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_OperationKey",
                table: "OPERATION");

            migrationBuilder.AddColumn<string>(
                name: "KEYWORD",
                table: "OPERATION",
                maxLength: 255,
                nullable: false,
                defaultValue: "");

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
        }
    }
}
