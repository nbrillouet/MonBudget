using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterGMapType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LABEL",
                table: "GMAP_TYPE",
                newName: "KEYWORD");

            migrationBuilder.AddColumn<string>(
                name: "LABEL_FR",
                table: "GMAP_TYPE",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LABEL_FR",
                table: "GMAP_TYPE");

            migrationBuilder.RenameColumn(
                name: "KEYWORD",
                table: "GMAP_TYPE",
                newName: "LABEL");
        }
    }
}
