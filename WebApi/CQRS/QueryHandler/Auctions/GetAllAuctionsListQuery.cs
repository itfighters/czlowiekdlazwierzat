using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Mapper;
using CQRS.Query.Auctions;
using CQRS.QueryData;
using DAL.Repositories.Abstract;
using MediatR;

namespace CQRS.QueryHandler.Auctions
{
    public class GetAllAuctionsListQueryHandler : IRequestHandler<GetAllAuctionsListQuery, ListResponse<AuctionQueryData>>
    {
        private readonly IAuctionRepository auctionsRepository;

        public GetAllAuctionsListQueryHandler(IAuctionRepository auctionsRepository)
        {
            this.auctionsRepository = auctionsRepository;
        }

        public async Task<ListResponse<AuctionQueryData>> Handle(GetAllAuctionsListQuery request, CancellationToken cancellationToken)
        {
            var auctions = await auctionsRepository
                .GetAuctions(request.Page, request.PageSize, request.Categories, true);

            var auctionsCount = await auctionsRepository.GetAuctionsCount(request.Categories);

            return new ListResponse<AuctionQueryData>
            {
                Values = auctions.Select(AuctionMapper.FromAuctionToAuctionQueryData),
                TotalCount = auctionsCount
            };
        }

    }
}
