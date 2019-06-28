using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Templates
{
    public static class SMSTemplate
    {
        public static string Template(string token) => $"Wprowadź token, aby potwierdzic operacje: {token}";
    }
}
