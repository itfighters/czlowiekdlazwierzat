using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobsLibrary.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace NotificationJobsLibrary.Services.Concrete
{
    public class SMSService : ISMSService
    {
        private readonly IOptions<SMSConfig> options;
        private HttpClient Client { get; }
        private UriBuilder SendSmsUriBuilder { get; }
        private UriBuilder GetBalanceUriBuilder { get; }


        public SMSService(IOptions<SMSConfig> options)
        {
            this.options = options;
            Client = new HttpClient();
            SendSmsUriBuilder = new UriBuilder(options.Value.SmsSendUrl);
            var query = HttpUtility.ParseQueryString(string.Empty);
            query["key"] = options.Value.ApiKey;
            query["password"] = options.Value.ApiPassword;
            query["from"] = options.Value.From;
            SendSmsUriBuilder.Query = query.ToString();
            GetBalanceUriBuilder = new UriBuilder(options.Value.GetBalanceUrl);
            query = HttpUtility.ParseQueryString(string.Empty);
            query["key"] = options.Value.ApiKey;
            query["password"] = options.Value.ApiPassword;
            query["product"] = "SMS";
            GetBalanceUriBuilder.Query = query.ToString();
        }

        public async Task<bool> SendAsync(string text, IEnumerable<string> numbers)
        {
            var builder = new StringBuilder(SendSmsUriBuilder.ToString());
            builder.Append($"&msg={text}");
            builder.Append("&to=");
            builder.AppendJoin("&to=", numbers);

            var result = await Client.GetAsync(builder.ToString());

            //dodać logowanie
            return result.IsSuccessStatusCode;
        }

        private async Task<int> GetBalance()
        {
            var builder = new StringBuilder(GetBalanceUriBuilder.ToString());
            var result = await Client.PostAsync(builder.ToString(), null);
            if (result.IsSuccessStatusCode)
            {
                return 1;
            }

            return 0;
        }
    }
}
