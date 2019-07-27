using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Command.Categories;
using CQRS.Mapper;
using DAL;
using MediatR;

namespace CQRS.CommandHandler.Categories
{
    class AddCategoryCommandHandler : AsyncRequestHandler<AddCategoryCommand>
    {
        private readonly DatabaseContext dbContext;

        public AddCategoryCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected override async Task Handle(AddCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = CategoryMapper.FromAddCategoryToCategory(request);
            dbContext.Categories.Add(category);
            await dbContext.SaveChangesAsync();
        }
    }
}
