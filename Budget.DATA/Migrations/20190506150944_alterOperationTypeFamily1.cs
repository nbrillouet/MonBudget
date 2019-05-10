using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOperationTypeFamily1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OPERATION_TYPE_FAMILY_USER_ID_USER",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");

            migrationBuilder.DropIndex(
                name: "IX_OPERATION_TYPE_FAMILY_ID_USER",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");

            migrationBuilder.DropColumn(
                name: "ID_USER",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ID_USER",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TYPE_FAMILY_ID_USER",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                column: "ID_USER");

            migrationBuilder.AddForeignKey(
                name: "FK_OPERATION_TYPE_FAMILY_USER_ID_USER",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                column: "ID_USER",
                principalSchema: "user",
                principalTable: "USER",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
