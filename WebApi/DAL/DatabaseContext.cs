using DAL.Model;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        { }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Category>()
                .HasData(
                new { Id = 1, Name = "ŚRODKI NA LECZENIE" },
                new { Id = 2, Name = "ŚRODKI NA NAPRAWY" },
                new { Id = 3, Name = "POTRZEBNY TRANSPORT" },
                new { Id = 4, Name = "POTRZEBNI LUDZIE" },
                new { Id = 5, Name = "POMOC RZECZOWA" },
                new { Id = 6, Name = "PILNIE POTRZEBNY DOM/DOM TYMCZASOWY" }
                );
        }

        public DbSet<Auction> Auctions { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DbSet<AuctionCategory> AuctionCategories { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Subscription> Subscriptions { get; set; }

        public DbSet<Notification> Notifications { get; set; }

        public DbSet<NotificationStatus> NotificationStatuses { get; set; }

    }
}
