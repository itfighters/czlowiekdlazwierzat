using CQRS.QueryData;
using MediatR;
using System.Collections.Generic;

namespace CQRS.Query.Auctions
{
    public class GetAllAuctionsListQuery : IRequest<IEnumerable<AuctionQueryData>>
    {
    }
}
