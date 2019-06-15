using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL.Model;
using DAL.Repositories.Abstract;

namespace DAL.Repositories.Concrete
{
    public class CategoriesRepository : ICategoriesRepository
    {
        private readonly DatabaseContext dbContext;

        public CategoriesRepository(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IEnumerable<Category> GetCategories()
        {
            return dbContext.Categories.ToList();
        }

        public Category GetCategory(int id)
        {
            return dbContext.Categories.FirstOrDefault(x => x.Id == id);
        }
    }
}
