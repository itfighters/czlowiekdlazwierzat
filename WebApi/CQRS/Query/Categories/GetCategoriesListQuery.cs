using CQRS.QueryData;
using MediatR;
using System.Collections.Generic;

namespace CQRS.Query.Categories
{
    public class GetCategoriesListQuery : IRequest<IEnumerable<CategoryQueryData>>
    {
    }
}
