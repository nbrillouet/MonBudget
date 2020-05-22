using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterBankFamily : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LOGO_CLASS_NAME",
                schema: "ref",
                table: "BANK_FAMILY");

            migrationBuilder.AddColumn<int>(
                name: "ID_ASSET",
                schema: "ref",
                table: "BANK_FAMILY",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ID_ASSET",
                schema: "ref",
                table: "BANK_FAMILY");

            migrationBuilder.AddColumn<string>(
                name: "LOGO_CLASS_NAME",
                schema: "ref",
                table: "BANK_FAMILY",
                maxLength: 30,
                nullable: true);
        }
    }
}
