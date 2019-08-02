using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterUserCustomOtf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_USER_CUSTOM_OTF_ACCOUNT_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.DropIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser_IdAccount",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.AlterColumn<int>(
                name: "ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser_IdAccount",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                columns: new[] { "ID_OPERATION_TYPE_FAMILY", "ID_USER", "ID_ACCOUNT" },
                unique: true,
                filter: "[ID_ACCOUNT] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_USER_CUSTOM_OTF_ACCOUNT_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                column: "ID_ACCOUNT",
                principalSchema: "ref",
                principalTable: "ACCOUNT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_USER_CUSTOM_OTF_ACCOUNT_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.DropIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser_IdAccount",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.AlterColumn<int>(
                name: "ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser_IdAccount",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                columns: new[] { "ID_OPERATION_TYPE_FAMILY", "ID_USER", "ID_ACCOUNT" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_USER_CUSTOM_OTF_ACCOUNT_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                column: "ID_ACCOUNT",
                principalSchema: "ref",
                principalTable: "ACCOUNT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
