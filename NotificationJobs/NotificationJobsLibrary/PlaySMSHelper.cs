using NotificationJobsLibrary.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace NotificationJobsLibrary
{
    public class PlaySmsHelper : IPlaySmsHelper
    {
        private HttpClient Client { get; }
        private UriBuilder UriBuilder { get; }

        public PlaySmsHelper()
        {
            var config = new SmsConfig();
            Client = new HttpClient();
            UriBuilder = new UriBuilder(config.ApiUrl);
            var query = HttpUtility.ParseQueryString(string.Empty);
            query["key"] = config.ApiKey;
            query["password"] = config.ApiPassword;
            query["from"] = config.From;
            UriBuilder.Query = query.ToString();
        }

        public async Task<bool> SendAsync(string text, IEnumerable<string> numbers)
        {
            var builder = new StringBuilder(UriBuilder.ToString());
            builder.Append($"&msg={text}");
            builder.Append("&to=");
            builder.AppendJoin("&to=", numbers);

            var result = await Client.GetAsync(builder.ToString());
            return result.IsSuccessStatusCode;
        }
    }
}
