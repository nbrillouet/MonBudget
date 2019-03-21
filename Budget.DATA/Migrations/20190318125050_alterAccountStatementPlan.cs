using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAccountStatementPlan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PLAN_POSTE_FREQUENCY_FREQUENCY_ID_FREQUENCY",
                schema: "plan",
                table: "PLAN_POSTE_FREQUENCY");

            migrationBuilder.DropTable(
                name: "FREQUENCY",
                schema: "plan");

            migrationBuilder.DropIndex(
                name: "IX_ACCOUNT_STATEMENT_PLAN_ID_ACCOUNT_STATEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_PLAN");

            migrationBuilder.CreateIndex(
                name: "IX_ASP_IdAccountStatement_IdPlan",
                schema: "as",
                table: "ACCOUNT_STATEMENT_PLAN",
                columns: new[] { "ID_ACCOUNT_STATEMENT", "ID_PLAN" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PLAN_POSTE_FREQUENCY_MONTH_ID_FREQUENCY",
                schema: "plan",
                table: "PLAN_POSTE_FREQUENCY",
                column: "ID_FREQUENCY",
                principalSchema: "gen",
                principalTable: "MONTH",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PLAN_POSTE_FREQUENCY_MONTH_ID_FREQUENCY",
                schema: "plan",
                table: "PLAN_POSTE_FREQUENCY");

            migrationBuilder.DropIndex(
                name: "IX_ASP_IdAccountStatement_IdPlan",
                schema: "as",
                table: "ACCOUNT_STATEMENT_PLAN");

            migrationBuilder.CreateTable(
                name: "FREQUENCY",
                schema: "plan",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MONTH_LABEL = table.Column<string>(nullable: true),
                    MONTH_NUMBER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FREQUENCY", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_PLAN_ID_ACCOUNT_STATEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_PLAN",
                column: "ID_ACCOUNT_STATEMENT");

            migrationBuilder.AddForeignKey(
                name: "FK_PLAN_POSTE_FREQUENCY_FREQUENCY_ID_FREQUENCY",
                schema: "plan",
                table: "PLAN_POSTE_FREQUENCY",
                column: "ID_FREQUENCY",
                principalSchema: "plan",
                principalTable: "FREQUENCY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
