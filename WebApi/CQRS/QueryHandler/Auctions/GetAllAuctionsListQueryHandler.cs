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
    class GetAllAuctionsListQueryHandler : IRequestHandler<GetAllAuctionsListQuery, IEnumerable<AuctionQueryData>>
    {
        private readonly IAuctionRepository auctionsRepository;

        public GetAllAuctionsListQueryHandler(IAuctionRepository auctionsRepository)
        {
            this.auctionsRepository = auctionsRepository;
        }

        public async Task<IEnumerable<AuctionQueryData>> Handle(GetAllAuctionsListQuery request, CancellationToken cancellationToken)
        {
            var auctions = await auctionsRepository.GetAllAuctions();
            return auctions.Select(AuctionMapper.FromAuctionToAuctionQueryData);
        }
    }
}
