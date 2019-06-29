using CQRS.Mapper;
using CQRS.Query.Auctions;
using CQRS.QueryData;
using DAL;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.QueryHandler.Auctions
{
    public class GetAuctionDetailsQueryHandler : IRequestHandler<GetAuctionDetailsQuery, AuctionQueryData>
    {
        private readonly DatabaseContext dbContext;

        public GetAuctionDetailsQueryHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<AuctionQueryData> Handle(GetAuctionDetailsQuery request, CancellationToken cancellationToken)
        {
            var auction = await dbContext.Auctions
                .Include(x => x.Categories)
            .FirstOrDefaultAsync(x => x.Id == request.Id);

            return AuctionMapper.FromAuctionToAuctionQueryData(auction);
        }



    }
}
