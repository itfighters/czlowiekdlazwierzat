using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure
{
    public class SMSConfig
    {
        public string ApiUrl { get; set; }
        public string ApiKey { get; set; }
        public string ApiPassword { get; set; }
        public string From { get; set; }
    }
}
