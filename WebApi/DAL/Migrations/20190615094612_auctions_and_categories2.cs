using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class auctions_and_categories2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Account",
                table: "Auctions",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "AddressFrom",
                table: "Auctions",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AddressTo",
                table: "Auctions",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ContactNumber",
                table: "Auctions",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateFrom",
                table: "Auctions",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateTo",
                table: "Auctions",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DotpayLink",
                table: "Auctions",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Auctions",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "SiepomagaLink",
                table: "Auctions",
                maxLength: 500,
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    AuctionId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Categories_Auctions_AuctionId",
                        column: x => x.AuctionId,
                        principalTable: "Auctions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Categories_AuctionId",
                table: "Categories",
                column: "AuctionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropColumn(
                name: "Account",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "AddressFrom",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "AddressTo",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "ContactNumber",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "DateFrom",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "DateTo",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "DotpayLink",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "SiepomagaLink",
                table: "Auctions");
        }
    }
}
