using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "USER",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AVATAR_URL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CITY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    COUNTRY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CREATION_DATE = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LAST_ACTIVE_DATE = table.Column<DateTime>(type: "datetime2", nullable: false),
                    BIRTH_DATE = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FIRST_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GENDER = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_AVATAR_CLOUD = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LAST_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PASSWORD_HASH = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PASSWORD_SALT = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    POSTAL_CODE = table.Column<int>(type: "int", nullable: false),
                    USER_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "SHORTCUT",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ICON = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_USER = table.Column<int>(type: "int", nullable: false),
                    TITLE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    URL = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SHORTCUT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_SHORTCUT_USER_ID_USER",
                        column: x => x.ID_USER,
                        principalTable: "USER",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SHORTCUT_ID_USER",
                table: "SHORTCUT",
                column: "ID_USER");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SHORTCUT");

            migrationBuilder.DropTable(
                name: "USER");
        }
    }
}
