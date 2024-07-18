using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddRoomOwner : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rooms_AspNetUsers_AppUserId",
                table: "Rooms");

            migrationBuilder.RenameColumn(
                name: "AppUserId",
                table: "Rooms",
                newName: "OwnerId");

            migrationBuilder.RenameIndex(
                name: "IX_Rooms_AppUserId",
                table: "Rooms",
                newName: "IX_Rooms_OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rooms_AspNetUsers_OwnerId",
                table: "Rooms",
                column: "OwnerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rooms_AspNetUsers_OwnerId",
                table: "Rooms");

            migrationBuilder.RenameColumn(
                name: "OwnerId",
                table: "Rooms",
                newName: "AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Rooms_OwnerId",
                table: "Rooms",
                newName: "IX_Rooms_AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rooms_AspNetUsers_AppUserId",
                table: "Rooms",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
