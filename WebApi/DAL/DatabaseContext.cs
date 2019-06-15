using DAL.Model;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DatabaseContext:DbContext
    {
        private readonly string _connection;
        public DatabaseContext(string connection = "Server=tcp:notificationjobs.database.windows.net,1433;Initial Catalog=notificationjobs;Persist Security Info=False;User ID=jaceksta;Password=Kuzba123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;") : base()
        {
            _connection = connection;
        }
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        { }

        public DbSet<Auction> Auctions { get; set; }



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
