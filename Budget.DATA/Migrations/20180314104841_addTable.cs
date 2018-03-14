using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class addTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ACCOUNT_TYPE",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LABEL = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT_TYPE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "BANK",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ADDRESS_BANK = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ADVISER_FIRST_NAME = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ADVISER_FIXED_PHONE = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    ADVISER_LAST_NAME = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ADVISER_MAIL = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ADVISER_MOBILE_PHONE = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    FOLDER_FILE_SAVE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LABEL_BANK_LONG = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LABEL_BANK_SHORT = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LOGO_CLASS_NAME = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    POSTAL_CODE_BANK = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ACCOUNT",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ALERT_THRESHOLD = table.Column<double>(type: "float", nullable: false),
                    ID_ACCOUNT_TYPE = table.Column<int>(type: "int", nullable: false),
                    ID_BANK = table.Column<int>(type: "int", nullable: false),
                    LABEL = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NUMBER = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    START_AMOUNT = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACCOUNT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_ACCOUNT_TYPE_ID_ACCOUNT_TYPE",
                        column: x => x.ID_ACCOUNT_TYPE,
                        principalTable: "ACCOUNT_TYPE",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACCOUNT_BANK_ID_BANK",
                        column: x => x.ID_BANK,
                        principalTable: "BANK",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_ID_ACCOUNT_TYPE",
                table: "ACCOUNT",
                column: "ID_ACCOUNT_TYPE");

            migrationBuilder.CreateIndex(
                name: "IX_ACCOUNT_ID_BANK",
                table: "ACCOUNT",
                column: "ID_BANK");

            migrationBuilder.CreateIndex(
                name: "IX_AccountNumber",
                table: "ACCOUNT",
                column: "NUMBER",
                unique: true,
                filter: "[NUMBER] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ACCOUNT");

            migrationBuilder.DropTable(
                name: "ACCOUNT_TYPE");

            migrationBuilder.DropTable(
                name: "BANK");
        }
    }
}
