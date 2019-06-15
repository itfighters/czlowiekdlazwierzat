using Microsoft.EntityFrameworkCore;

namespace NotificationJobsLibrary.Models
{
    class NotificationContext : DbContext
    {
        private readonly string _connection;
        public NotificationContext(string connection) : base()
        {
            _connection = connection;
        }

        public NotificationContext(DbContextOptions<NotificationContext> options)
            : base(options)
        {
        }

        //public virtual DbSet<Application> Applications { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_connection);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Application>().ToTable("Applications", schemaName: "dto");
        }
    }
}
