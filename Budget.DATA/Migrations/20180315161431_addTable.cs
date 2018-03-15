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
                name: "OPERATION_METHOD_LEXICAL",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_BANK = table.Column<int>(type: "int", nullable: false),
                    ID_OPERATION_METHOD = table.Column<int>(type: "int", nullable: false),
                    KEYWORD = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ORDER_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_METHOD_LEXICAL", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_METHOD_LEXICAL_BANK_ID_BANK",
                        column: x => x.ID_BANK,
                        principalTable: "BANK",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OPERATION_METHOD_LEXICAL_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_METHOD_LEXICAL_ID_BANK",
                table: "OPERATION_METHOD_LEXICAL",
                column: "ID_BANK");

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_METHOD_LEXICAL_ID_OPERATION_METHOD",
                table: "OPERATION_METHOD_LEXICAL",
                column: "ID_OPERATION_METHOD");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OPERATION_METHOD_LEXICAL");
        }
    }
}
