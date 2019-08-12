using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Command.Categories;
using CQRS.Mapper;
using DAL;
using DAL.Exceptions;
using DAL.Model;
using DAL.Services.Abstract;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CQRS.CommandHandler.Categories
{
    class UpdateCategoryCommandHandler : AsyncRequestHandler<UpdateCategoryCommand>
    {
        private readonly DatabaseContext dbContext;
        private readonly IImageUploadService imageUploadService;

        public UpdateCategoryCommandHandler(DatabaseContext dbContext, IImageUploadService imageUploadService)
        {
            this.dbContext = dbContext;
            this.imageUploadService = imageUploadService;
        }

        protected override async Task Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
        {
            var categoryToUpdate = dbContext.Categories
                .FirstOrDefault(a => a.Id == request.Id);

            if (categoryToUpdate == null)
                throw new BusinessLogicException($"Category {request.Id} doesn't exist");

            categoryToUpdate.Name = request.Name;

            if(request.Cover != null)
            {
                categoryToUpdate.Image = await imageUploadService.UploadImage(request.Cover);
            }


            await dbContext.SaveChangesAsync();
        }
    }
}
