using CQRS.Command.Auctions;
using CQRS.Mapper;
using DAL;
using DAL.Exceptions;
using DAL.Model;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.CommandHandler
{
    public class UpdaterequestCommandHandler : AsyncRequestHandler<UpdateAuctionCommand>
    {
        private readonly DatabaseContext dbContext;

        public UpdaterequestCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }
        protected override async Task Handle(UpdateAuctionCommand request, CancellationToken cancellationToken)
        {
            var auctionToUpdate = dbContext.Auctions
                .Include(x => x.Categories)
                .FirstOrDefault(a => a.Id == request.Id);

            if (auctionToUpdate==null)
                throw new BusinessLogicException($"Auction {request.Id} doesn't exist");

            auctionToUpdate = AuctionMapper.FromAuctionCommandToAuction(request, auctionToUpdate);

            auctionToUpdate.Title = request.Title;
            auctionToUpdate.Description = request.Description;
            auctionToUpdate.DotpayLink = request.DotpayLink;
            auctionToUpdate.SiepomagaLink = request.SiepomagaLink;
            auctionToUpdate.PaypalLink = request.PaypalLink;
            auctionToUpdate.Image = request.Image;
            auctionToUpdate.Categories = request.Categories?.Select(x => new AuctionCategory() { CategoryId = x }).ToList();
            auctionToUpdate.Account = request.Account;
            auctionToUpdate.DateFrom = request.DateFrom ?? DateTime.Now;
            auctionToUpdate.DateTo = request.DateTo ?? DateTime.Now.AddYears(100);
            auctionToUpdate.AddressFrom = request.AddressTo;
            auctionToUpdate.ContactNumber = request.ContactNumber;

            await dbContext.SaveChangesAsync();
        }
    }
}
