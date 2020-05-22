using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterBankFamily1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_BANK_FAMILY_ID_ASSET",
                schema: "ref",
                table: "BANK_FAMILY",
                column: "ID_ASSET");

            migrationBuilder.AddForeignKey(
                name: "FK_BANK_FAMILY_ASSET_ID_ASSET",
                schema: "ref",
                table: "BANK_FAMILY",
                column: "ID_ASSET",
                principalSchema: "ref",
                principalTable: "ASSET",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BANK_FAMILY_ASSET_ID_ASSET",
                schema: "ref",
                table: "BANK_FAMILY");

            migrationBuilder.DropIndex(
                name: "IX_BANK_FAMILY_ID_ASSET",
                schema: "ref",
                table: "BANK_FAMILY");
        }
    }
}
