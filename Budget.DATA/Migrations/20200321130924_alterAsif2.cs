using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAsif2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_STATE");

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_STATE_ASIF_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_STATE",
                principalSchema: "ref",
                principalTable: "STATE_ASIF",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_STATE_ASIF_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_FILE_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");
        }
    }
}
