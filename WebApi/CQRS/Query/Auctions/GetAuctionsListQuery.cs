using CQRS.QueryData;
using MediatR;
using System.Collections.Generic;

namespace CQRS.Query.Auctions
{
    public class GetAuctionsListQuery : PagedQuery, IRequest<ListResponse<AuctionQueryData>>
    {
        public int[] Categories { get; set; }
    }
}
