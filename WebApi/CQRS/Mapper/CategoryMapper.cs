﻿using System;
using System.Collections.Generic;
using System.Text;
using CQRS.Command.Categories;
using CQRS.QueryData;
using DAL.Model;

namespace CQRS.Mapper
{
    public class CategoryMapper
    {
        public static Func<Category, CategoryDetailsQueryData> FromCategoryToCategoryDetailsQueryData = (a) => new CategoryDetailsQueryData()
        {
            Id = a.Id,
            Name = a.Name,
            CurrentImage = a.Image
        };

        public static Func<AddCategoryCommand, Category> FromAddCategoryToCategory = (c) => new Category()
        {
            Name = c.Name
        };

        public static Func<UpdateCategoryCommand, Category> FromUpdateCategoryToCategory = (c) => new Category()
        {
            Name = c.Name
        };
    }
}
