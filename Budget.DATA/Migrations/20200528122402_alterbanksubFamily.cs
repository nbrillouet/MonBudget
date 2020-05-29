using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterbanksubFamily : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LABEL_LONG",
                schema: "ref",
                table: "BANK_SUB_FAMILY");

            migrationBuilder.DropColumn(
                name: "LABEL_SHORT",
                schema: "ref",
                table: "BANK_SUB_FAMILY");

            migrationBuilder.DropColumn(
                name: "LOGO_CLASS_NAME",
                schema: "ref",
                table: "BANK_SUB_FAMILY");

            migrationBuilder.AddColumn<string>(
                name: "CODE",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ID_ASSET",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "LABEL",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                maxLength: 10,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CODE",
                schema: "ref",
                table: "BANK_SUB_FAMILY");

            migrationBuilder.DropColumn(
                name: "ID_ASSET",
                schema: "ref",
                table: "BANK_SUB_FAMILY");

            migrationBuilder.DropColumn(
                name: "LABEL",
                schema: "ref",
                table: "BANK_SUB_FAMILY");

            migrationBuilder.AddColumn<string>(
                name: "LABEL_LONG",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LABEL_SHORT",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LOGO_CLASS_NAME",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                maxLength: 30,
                nullable: true);
        }
    }
}
