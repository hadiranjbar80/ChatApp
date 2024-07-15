using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (userManager.Users.Any() && context.Rooms.Any()) return;

            var users = new List<AppUser>
            {
                new AppUser{
                    UserName = "bob",
                    Email = "bob@test.com"
                },
                new AppUser{
                    UserName = "tom",
                    Email = "tom@test.com"
                },
                new AppUser{
                    UserName = "jane",
                    Email = "jane@test.com"
                },
                new AppUser{
                    UserName = "alex",
                    Email = "alex@test.com"
                },
            };

            foreach (var user in users)
            {
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }

            var rooms = new List<Room>
            {
                new Room
                {
                    Title = "Test Room 1",
                    Description = "In publishing and graphic design",
                    Type = RoomType.Public,
                    Capacity = 20,
                    Image = ""
                },
                new Room
                {
                    Title = "Test Room 2",
                    Description = "In publishing and graphic design",
                    Type = RoomType.Public,
                    Capacity = 40,
                    Image = ""
                },
                new Room
                {
                    Title = "Test Room 3",
                    Description = "In publishing and graphic design",
                    Type = RoomType.Public,
                    Capacity = 15,
                    Image = ""
                },
                new Room
                {
                    Title = "Test Room 4",
                    Description = "In publishing and graphic design",
                    Type = RoomType.Private,
                    Capacity = 10,
                    Image = ""
                },
                new Room
                {
                    Title = "Test Room 5",
                    Description = "In publishing and graphic design",
                    Type = RoomType.Private,
                    Capacity = 5,
                    Image = ""
                },
            };

            await context.Rooms.AddRangeAsync(rooms);
            await context.SaveChangesAsync();
        }
    }
}