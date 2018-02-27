using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class alterUser1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AVATAR",
                table: "USER");

            migrationBuilder.AddColumn<string>(
                name: "AVATAR_URL",
                table: "USER",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AVATAR_URL",
                table: "USER");

            migrationBuilder.AddColumn<string>(
                name: "AVATAR",
                table: "USER",
                nullable: true);
        }
    }
}
