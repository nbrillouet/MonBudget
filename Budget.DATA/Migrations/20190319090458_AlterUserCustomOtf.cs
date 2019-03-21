using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class AlterUserCustomOtf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "USER_AS_CUSTOM_OTF",
                schema: "as");

            migrationBuilder.CreateTable(
                name: "USER_CUSTOM_OTF",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USER = table.Column<int>(nullable: false),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_CUSTOM_OTF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_CUSTOM_OTF_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_CUSTOM_OTF_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_USER_CUSTOM_OTF_ID_USER",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_UCO_IdOperationTypeFamily_IdUser",
                schema: "user",
                table: "USER_CUSTOM_OTF",
                columns: new[] { "ID_OPERATION_TYPE_FAMILY", "ID_USER" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "USER_CUSTOM_OTF",
                schema: "user");

            migrationBuilder.CreateTable(
                name: "USER_AS_CUSTOM_OTF",
                schema: "as",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_ACCOUNT_STATEMENT = table.Column<int>(nullable: false),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_AS_CUSTOM_OTF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_AS_CUSTOM_OTF_ACCOUNT_STATEMENT_ID_ACCOUNT_STATEMENT",
                        column: x => x.ID_ACCOUNT_STATEMENT,
                        principalSchema: "as",
                        principalTable: "ACCOUNT_STATEMENT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_AS_CUSTOM_OTF_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_USER_AS_CUSTOM_OTF_ID_USER",
                schema: "as",
                table: "USER_AS_CUSTOM_OTF",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_UACO_IdAccountStatement_IdUser",
                schema: "as",
                table: "USER_AS_CUSTOM_OTF",
                columns: new[] { "ID_ACCOUNT_STATEMENT", "ID_USER" },
                unique: true);
        }
    }
}
