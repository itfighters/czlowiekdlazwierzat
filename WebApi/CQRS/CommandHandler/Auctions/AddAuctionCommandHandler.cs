using CQRS.Command.Auctions;
using CQRS.Mapper;
using DAL;
using DAL.Model;
using MediatR;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.CommandHandler
{
    public class AddAuctionCommandHandler : AsyncRequestHandler<AddAuctionCommand>
    {
        private readonly DatabaseContext dbContext;

        public AddAuctionCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected override async Task Handle(AddAuctionCommand request, CancellationToken cancellationToken)
        {
            var auction = AuctionMapper.FromAuctionCommandToAuction(request,null);
            dbContext.Auctions.Add(auction);
            await dbContext.SaveChangesAsync();
        }
    }
}
