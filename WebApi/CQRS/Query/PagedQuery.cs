using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.Query
{
    public class PagedQuery
    {
        public int Page { get; set;}
        public int PageSize { get; set; }
    }
}
