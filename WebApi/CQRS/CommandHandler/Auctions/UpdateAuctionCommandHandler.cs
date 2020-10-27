using CQRS.Command.Auctions;
using CQRS.Mapper;
using DAL;
using DAL.Exceptions;
using DAL.Model;
using DAL.Services.Abstract;
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
        private readonly IImageUploadService imageUploadService;

        public UpdaterequestCommandHandler(DatabaseContext dbContext, IImageUploadService imageUploadService)
        {
            this.dbContext = dbContext;
            this.imageUploadService = imageUploadService;
        }
        protected override async Task Handle(UpdateAuctionCommand request, CancellationToken cancellationToken)
        {
            var auctionToUpdate = dbContext.Auctions
                .Include(x => x.Categories)
                .FirstOrDefault(a => a.Id == request.Id);

            if (auctionToUpdate == null)
                throw new BusinessLogicException($"Auction {request.Id} doesn't exist");

            auctionToUpdate = AuctionMapper.FromAuctionCommandToAuction(request, auctionToUpdate);

            if (request.Cover != null)
            {
                auctionToUpdate.Image = await imageUploadService.UploadImage(request.Cover);
            }

            auctionToUpdate.Title = request.Title;
            auctionToUpdate.ShortDescription = request.ShortDescription;
            auctionToUpdate.Description = request.Description;
            auctionToUpdate.Dotpay = request.Dotpay;
            auctionToUpdate.SiepomagaLink = request.SiepomagaLink == "null" ? null : request.SiepomagaLink;
            auctionToUpdate.Paypall = request.Paypall;
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
