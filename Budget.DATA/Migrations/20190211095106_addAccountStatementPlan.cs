using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class addAccountStatementPlan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ACCOUNT_STATEMENT_PLAN",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_ACCOUNT_STATEMENT = table.Column<int>(nullable: false),
                    ID_PLAN = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_STATEMENT_PLAN", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_PLAN_ACCOUNT_STATEMENT_ID_ACCOUNT_STATEMENT",
                        column: x => x.ID_ACCOUNT_STATEMENT,
                        principalTable: "ACCOUNT_STATEMENT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_STATEMENT_PLAN_PLAN_ID_PLAN",
                        column: x => x.ID_PLAN,
                        principalTable: "PLAN",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_PLAN_ID_ACCOUNT_STATEMENT",
                table: "ACCOUNT_STATEMENT_PLAN",
                column: "ID_ACCOUNT_STATEMENT");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_STATEMENT_PLAN_ID_PLAN",
                table: "ACCOUNT_STATEMENT_PLAN",
                column: "ID_PLAN");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ACCOUNT_STATEMENT_PLAN");
        }
    }
}
