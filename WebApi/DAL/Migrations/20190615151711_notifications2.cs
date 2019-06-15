using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class notifications2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotificationStatuses_Notifications_NotificationId1",
                table: "NotificationStatuses");

            migrationBuilder.DropIndex(
                name: "IX_NotificationStatuses_NotificationId1",
                table: "NotificationStatuses");

            migrationBuilder.DropColumn(
                name: "NotificationId1",
                table: "NotificationStatuses");

            migrationBuilder.AlterColumn<Guid>(
                name: "NotificationId",
                table: "NotificationStatuses",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_NotificationStatuses_NotificationId",
                table: "NotificationStatuses",
                column: "NotificationId");

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationStatuses_Notifications_NotificationId",
                table: "NotificationStatuses",
                column: "NotificationId",
                principalTable: "Notifications",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotificationStatuses_Notifications_NotificationId",
                table: "NotificationStatuses");

            migrationBuilder.DropIndex(
                name: "IX_NotificationStatuses_NotificationId",
                table: "NotificationStatuses");

            migrationBuilder.AlterColumn<int>(
                name: "NotificationId",
                table: "NotificationStatuses",
                nullable: false,
                oldClrType: typeof(Guid));

            migrationBuilder.AddColumn<Guid>(
                name: "NotificationId1",
                table: "NotificationStatuses",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_NotificationStatuses_NotificationId1",
                table: "NotificationStatuses",
                column: "NotificationId1");

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationStatuses_Notifications_NotificationId1",
                table: "NotificationStatuses",
                column: "NotificationId1",
                principalTable: "Notifications",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
