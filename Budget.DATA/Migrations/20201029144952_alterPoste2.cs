using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterPoste2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_POSTE_MOVEMENT_ID_MOVEMENT",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.AlterColumn<int>(
                name: "ID_MOVEMENT",
                schema: "plan",
                table: "POSTE",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_POSTE_MOVEMENT_ID_MOVEMENT",
                schema: "plan",
                table: "POSTE",
                column: "ID_MOVEMENT",
                principalSchema: "ref",
                principalTable: "MOVEMENT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_POSTE_MOVEMENT_ID_MOVEMENT",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.AlterColumn<int>(
                name: "ID_MOVEMENT",
                schema: "plan",
                table: "POSTE",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_POSTE_MOVEMENT_ID_MOVEMENT",
                schema: "plan",
                table: "POSTE",
                column: "ID_MOVEMENT",
                principalSchema: "ref",
                principalTable: "MOVEMENT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
