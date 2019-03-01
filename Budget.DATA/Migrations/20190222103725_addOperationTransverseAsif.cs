using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class addOperationTransverseAsif : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OPERATION_TRANSVERSE_ASIF",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_TRANSVERSE = table.Column<int>(nullable: false),
                    ID_ACCOUNT_STATEMENT_IMPORT_FILE = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TRANSVERSE_ASIF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_ASIF_ACCOUNT_STATEMENT_IMPORT_FILE_ID_ACCOUNT_STATEMENT_IMPORT_FILE",
                        column: x => x.ID_ACCOUNT_STATEMENT_IMPORT_FILE,
                        principalTable: "ACCOUNT_STATEMENT_IMPORT_FILE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_ASIF_OPERATION_TRANSVERSE_ID_OPERATION_TRANSVERSE",
                        column: x => x.ID_OPERATION_TRANSVERSE,
                        principalTable: "OPERATION_TRANSVERSE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_ASIF_ID_ACCOUNT_STATEMENT_IMPORT_FILE",
                table: "OPERATION_TRANSVERSE_ASIF",
                column: "ID_ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_ASIF_ID_OPERATION_TRANSVERSE",
                table: "OPERATION_TRANSVERSE_ASIF",
                column: "ID_OPERATION_TRANSVERSE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OPERATION_TRANSVERSE_ASIF");
        }
    }
}
