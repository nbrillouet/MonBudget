using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterBaseChartData1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BaseChartData",
                table: "BaseChartData");

            migrationBuilder.DropColumn(
                name: "Id1",
                table: "BaseChartData");

            migrationBuilder.DropColumn(
                name: "Amount1",
                table: "BaseChartData");

            migrationBuilder.RenameColumn(
                name: "Id2",
                table: "BaseChartData",
                newName: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BaseChartData",
                table: "BaseChartData",
                columns: new[] { "Id", "Amount" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BaseChartData",
                table: "BaseChartData");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "BaseChartData",
                newName: "Id2");

            migrationBuilder.AddColumn<int>(
                name: "Id1",
                table: "BaseChartData",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "Amount1",
                table: "BaseChartData",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_BaseChartData",
                table: "BaseChartData",
                columns: new[] { "Id1", "Amount1" });
        }
    }
}
