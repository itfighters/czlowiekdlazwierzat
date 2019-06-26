using CQRS.QueryData;
using MediatR;

namespace CQRS.Query.Auctions
{
    public class GetAuctionDetailsQuery : IRequest<AuctionQueryData>
    {
        public int Id { get; set; }
    }
}
