using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Rooms.Any()) return;

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