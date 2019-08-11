using CQRS.Command.Auctions;
using CQRS.Mapper;
using DAL;
using DAL.Services.Abstract;
using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.CommandHandler
{
    public class AddAuctionCommandHandler : AsyncRequestHandler<AddAuctionCommand>
    {
        private readonly DatabaseContext dbContext;
        private readonly IImageUploadService imageUploadService;

        public AddAuctionCommandHandler(DatabaseContext dbContext, IImageUploadService imageUploadService)
        {
            this.dbContext = dbContext;
            this.imageUploadService = imageUploadService;
        }

        protected override async Task Handle(AddAuctionCommand request, CancellationToken cancellationToken)
        {
            var imageId = await imageUploadService.UploadImage(request.Cover);
            var auction = AuctionMapper.FromAuctionCommandToAuction(request, null);
                auction.Image = imageId;
            dbContext.Auctions.Add(auction);
            await dbContext.SaveChangesAsync();
        }

       
    }
}
