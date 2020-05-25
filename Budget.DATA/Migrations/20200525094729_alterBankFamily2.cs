using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterBankFamily2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LABEL_SHORT",
                schema: "ref",
                table: "BANK_FAMILY",
                newName: "LABEL");

            migrationBuilder.RenameColumn(
                name: "LABEL_LONG",
                schema: "ref",
                table: "BANK_FAMILY",
                newName: "CODE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LABEL",
                schema: "ref",
                table: "BANK_FAMILY",
                newName: "LABEL_SHORT");

            migrationBuilder.RenameColumn(
                name: "CODE",
                schema: "ref",
                table: "BANK_FAMILY",
                newName: "LABEL_LONG");
        }
    }
}
