using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterBank : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_BANK_ID_BANK",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_BANK_ID_BANK",
                schema: "ref",
                table: "ACCOUNT");

            migrationBuilder.DropTable(
                name: "BANK",
                schema: "ref");

            migrationBuilder.RenameColumn(
                name: "ID_BANK",
                schema: "ref",
                table: "ACCOUNT",
                newName: "ID_BANK_AGENCY");

            migrationBuilder.RenameIndex(
                name: "IX_ACCOUNT_ID_BANK",
                schema: "ref",
                table: "ACCOUNT",
                newName: "IX_ACCOUNT_ID_BANK_AGENCY");

            migrationBuilder.RenameColumn(
                name: "ID_BANK",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                newName: "ID_BANK_AGENCY");

            migrationBuilder.RenameIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_ID_BANK",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                newName: "IX_ACCOUNT_STATEMENT_IMPORT_ID_BANK_AGENCY");

            migrationBuilder.AlterColumn<double>(
                name: "Total",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<double>(
                name: "Solde",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<double>(
                name: "Debit",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<double>(
                name: "Credit",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.CreateTable(
                name: "BANK_AGENCY",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL_SHORT = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL_LONG = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_FIRST_NAME = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_LAST_NAME = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_MAIL = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_FIXED_PHONE = table.Column<string>(maxLength: 30, nullable: true),
                    ADVISER_MOBILE_PHONE = table.Column<string>(maxLength: 30, nullable: true),
                    LOGO_CLASS_NAME = table.Column<string>(maxLength: 30, nullable: true),
                    FOLDER_FILE_SAVE = table.Column<string>(nullable: true),
                    ID_GMAP_ADDRESS = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK_AGENCY", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BANK_AGENCY_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                        column: x => x.ID_GMAP_ADDRESS,
                        principalSchema: "gmap",
                        principalTable: "GMAP_ADDRESS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });


            migrationBuilder.InsertData(
                table: "BANK_AGENCY",
                schema: "ref",
                columns: new[] { "ID", "ID_GMAP_ADDRESS" },
                values: new object[] { 1, 1 }
            );

            migrationBuilder.InsertData(
                table: "BANK_AGENCY",
                schema: "ref",
                columns: new[] { "ID", "ID_GMAP_ADDRESS" },
                values: new object[] { 2, 1 }
            );

            migrationBuilder.InsertData(
                table: "BANK_AGENCY",
                schema: "ref",
                columns: new[] { "ID", "ID_GMAP_ADDRESS" },
                values: new object[] { 4, 1 }
            );


            migrationBuilder.CreateIndex(
                name: "IX_BANK_AGENCY_ID_GMAP_ADDRESS",
                schema: "ref",
                table: "BANK_AGENCY",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_BANK_AGENCY_ID_BANK_AGENCY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                column: "ID_BANK_AGENCY",
                principalSchema: "ref",
                principalTable: "BANK_AGENCY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_BANK_AGENCY_ID_BANK_AGENCY",
                schema: "ref",
                table: "ACCOUNT",
                column: "ID_BANK_AGENCY",
                principalSchema: "ref",
                principalTable: "BANK_AGENCY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_BANK_AGENCY_ID_BANK_AGENCY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_BANK_AGENCY_ID_BANK_AGENCY",
                schema: "ref",
                table: "ACCOUNT");

            migrationBuilder.DropTable(
                name: "BANK_AGENCY",
                schema: "ref");

            migrationBuilder.RenameColumn(
                name: "ID_BANK_AGENCY",
                schema: "ref",
                table: "ACCOUNT",
                newName: "ID_BANK");

            migrationBuilder.RenameIndex(
                name: "IX_ACCOUNT_ID_BANK_AGENCY",
                schema: "ref",
                table: "ACCOUNT",
                newName: "IX_ACCOUNT_ID_BANK");

            migrationBuilder.RenameColumn(
                name: "ID_BANK_AGENCY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                newName: "ID_BANK");

            migrationBuilder.RenameIndex(
                name: "IX_ACCOUNT_STATEMENT_IMPORT_ID_BANK_AGENCY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                newName: "IX_ACCOUNT_STATEMENT_IMPORT_ID_BANK");

            migrationBuilder.AlterColumn<decimal>(
                name: "Total",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.AlterColumn<decimal>(
                name: "Solde",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.AlterColumn<decimal>(
                name: "Debit",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.AlterColumn<decimal>(
                name: "Credit",
                table: "SoldeDto",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.CreateTable(
                name: "BANK",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ADDRESS_BANK = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_FIRST_NAME = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_FIXED_PHONE = table.Column<string>(maxLength: 30, nullable: true),
                    ADVISER_LAST_NAME = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_MAIL = table.Column<string>(maxLength: 50, nullable: true),
                    ADVISER_MOBILE_PHONE = table.Column<string>(maxLength: 30, nullable: true),
                    FOLDER_FILE_SAVE = table.Column<string>(nullable: true),
                    LABEL_BANK_LONG = table.Column<string>(maxLength: 50, nullable: true),
                    LABEL_BANK_SHORT = table.Column<string>(maxLength: 50, nullable: true),
                    LOGO_CLASS_NAME = table.Column<string>(maxLength: 30, nullable: true),
                    POSTAL_CODE_BANK = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK", x => x.ID);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_BANK_ID_BANK",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT",
                column: "ID_BANK",
                principalSchema: "ref",
                principalTable: "BANK",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_BANK_ID_BANK",
                schema: "ref",
                table: "ACCOUNT",
                column: "ID_BANK",
                principalSchema: "ref",
                principalTable: "BANK",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
