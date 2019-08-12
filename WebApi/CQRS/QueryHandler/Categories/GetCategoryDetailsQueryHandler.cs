using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Mapper;
using CQRS.Query.Categories;
using CQRS.QueryData;
using DAL;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CQRS.QueryHandler.Categories
{
    public class GetCategoryDetailsQueryHandler : IRequestHandler<GetCategoryDetailsQuery, CategoryDetailsQueryData>
    {
        private readonly DatabaseContext dbContext;

        public GetCategoryDetailsQueryHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }
        
        public async Task<CategoryDetailsQueryData> Handle(GetCategoryDetailsQuery request, CancellationToken cancellationToken)
        {

            var category = await dbContext.Categories
                .FirstOrDefaultAsync(cat => cat.Id == request.Id);

            return CategoryMapper.FromCategoryToCategoryDetailsQueryData(category);
        }

    }
}
