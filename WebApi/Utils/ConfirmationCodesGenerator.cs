using System;
using Utils.Abstract;

namespace Utils
{
    public class ConfirmationCodesGenerator : IConfirmationCodesGenerator
    {
        public string GenerateCode()
        {
            Random rnd = new Random();
            int numb = rnd.Next(10000, 99000);
            return numb.ToString();
        }
    }
}
