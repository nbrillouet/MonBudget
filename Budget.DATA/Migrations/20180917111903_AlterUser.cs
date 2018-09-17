using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class AlterUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CITY",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "COUNTRY",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "POSTAL_CODE",
                table: "USER");

            migrationBuilder.AddColumn<int>(
                name: "ID_GMAP_ADDRESS",
                table: "USER",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_USER_ID_GMAP_ADDRESS",
                table: "USER",
                column: "ID_GMAP_ADDRESS");

            migrationBuilder.AddForeignKey(
                name: "FK_USER_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                table: "USER",
                column: "ID_GMAP_ADDRESS",
                principalTable: "GMAP_ADDRESS",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_USER_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                table: "USER");

            migrationBuilder.DropIndex(
                name: "IX_USER_ID_GMAP_ADDRESS",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "ID_GMAP_ADDRESS",
                table: "USER");

            migrationBuilder.AddColumn<string>(
                name: "CITY",
                table: "USER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "COUNTRY",
                table: "USER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "POSTAL_CODE",
                table: "USER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
