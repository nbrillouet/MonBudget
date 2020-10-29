using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterPoste5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_POSTE_POSTE_CATEGORY_ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.DropTable(
                name: "POSTE_CATEGORY",
                schema: "plan");

            migrationBuilder.RenameColumn(
                name: "ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE",
                newName: "ID_MOVEMENT");

            migrationBuilder.RenameIndex(
                name: "IX_POSTE_ID_POSTE_CATEGORY",
                schema: "plan",
                table: "POSTE",
                newName: "IX_POSTE_ID_MOVEMENT");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_POSTE_MOVEMENT_ID_MOVEMENT",
                schema: "plan",
                table: "POSTE");

            migrationBuilder.RenameColumn(
                name: "ID_MOVEMENT",
                schema: "plan",
                table: "POSTE",
                newName: "ID_POSTE_CATEGORY");

            migrationBuilder.RenameIndex(
                name: "IX_POSTE_ID_MOVEMENT",
                schema: "plan",
                table: "POSTE",
                newName: "IX_POSTE_ID_POSTE_CATEGORY");

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
    }
}
