using DAL.Model;
using System.Collections.Generic;

namespace DAL.Repositories.Abstract
{
    public interface IAuctionRepository
    {
        IEnumerable<Auction> GetAuctions();
        void AddAuction(Auction auction);
        
    }
}
