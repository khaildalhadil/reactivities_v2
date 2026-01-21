using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Activitys",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false),
                    IsCancelled = table.Column<bool>(type: "INTEGER", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    Venue = table.Column<string>(type: "TEXT", nullable: false),
                    Latitude = table.Column<double>(type: "REAL", nullable: false),
                    Longitude = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activitys", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Activitys",
                columns: new[] { "Id", "Category", "City", "Date", "Description", "IsCancelled", "Latitude", "Longitude", "Name", "Venue" },
                values: new object[] { "72354430-2233-4c71-ae2c-4c00cfb27667", "", "", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), " ", false, 0.0, 0.0, "", "" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activitys");
        }
    }
}
