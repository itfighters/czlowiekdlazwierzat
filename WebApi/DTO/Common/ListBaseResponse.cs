using System;
using System.Collections.Generic;
using System.Text;

namespace DTO.Common
{
    public class ListBaseResponse<T> where T: class
    {
        public IEnumerable<T> Values { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}
