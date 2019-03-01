using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class addOperationTransverse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "OPERATION_TRANSVERSE",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(maxLength: 255, nullable: false),
                    ID_USER = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_TRANSVERSE", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_TRANSVERSE_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_TRANSVERSE_ID_USER",
                table: "OPERATION_TRANSVERSE",
                column: "ID_USER");

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION",
                principalTable: "OPERATION",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_DETAIL",
                principalTable: "OPERATION_DETAIL",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_METHOD",
                principalTable: "OPERATION_METHOD",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE",
                principalTable: "OPERATION_TYPE",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY",
                principalTable: "OPERATION_TYPE_FAMILY",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropTable(
                name: "OPERATION_TRANSVERSE");

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION",
                principalTable: "OPERATION",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_DETAIL",
                principalTable: "OPERATION_DETAIL",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_METHOD",
                principalTable: "OPERATION_METHOD",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE",
                principalTable: "OPERATION_TYPE",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY",
                principalTable: "OPERATION_TYPE_FAMILY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
