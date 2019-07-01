using System;
using DAL.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repositories.Abstract
{
    public interface IAuctionRepository
    {
        Task<IEnumerable<Auction>> GetAuctions(int page, int pageSize, int[] category);
        Task<IEnumerable<Auction>> GetAllAuctions();
        Task<IEnumerable<Auction>> GetFeaturedAuctions(int count);
    }
}
