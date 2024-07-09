namespace Domain
{
    public class Room
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public RoomType Type { get; set; } = RoomType.Public;
        public int Capacity { get; set; } = 50;
    }
}