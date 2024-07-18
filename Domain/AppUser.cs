using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public ICollection<RoomMember> RoomMembers { get; set; }
    }
}