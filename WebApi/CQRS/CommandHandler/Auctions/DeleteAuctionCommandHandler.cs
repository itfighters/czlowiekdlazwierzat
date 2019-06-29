using CQRS.Command.Auctions;
using DAL;
using DAL.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.CommandHandler.Auctions
{
    public class DeleteAuctionCommandHandler : AsyncRequestHandler<DeleteAuctionCommand>
    {
        private readonly DatabaseContext dbContext;

        public DeleteAuctionCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected override async Task Handle(DeleteAuctionCommand request, CancellationToken cancellationToken)
        {
            var auction = await dbContext.Auctions.FirstOrDefaultAsync(x => x.Id == request.Id);

            if (auction == null)
                throw new BusinessLogicException("Auction doesn't exist");

            auction.IsDeleted = true;
            await dbContext.SaveChangesAsync();
        }
    }
}
