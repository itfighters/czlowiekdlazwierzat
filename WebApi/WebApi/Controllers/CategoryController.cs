using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Repositories.Abstract;
using DTO.Mapper;
using DTO.ResponseViewModel;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController
    {
        private readonly ICategoriesRepository repository;

        public CategoryController(ICategoriesRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ListCategoryResponse Get()
        {
            return CategoryMapper.ToListCategoryResponse(repository.GetCategories());
        }

        [HttpGet("{id}")]
        public CategoryResponse Get(int id)
        {
            return CategoryMapper.ToCategoryResponse(repository.GetCategory(id));
        }
    }
}
