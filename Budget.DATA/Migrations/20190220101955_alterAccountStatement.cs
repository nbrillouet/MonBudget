using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAccountStatement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT",
                column: "ID_OPERATION_TYPE_FAMILY",
                principalTable: "OPERATION_TYPE_FAMILY",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT");

            migrationBuilder.DropIndex(
                name: "IX_ACCOUNT_STATEMENT_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT");
        }
    }
}
