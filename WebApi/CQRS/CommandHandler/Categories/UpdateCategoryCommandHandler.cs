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
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CQRS.CommandHandler.Categories
{
    class UpdateCategoryCommandHandler : AsyncRequestHandler<UpdateCategoryCommand>
    {
        private readonly DatabaseContext dbContext;

        public UpdateCategoryCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected override async Task Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
        {
            var categoryToUpdate = dbContext.Categories.Include(x => x.Image)
                .FirstOrDefault(a => a.Id == request.Id);

            if (categoryToUpdate == null)
                throw new BusinessLogicException($"Category {request.Id} doesn't exist");

            categoryToUpdate.Name = request.Name;

            if (categoryToUpdate.Image == null && !String.IsNullOrWhiteSpace(request.Image))
            {
                categoryToUpdate.Image = new Image() { Source = request.Image };
            }
            else if (categoryToUpdate.Image != null)
            {
                categoryToUpdate.Image.Source = request.Image;
            }

            await dbContext.SaveChangesAsync();
        }
    }
}
