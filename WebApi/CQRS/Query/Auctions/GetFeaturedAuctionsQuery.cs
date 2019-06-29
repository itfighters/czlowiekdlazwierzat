using CQRS.QueryData;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.Query.Auctions
{
    public class GetFeaturedAuctionsQuery : IRequest<IEnumerable<AuctionQueryData>>
    {
        public int Count { get; set; }
    }
}
