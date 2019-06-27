﻿using DAL.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DAL
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        { }

        public DbSet<Auction> Auctions { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<AuctionCategory> AuctionCategories { get; set; }
        public DbSet<SubscriptionCategory> SubscriptionCategories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public object FirstOrDefaultAsync { get; set; }

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

        public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new CancellationToken())
        {
            UpdateValues();
            return await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            UpdateValues();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        private void UpdateValues()
        {
            foreach (var entry in ChangeTracker.Entries().Where(e => e.State == EntityState.Added || e.State == EntityState.Modified))
            {
                if (entry.Entity is ITimeStampedEntity timestamped)
                {
                    timestamped.UpdatedAt = DateTime.UtcNow;

                    if (entry.State == EntityState.Added && timestamped.CreatedAt == default(DateTime))
                    {
                        timestamped.CreatedAt = timestamped.UpdatedAt;
                    }
                }
            }
        }
    }
}
