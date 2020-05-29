using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterBankSubFamily3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_BANK_SUB_FAMILY_ID_ASSET",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                column: "ID_ASSET");

            migrationBuilder.AddForeignKey(
                name: "FK_BANK_SUB_FAMILY_ASSET_ID_ASSET",
                schema: "ref",
                table: "BANK_SUB_FAMILY",
                column: "ID_ASSET",
                principalSchema: "ref",
                principalTable: "ASSET",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BANK_SUB_FAMILY_ASSET_ID_ASSET",
                schema: "ref",
                table: "BANK_SUB_FAMILY");

            migrationBuilder.DropIndex(
                name: "IX_BANK_SUB_FAMILY_ID_ASSET",
                schema: "ref",
                table: "BANK_SUB_FAMILY");
        }
    }
}
