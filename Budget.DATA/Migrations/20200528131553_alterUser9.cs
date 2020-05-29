using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterUser9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IS_MAIL_CONFIRMED",
                schema: "user",
                table: "USER",
                newName: "ACTIVATION_IS_CONFIRMED");

            migrationBuilder.AlterColumn<DateTime>(
                name: "ACTIVATION_DATE_SEND",
                schema: "user",
                table: "USER",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ACTIVATION_IS_CONFIRMED",
                schema: "user",
                table: "USER",
                newName: "IS_MAIL_CONFIRMED");

            migrationBuilder.AlterColumn<string>(
                name: "ACTIVATION_DATE_SEND",
                schema: "user",
                table: "USER",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
