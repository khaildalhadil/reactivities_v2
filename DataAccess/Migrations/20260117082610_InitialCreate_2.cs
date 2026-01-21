using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate_2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Activitys",
                keyColumn: "Id",
                keyValue: "72354430-2233-4c71-ae2c-4c00cfb27667");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Activitys",
                columns: new[] { "Id", "Category", "City", "Date", "Description", "IsCancelled", "Latitude", "Longitude", "Name", "Venue" },
                values: new object[] { "72354430-2233-4c71-ae2c-4c00cfb27667", "", "", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), " ", false, 0.0, 0.0, "", "" });
        }
    }
}
