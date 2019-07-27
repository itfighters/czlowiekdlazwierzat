using CQRS.QueryData;
using MediatR;

namespace CQRS.Query.Categories
{
    public class GetCategoryDetailsQuery : IRequest<CategoryDetailsQueryData>
    {
        public int Id { get; set; }
    }
}
