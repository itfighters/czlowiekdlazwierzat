using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL.Model;
using DTO.ResponseViewModel;

namespace DTO.Mapper
{
    public class CategoryMapper
    {
        public static CategoryResponse ToCategoryResponse(Category category) =>
            new CategoryResponse
            {
                Id = category.Id,
                Name = category.Name
            };

        public static ListCategoryResponse ToListCategoryResponse(IEnumerable<Category> categories) =>
            new ListCategoryResponse
            {
                Values = categories.Select(ToCategoryResponse).ToList()
            };
    }
}
