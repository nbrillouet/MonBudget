using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class addBankFileDefinition : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BANK_FILE_DEFINITION",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_BANK = table.Column<int>(type: "int", nullable: false),
                    LABEL_FIELD = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LABEL_ORDER = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BANK_FILE_DEFINITION", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BANK_FILE_DEFINITION_BANK_ID_BANK",
                        column: x => x.ID_BANK,
                        principalTable: "BANK",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BANK_FILE_DEFINITION_ID_BANK",
                table: "BANK_FILE_DEFINITION",
                column: "ID_BANK");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BANK_FILE_DEFINITION");
        }
    }
}
