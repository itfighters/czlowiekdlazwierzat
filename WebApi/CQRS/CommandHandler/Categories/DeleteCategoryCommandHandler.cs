using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Command.Auctions;
using CQRS.Command.Categories;
using DAL;
using DAL.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CQRS.CommandHandler.Categories
{
    public class DeleteCategoryCommandHandler : AsyncRequestHandler<DeleteCategoryCommand>
    {
        private readonly DatabaseContext dbContext;

        public DeleteCategoryCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected override async Task Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await dbContext.Categories.FirstOrDefaultAsync(x => x.Id == request.Id);

            if (category == null)
                throw new BusinessLogicException("Category doesn't exist");

            category.IsDeleted = true;
            await dbContext.SaveChangesAsync();
        }
    }
}
