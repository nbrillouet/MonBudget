using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterUser2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IS_MAIL_CONFIRMED",
                schema: "user",
                table: "USER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "VALIDATION_CODE",
                schema: "user",
                table: "USER",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IS_MAIL_CONFIRMED",
                schema: "user",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "VALIDATION_CODE",
                schema: "user",
                table: "USER");
        }
    }
}
