using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterBaseChartData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BaseChartData",
                table: "BaseChartData");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "BaseChartData");

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

            migrationBuilder.AddColumn<int>(
                name: "Id2",
                table: "BaseChartData",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_BaseChartData",
                table: "BaseChartData",
                columns: new[] { "Id1", "Amount1" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "Id2",
                table: "BaseChartData");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "BaseChartData",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_BaseChartData",
                table: "BaseChartData",
                column: "Id");
        }
    }
}
