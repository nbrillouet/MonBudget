using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOtf2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                nullable: false,
                oldClrType: typeof(bool));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "ID_ASSERT",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
