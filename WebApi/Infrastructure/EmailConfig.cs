﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure
{
    public class EmailConfig
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string From { get; set; }
    }
}
