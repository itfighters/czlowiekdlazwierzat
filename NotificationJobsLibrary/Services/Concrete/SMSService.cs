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
        private UriBuilder UriBuilder { get; }

        public SMSService(IOptions<SMSConfig> options)
        {
            this.options = options;
            Client = new HttpClient();
            UriBuilder = new UriBuilder(options.Value.ApiUrl);
            var query = HttpUtility.ParseQueryString(string.Empty);
            query["key"] = options.Value.ApiKey;
            query["password"] = options.Value.ApiPassword;
            query["from"] = options.Value.From;
            UriBuilder.Query = query.ToString();
        }

        public async Task<bool> SendAsync(string text, IEnumerable<string> numbers)
        {
            var builder = new StringBuilder(UriBuilder.ToString());
            builder.Append($"&msg={text}");
            builder.Append("&to=");
            builder.AppendJoin("&to=", numbers);

            var result = await Client.GetAsync(builder.ToString());

            //dodać logowanie
            return result.IsSuccessStatusCode;
        }
    }
}
