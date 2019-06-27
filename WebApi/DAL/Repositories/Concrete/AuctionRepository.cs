using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Model;
using DAL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories.Concrete
{
    public class AuctionRepository : IAuctionRepository
    {
        private readonly DatabaseContext dbContext;

        public AuctionRepository(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<Auction>> GetAuctions(int page, int pageSize, int[] category)
        {
            return await BaseAuctionsQuery()
                .Where(x => x.Categories.Select(y => y.CategoryId).Intersect(category).Any())
                .OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<IEnumerable<Auction>> GetFeaturedAuctions(int count)
        {
            return await BaseAuctionsQuery()
                .Where(x => x.Featured == true)
                .OrderByDescending(x => x.CreatedAt)
                .Take(count)
                .ToListAsync();
        }

        private IQueryable<Auction> BaseAuctionsQuery() => dbContext.Auctions
                .Include(x => x.Categories)
                .Where(x => !x.IsDeleted);
    }
}
