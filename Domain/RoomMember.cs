using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class RoomMember
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid RoomId { get; set; }
        public Room Room { get; set; }
        public bool IsOwner { get; set; }
    }
}