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

        public async Task<IEnumerable<Auction>> GetAuctions(int? page, int? pageSize, int[] category)
        {
            var query = BaseAuctionsQuery();
            if (category != null && category.Length > 0)
                query = query.Where(x => x.Categories.Select(y => y.CategoryId).Intersect(category).Any());

            if (page.HasValue && pageSize.HasValue)
                query = query
                    .Skip((page.Value - 1) * pageSize.Value)
                    .Take(pageSize.Value);

            return await query
                .OrderBy(x => x.Id)
                .ToListAsync();
        }

        public async Task<int> GetAuctionsCount(int[] category)
        {
            var query = BaseAuctionsQuery();
            if (category != null && category.Length > 0)
                query = query.Where(x => x.Categories.Select(y => y.CategoryId).Intersect(category).Any());

            return await query
                .CountAsync();
        }

        public async Task<IEnumerable<Auction>> GetFeaturedAuctions(int count)
        {
            var featuredAuctions = await BaseAuctionsQuery()
                .Where(x => x.Featured == true)
                .OrderByDescending(x => x.CreatedAt)
                .Take(count)
                .ToListAsync();

            if (featuredAuctions.Count > 0)
            {
                return featuredAuctions;
            }
            else
            {
                return await BaseAuctionsQuery()
                .OrderByDescending(x => x.CreatedAt)
                .Take(count)
                .ToListAsync();
            }
        }

        private IQueryable<Auction> BaseAuctionsQuery() => dbContext.Auctions
                .Include(x => x.Categories)
                .Where(x => !x.IsDeleted);
    }
}
