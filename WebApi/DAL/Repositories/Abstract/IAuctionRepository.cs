using System;
using DAL.Model;
using System.Collections.Generic;

namespace DAL.Repositories.Abstract
{
    public interface IAuctionRepository
    {
        IEnumerable<Auction> GetAuctions();

        Auction GetAuction(int id);

        void AddAuction(Auction auction);

        void DeleteAuction(int id);

        void UpdateAuction(Auction auction);

    }
}
