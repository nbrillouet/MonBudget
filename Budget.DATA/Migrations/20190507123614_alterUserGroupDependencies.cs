using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterUserGroupDependencies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "USER_OPERATION",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_OPERATION_DETAIL",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_OPERATION_TYPE",
                schema: "user");

            migrationBuilder.DropTable(
                name: "USER_OPERATION_TYPE_FAMILY",
                schema: "user");

            migrationBuilder.RenameColumn(
                name: "IS_GENERIC",
                schema: "ref",
                table: "OPERATION_TYPE",
                newName: "IS_MANDATORY");

            migrationBuilder.RenameColumn(
                name: "IS_GENERIC",
                schema: "ref",
                table: "OPERATION_DETAIL",
                newName: "IS_MANDATORY");

            migrationBuilder.RenameColumn(
                name: "IS_GENERIC",
                schema: "ref",
                table: "OPERATION",
                newName: "IS_MANDATORY");

            migrationBuilder.AddColumn<int>(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION_TYPE",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION_DETAIL",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION_TYPE");

            migrationBuilder.DropColumn(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.DropColumn(
                name: "ID_USER_GROUP",
                schema: "ref",
                table: "OPERATION");

            migrationBuilder.RenameColumn(
                name: "IS_MANDATORY",
                schema: "ref",
                table: "OPERATION_TYPE",
                newName: "IS_GENERIC");

            migrationBuilder.RenameColumn(
                name: "IS_MANDATORY",
                schema: "ref",
                table: "OPERATION_DETAIL",
                newName: "IS_GENERIC");

            migrationBuilder.RenameColumn(
                name: "IS_MANDATORY",
                schema: "ref",
                table: "OPERATION",
                newName: "IS_GENERIC");

            migrationBuilder.CreateTable(
                name: "USER_OPERATION",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION = table.Column<int>(nullable: false),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_OPERATION_ID_OPERATION",
                        column: x => x.ID_OPERATION,
                        principalSchema: "ref",
                        principalTable: "OPERATION",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_OPERATION_DETAIL",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_DETAIL = table.Column<int>(nullable: false),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION_DETAIL", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_DETAIL_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                        column: x => x.ID_OPERATION_DETAIL,
                        principalSchema: "ref",
                        principalTable: "OPERATION_DETAIL",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_DETAIL_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_OPERATION_TYPE",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_TYPE = table.Column<int>(nullable: false),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION_TYPE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_OPERATION_TYPE_ID_OPERATION_TYPE",
                        column: x => x.ID_OPERATION_TYPE,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "USER_OPERATION_TYPE_FAMILY",
                schema: "user",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(nullable: false),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER_OPERATION_TYPE_FAMILY", x => x.ID);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_FAMILY_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_USER_OPERATION_TYPE_FAMILY_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalSchema: "user",
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_ID_OPERATION",
                schema: "user",
                table: "USER_OPERATION",
                column: "ID_OPERATION");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_ID_USER",
                schema: "user",
                table: "USER_OPERATION",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                schema: "user",
                table: "USER_OPERATION_DETAIL",
                column: "ID_OPERATION_DETAIL");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_DETAIL_ID_USER",
                schema: "user",
                table: "USER_OPERATION_DETAIL",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_ID_OPERATION_TYPE",
                schema: "user",
                table: "USER_OPERATION_TYPE",
                column: "ID_OPERATION_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_ID_USER",
                schema: "user",
                table: "USER_OPERATION_TYPE",
                column: "ID_USER");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                schema: "user",
                table: "USER_OPERATION_TYPE_FAMILY",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_USER_OPERATION_TYPE_FAMILY_ID_USER",
                schema: "user",
                table: "USER_OPERATION_TYPE_FAMILY",
                column: "ID_USER");
        }
    }
}
