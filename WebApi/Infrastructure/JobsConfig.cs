﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure
{
    public class JobsConfig
    {
        public string ServiceShortUrl { get; set; }
        public int SleepPeriod { get; set; }
        public int PackageSize { get; set; }
        public string ServiceFullUrl { get; set; }
        //public SmsNotificationsConfig SmsNotificationsConfig { get; set; }
    }

    public class PushConfig
    {
        public string ServiceKey { get; set; }
    }

    public class SmsNotificationsConfig
    {
        public int SleepPeriod { get; set; }
        public int PackageSize { get; set; }
    }
}
