using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOperationDetail1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Keyword",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_Keyword",
                schema: "ref",
                table: "OPERATION_DETAIL",
                columns: new[] { "KEYWORD_OPERATION", "KEYWORD_PLACE", "ID_USER_GROUP" },
                unique: true,
                filter: "[KEYWORD_OPERATION] IS NOT NULL AND [KEYWORD_PLACE] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Keyword",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_Keyword",
                schema: "ref",
                table: "OPERATION_DETAIL",
                columns: new[] { "KEYWORD_OPERATION", "KEYWORD_PLACE" },
                unique: true,
                filter: "[KEYWORD_OPERATION] IS NOT NULL AND [KEYWORD_PLACE] IS NOT NULL");
        }
    }
}
