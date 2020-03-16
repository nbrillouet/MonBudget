using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOtf3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TYPE_FAMILY_ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                column: "ID_ASSERT");

            migrationBuilder.AddForeignKey(
                name: "FK_OPERATION_TYPE_FAMILY_ASSERT_ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                column: "ID_ASSERT",
                principalSchema: "ref",
                principalTable: "ASSERT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OPERATION_TYPE_FAMILY_ASSERT_ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");

            migrationBuilder.DropIndex(
                name: "IX_OPERATION_TYPE_FAMILY_ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");
        }
    }
}
