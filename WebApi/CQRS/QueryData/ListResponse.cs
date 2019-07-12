using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.QueryData
{
    public class ListResponse<T>
    {
        public IEnumerable<T> Values { get; set; }
        public int TotalCount { get; set; }
    }
}
