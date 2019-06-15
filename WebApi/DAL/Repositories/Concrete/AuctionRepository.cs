using System;
using System.Collections.Generic;
using System.Linq;
using DAL.Model;
using DAL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DAL.Repositories.Concrete
{
    public class AuctionRepository : IAuctionRepository
    {
        private readonly DatabaseContext dbContext;

        public AuctionRepository(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public Auction GetAuction(int id)
        {
            return dbContext.Auctions.Include(x=> x.Categories).FirstOrDefault(x=> x.Id == id);
        }

        public void AddAuction(Auction auction)
        {
            try
            {
                auction.CreatedAt = DateTime.Now;
                dbContext.Auctions.Add(auction);
                dbContext.SaveChanges();
            }
            catch (DbUpdateException /* ex */)
            {
                // Obsluga 
            }
        }

        public async void DeleteAuction(int id)
        {
            var auction = dbContext.Auctions.Find(id);
            auction.IsDeleted = true;
            UpdateAuction(auction);
        }

        public void UpdateAuction(Auction auction)
        {
            var auctionToUpdate = dbContext.Auctions.FirstOrDefault(a => a.Id == auction.Id);
            dbContext.Entry(auctionToUpdate).CurrentValues.SetValues(auction);
            dbContext.SaveChanges();
        }

        public IEnumerable<Auction> GetAuctions()
        {
            return dbContext.Auctions.Include(x=> x.Categories).Where(x  => !x.IsDeleted).ToList();
        }
    }
}
