using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class AddOperationTransverseAs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OPERATION_TRANSVERSE_AS",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_TRANSVERSE = table.Column<int>(nullable: false),
                    ID_ACCOUNT_STATEMENT = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TRANSVERSE_AS", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_AS_ACCOUNT_STATEMENT_ID_ACCOUNT_STATEMENT",
                        column: x => x.ID_ACCOUNT_STATEMENT,
                        principalTable: "ACCOUNT_STATEMENT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_AS_OPERATION_TRANSVERSE_ID_OPERATION_TRANSVERSE",
                        column: x => x.ID_OPERATION_TRANSVERSE,
                        principalTable: "OPERATION_TRANSVERSE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_AS_ID_ACCOUNT_STATEMENT",
                table: "OPERATION_TRANSVERSE_AS",
                column: "ID_ACCOUNT_STATEMENT");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_AS_ID_OPERATION_TRANSVERSE",
                table: "OPERATION_TRANSVERSE_AS",
                column: "ID_OPERATION_TRANSVERSE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OPERATION_TRANSVERSE_AS");
        }
    }
}
