using CQRS.Mapper;
using CQRS.Query.Auctions;
using CQRS.QueryData;
using DAL.Repositories.Abstract;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.QueryHandler.Auctions
{
    public class GetFeaturedAuctionsQueryHandler : IRequestHandler<GetFeaturedAuctionsQuery, IEnumerable<AuctionQueryData>>
    {
        private readonly IAuctionRepository auctionRepository;

        public GetFeaturedAuctionsQueryHandler(IAuctionRepository auctionRepository)
        {
            this.auctionRepository = auctionRepository;
        }
        public async Task<IEnumerable<AuctionQueryData>> Handle(GetFeaturedAuctionsQuery request, CancellationToken cancellationToken)
        {
            var auctions = await auctionRepository.GetFeaturedAuctions(request.Count);

            return auctions.Select(AuctionMapper.FromAuctionToAuctionQueryData);
        }
    }
}
