using CQRS.Query.Categories;
using CQRS.QueryData;
using DAL;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.QueryHandler.Categories
{
    public class GetCategoriesListQueryHandler : IRequestHandler<GetCategoriesListQuery, IEnumerable<CategoryQueryData>>
    {
        private readonly DatabaseContext dbContext;

        public GetCategoriesListQueryHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<CategoryQueryData>> Handle(GetCategoriesListQuery request, CancellationToken cancellationToken)=>
            await dbContext.Categories.Where(x=>!x.IsDeleted).Include(x=>x.Image)
            .Select(x=>new CategoryQueryData {
                Id = x.Id,
                Name = x.Name,
                Image = x.Image
            })
            .ToListAsync();
    }
}
