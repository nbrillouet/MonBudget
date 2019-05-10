using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class AlterOperationTypeFamily : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IS_GENERIC",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                newName: "IS_MANDATORY");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameColumn(
                name: "IS_MANDATORY",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                newName: "IS_GENERIC");
        }
    }
}
