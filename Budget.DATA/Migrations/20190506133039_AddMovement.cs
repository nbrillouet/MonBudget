using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class AddMovement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MOVEMENT",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MOVEMENT", x => x.ID);
                });

            migrationBuilder.InsertData(
            table: "MOVEMENT",
            schema: "ref",
            columns: new[] { "Id","Label" },
            values: new object[] { 1,"Crédit" });

            migrationBuilder.InsertData(
            table: "MOVEMENT",
            schema: "ref",
            columns: new[] { "Id", "Label" },
            values: new object[] { 2, "Débit" });

            migrationBuilder.InsertData(
            table: "MOVEMENT",
            schema: "ref",
            columns: new[] { "Id", "Label" },
            values: new object[] { 3, "Crédit/Débit" });


            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TYPE_FAMILY_ID_MOVEMENT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                column: "ID_MOVEMENT");

            migrationBuilder.AddForeignKey(
                name: "FK_OPERATION_TYPE_FAMILY_MOVEMENT_ID_MOVEMENT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                column: "ID_MOVEMENT",
                principalSchema: "ref",
                principalTable: "MOVEMENT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OPERATION_TYPE_FAMILY_MOVEMENT_ID_MOVEMENT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");

            migrationBuilder.DropTable(
                name: "MOVEMENT",
                schema: "ref");

            migrationBuilder.DropIndex(
                name: "IX_OPERATION_TYPE_FAMILY_ID_MOVEMENT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");
        }
    }
}
