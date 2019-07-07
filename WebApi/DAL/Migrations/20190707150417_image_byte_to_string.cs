using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class image_byte_to_string : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Auctions",
                nullable: true,
                oldClrType: typeof(string));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Auctions",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
