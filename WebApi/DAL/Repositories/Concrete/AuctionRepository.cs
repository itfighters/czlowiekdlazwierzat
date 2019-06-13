using System.Collections.Generic;
using System.Linq;
using DAL.Model;
using DAL.Repositories.Abstract;

namespace DAL.Repositories.Concrete
{
    public class AuctionRepository : IAuctionRepository
    {
        private readonly DatabaseContext dbContext;

        public AuctionRepository(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void AddAuction(Auction auction)
        {
            dbContext.Auctions.Add(auction);
            dbContext.SaveChanges();
        }

        public IEnumerable<Auction> GetAuctions()
        {
            return dbContext.Auctions.ToList();
        }
    }
}
