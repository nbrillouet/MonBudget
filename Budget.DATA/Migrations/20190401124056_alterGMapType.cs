using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterGMapType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LABEL_FR",
                schema: "gmap",
                table: "GMAP_TYPE");

            migrationBuilder.CreateTable(
                name: "GMAP_TYPE_LANGUAGE",
                schema: "gmap",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_GMAP_TYPE = table.Column<int>(nullable: false),
                    LANGUAGE_CODE = table.Column<string>(nullable: false),
                    LABEL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GMAP_TYPE_LANGUAGE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GMAP_TYPE_LANGUAGE_GMAP_TYPE_ID_GMAP_TYPE",
                        column: x => x.ID_GMAP_TYPE,
                        principalSchema: "gmap",
                        principalTable: "GMAP_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GMAP_TYPE_LANGUAGE_ID_GMAP_TYPE",
                schema: "gmap",
                table: "GMAP_TYPE_LANGUAGE",
                column: "ID_GMAP_TYPE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GMAP_TYPE_LANGUAGE",
                schema: "gmap");

            migrationBuilder.AddColumn<string>(
                name: "LABEL_FR",
                schema: "gmap",
                table: "GMAP_TYPE",
                nullable: true);
        }
    }
}
