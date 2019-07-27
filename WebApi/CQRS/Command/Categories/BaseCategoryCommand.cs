using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.Command.Categories
{
    public abstract class BaseCategoryCommand
    {
        public string Name { get; set; }
        public string Image { get; set; }
    }
}
