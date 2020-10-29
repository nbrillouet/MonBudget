using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class addPosteCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdCategorie",
                schema: "plan",
                table: "POSTE",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "POSTE_CATEGORY",
                schema: "plan",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_POSTE_CATEGORY", x => x.ID);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_POSTE_POSTE_CATEGORY_IdCategorie",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.DropTable(
                name: "POSTE_CATEGORY",
                schema: "plan");

            migrationBuilder.DropIndex(
                name: "IX_POSTE_IdCategorie",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.DropColumn(
                name: "IdCategorie",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.DropColumn(
                name: "ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE");
        }
    }
}
