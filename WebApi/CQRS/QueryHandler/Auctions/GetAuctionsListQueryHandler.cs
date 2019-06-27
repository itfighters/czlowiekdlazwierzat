using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Mapper;
using CQRS.Query.Auctions;
using CQRS.QueryData;
using DAL;
using DAL.Model;
using DAL.Repositories.Abstract;
using MediatR;

namespace CQRS.QueryHandler.Auctions
{
    public class GetAuctionsListQueryHandler : IRequestHandler<GetAuctionsListQuery, IEnumerable<AuctionQueryData>>
    {
        private readonly IAuctionRepository auctionsRepository;

        public GetAuctionsListQueryHandler(IAuctionRepository auctionsRepository)
        {
            this.auctionsRepository = auctionsRepository;
        }

        public async Task<IEnumerable<AuctionQueryData>> Handle(GetAuctionsListQuery request, CancellationToken cancellationToken)
        {
            var auctions = await auctionsRepository
                .GetAuctions(request.Page, request.PageSize, request.Categories);

            return auctions.Select(AuctionMapper.FromAuctionToAuctionQueryData);
        }
    }
}
