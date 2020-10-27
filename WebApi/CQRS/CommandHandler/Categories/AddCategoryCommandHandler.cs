using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Command.Categories;
using CQRS.Mapper;
using DAL;
using DAL.Services.Abstract;
using MediatR;

namespace CQRS.CommandHandler.Categories
{
    class AddCategoryCommandHandler : AsyncRequestHandler<AddCategoryCommand>
    {
        private readonly DatabaseContext dbContext;
        private readonly IImageUploadService imageUploadService;

        public AddCategoryCommandHandler(DatabaseContext dbContext, IImageUploadService imageUploadService)
        {
            this.dbContext = dbContext;
            this.imageUploadService = imageUploadService;
        }

        protected override async Task Handle(AddCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = CategoryMapper.FromAddCategoryToCategory(request);
            category.Image = await imageUploadService.UploadImage(request.Cover);
            dbContext.Categories.Add(category);
            await dbContext.SaveChangesAsync();
        }
    }
}
