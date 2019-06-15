using System.Collections.Generic;
using DAL.Model;

namespace DAL.Repositories.Abstract
{
    public interface ICategoriesRepository
    {
        IEnumerable<Category> GetCategories();

        Category GetCategory(int id);
    }
}