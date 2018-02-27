using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Budget.DATA.Migrations
{
    public partial class ExtendedUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AVATAR",
                table: "USER",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CITY",
                table: "USER",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "COUNTRY",
                table: "USER",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CREATION_DATE",
                table: "USER",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LAST_ACTIVE_DATE",
                table: "USER",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "BIRTH_DATE",
                table: "USER",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FIRST_NAME",
                table: "USER",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GENDER",
                table: "USER",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LAST_NAME",
                table: "USER",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "POSTAL_CODE",
                table: "USER",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AVATAR",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "CITY",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "COUNTRY",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "CREATION_DATE",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "LAST_ACTIVE_DATE",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "BIRTH_DATE",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "FIRST_NAME",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "GENDER",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "LAST_NAME",
                table: "USER");

            migrationBuilder.DropColumn(
                name: "POSTAL_CODE",
                table: "USER");
        }
    }
}
