using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOperationTypeFamily2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ID_USER_GROUP",
                schema: "user",
                table: "USER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ID_USER_GROUP",
                schema: "user",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION_TYPE_FAMILY");
        }
    }
}
