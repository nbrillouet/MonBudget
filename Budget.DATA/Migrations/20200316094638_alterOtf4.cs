using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOtf4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LOGO_CLASS_NAME",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LOGO_CLASS_NAME",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                maxLength: 30,
                nullable: true);
        }
    }
}
