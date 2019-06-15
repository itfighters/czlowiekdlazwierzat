using DAL.Model;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DatabaseContext:DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        { }

        public DbSet<Auction> Auctions { get; set; }

    }
}
