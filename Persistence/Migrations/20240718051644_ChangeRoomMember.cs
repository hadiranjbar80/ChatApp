using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ChangeRoomMember : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomMembers_AspNetUsers_RoomId",
                table: "RoomMembers");

            migrationBuilder.DropForeignKey(
                name: "FK_RoomMembers_Rooms_RoomId1",
                table: "RoomMembers");

            migrationBuilder.DropIndex(
                name: "IX_RoomMembers_RoomId1",
                table: "RoomMembers");

            migrationBuilder.DropColumn(
                name: "RoomId1",
                table: "RoomMembers");

            migrationBuilder.AddForeignKey(
                name: "FK_RoomMembers_AspNetUsers_AppUserId",
                table: "RoomMembers",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RoomMembers_Rooms_RoomId",
                table: "RoomMembers",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomMembers_AspNetUsers_AppUserId",
                table: "RoomMembers");

            migrationBuilder.DropForeignKey(
                name: "FK_RoomMembers_Rooms_RoomId",
                table: "RoomMembers");

            migrationBuilder.AddColumn<Guid>(
                name: "RoomId1",
                table: "RoomMembers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RoomMembers_RoomId1",
                table: "RoomMembers",
                column: "RoomId1");

            migrationBuilder.AddForeignKey(
                name: "FK_RoomMembers_AspNetUsers_RoomId",
                table: "RoomMembers",
                column: "RoomId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RoomMembers_Rooms_RoomId1",
                table: "RoomMembers",
                column: "RoomId1",
                principalTable: "Rooms",
                principalColumn: "Id");
        }
    }
}
