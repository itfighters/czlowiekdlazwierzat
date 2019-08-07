using System;
using System.Collections.Generic;
using System.Text;
using CQRS.QueryData;
using MediatR;

namespace CQRS.Query.Auctions
{
    public class GetAllAuctionsListQuery : PagedQuery, IRequest<ListResponse<AuctionQueryData>>
    {
        public int[] Categories { get; set; }
    }
}
