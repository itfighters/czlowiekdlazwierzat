using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class auctions_and_categories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Featured",
                table: "Auctions",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "PaypalLink",
                table: "Auctions",
                maxLength: 500,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Featured",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "PaypalLink",
                table: "Auctions");
        }
    }
}
