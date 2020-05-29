using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAccount6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_ID_USER_OWNER",
                schema: "ref",
                table: "ACCOUNT",
                column: "ID_USER_OWNER");

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_USER_ID_USER_OWNER",
                schema: "ref",
                table: "ACCOUNT",
                column: "ID_USER_OWNER",
                principalSchema: "user",
                principalTable: "USER",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_USER_ID_USER_OWNER",
                schema: "ref",
                table: "ACCOUNT");

            migrationBuilder.DropIndex(
                name: "IX_ACCOUNT_ID_USER_OWNER",
                schema: "ref",
                table: "ACCOUNT");
        }
    }
}
