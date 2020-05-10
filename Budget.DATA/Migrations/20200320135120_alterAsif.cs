using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAsif : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                newName: "ID_STATE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                newName: "STATE");
        }
    }
}
