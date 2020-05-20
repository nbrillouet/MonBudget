using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterUser3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VALIDATION_CODE",
                schema: "user",
                table: "USER",
                newName: "ACTIVATION_CODE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ACTIVATION_CODE",
                schema: "user",
                table: "USER",
                newName: "VALIDATION_CODE");
        }
    }
}
