using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class AlterUserCustomOtf1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.AddColumn<int>(
                name: "ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "BaseChartData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Month = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Amount = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseChartData", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_USER_CUSTOM_OTF_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser_IdAccount",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                columns: new[] { "ID_OPERATION_TYPE_FAMILY", "ID_USER", "ID_ACCOUNT" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_USER_CUSTOM_OTF_ACCOUNT_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                column: "ID_ACCOUNT",
                principalSchema: "ref",
                principalTable: "ACCOUNT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_USER_CUSTOM_OTF_ACCOUNT_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.DropTable(
                name: "BaseChartData");

            migrationBuilder.DropIndex(
                name: "IX_USER_CUSTOM_OTF_ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.DropIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser_IdAccount",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.DropColumn(
                name: "ID_ACCOUNT",
                schema: "user",
                table: "USER_CUSTOM_OTF");

            migrationBuilder.CreateIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                columns: new[] { "ID_OPERATION_TYPE_FAMILY", "ID_USER" },
                unique: true);
        }
    }
}
