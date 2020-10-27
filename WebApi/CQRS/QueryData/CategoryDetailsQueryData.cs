using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.QueryData
{
    public class CategoryDetailsQueryData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CurrentImage { get; set; }
    }
}
