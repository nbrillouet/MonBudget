using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class addPosteCategory1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_POSTE_POSTE_CATEGORY_IdCategorie",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.DropIndex(
                name: "IX_POSTE_IdCategorie",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.DropColumn(
                name: "IdCategorie",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.CreateIndex(
                name: "IX_POSTE_ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE",
                column: "ID_POSTE_CATEGORY");

            migrationBuilder.AddForeignKey(
                name: "FK_POSTE_POSTE_CATEGORY_ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE",
                column: "ID_POSTE_CATEGORY",
                principalSchema: "plan",
                principalTable: "POSTE_CATEGORY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_POSTE_POSTE_CATEGORY_ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.DropIndex(
                name: "IX_POSTE_ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.AddColumn<int>(
                name: "IdCategorie",
                schema: "plan",
                table: "POSTE",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_POSTE_IdCategorie",
                schema: "plan",
                table: "POSTE",
                column: "IdCategorie");

            migrationBuilder.AddForeignKey(
                name: "FK_POSTE_POSTE_CATEGORY_IdCategorie",
                schema: "plan",
                table: "POSTE",
                column: "IdCategorie",
                principalSchema: "plan",
                principalTable: "POSTE_CATEGORY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
