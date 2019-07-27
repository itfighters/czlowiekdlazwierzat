using System;
using System.Collections.Generic;
using System.Text;
using CQRS.QueryData;
using DAL.Model;

namespace CQRS.Mapper
{
    public class CategoryDetailsMapper
    {
        public static Func<Category, CategoryDetailsQueryData> FromCategoryToCategoryDetailsQueryData = (a) => new CategoryDetailsQueryData()
        {
            Id = a.Id,
            Name = a.Name
        };
    }
}
