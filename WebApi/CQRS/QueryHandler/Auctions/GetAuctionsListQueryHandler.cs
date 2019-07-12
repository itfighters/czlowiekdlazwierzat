using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Mapper;
using CQRS.Query.Auctions;
using CQRS.QueryData;
using DAL.Repositories.Abstract;
using MediatR;

namespace CQRS.QueryHandler.Auctions
{
    public class GetAuctionsListQueryHandler : IRequestHandler<GetAuctionsListQuery, ListResponse<AuctionQueryData>>
    {
        private readonly IAuctionRepository auctionsRepository;

        public GetAuctionsListQueryHandler(IAuctionRepository auctionsRepository)
        {
            this.auctionsRepository = auctionsRepository;
        }

        public async Task<ListResponse<AuctionQueryData>> Handle(GetAuctionsListQuery request, CancellationToken cancellationToken)
        {
            var auctions = await auctionsRepository
                .GetAuctions(request.Page, request.PageSize, request.Categories);

            var auctionsCount = await auctionsRepository.GetAuctionsCount(request.Categories);

            return new ListResponse<AuctionQueryData> {
                Values = auctions.Select(AuctionMapper.FromAuctionToAuctionQueryData),
                TotalCount = auctionsCount
            };
        }

    }
}
