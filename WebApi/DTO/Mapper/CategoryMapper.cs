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
        public static CategoryResponse ToCategoryResponse(Category category)
        {
            if (category == null)
                return null;

            var response = new CategoryResponse {Id = category.Id, Name = category.Name};
            return response;
        }

        public static ListCategoryResponse ToListCategoryResponse(IEnumerable<Category> categories)
        {
            if (categories == null)
                return null;

            return new ListCategoryResponse
            {
                Values = categories.Select(ToCategoryResponse).ToList()
            };
        }
    }
}
