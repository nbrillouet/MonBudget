using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOtf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");
        }
    }
}
