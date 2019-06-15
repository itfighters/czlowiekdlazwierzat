using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class auctions_and_categories4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Auctions_AuctionId",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Categories_AuctionId",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "AuctionId",
                table: "Categories");

            migrationBuilder.CreateTable(
                name: "AuctionCategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuctionId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuctionCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AuctionCategories_Auctions_AuctionId",
                        column: x => x.AuctionId,
                        principalTable: "Auctions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AuctionCategories_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AuctionCategories_AuctionId",
                table: "AuctionCategories",
                column: "AuctionId");

            migrationBuilder.CreateIndex(
                name: "IX_AuctionCategories_CategoryId",
                table: "AuctionCategories",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AuctionCategories");

            migrationBuilder.AddColumn<int>(
                name: "AuctionId",
                table: "Categories",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Categories_AuctionId",
                table: "Categories",
                column: "AuctionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Auctions_AuctionId",
                table: "Categories",
                column: "AuctionId",
                principalTable: "Auctions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
