using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {

        }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<RoomMember> RoomMembers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RoomMember>(x => x.HasKey(rm => new { rm.AppUserId, rm.RoomId }));

            modelBuilder.Entity<RoomMember>()
                .HasOne(u => u.AppUser)
                .WithMany(r => r.RoomMembers)
                .HasForeignKey(rm => rm.AppUserId);

            modelBuilder.Entity<RoomMember>()
                .HasOne(u => u.Room)
                .WithMany(r => r.RoomMembers)
                .HasForeignKey(rm => rm.RoomId);
        }
    }
}