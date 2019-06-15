using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace NotificationJobsLibrary
{
    public class PlaySMSHelper : IPlaySMSHelper
    {
        private const string ClientUrl = "https://api.playsms.pl/send";
        private const string Key = "8ad16723-2b9f-4b41-97cb-3aae72417bed";
        private const string Password = "Hackathon2019";
        private const string From = "TEST";

        private HttpClient Client { get; }
        private UriBuilder UriBuilder { get; }

        public PlaySMSHelper()
        {
            Client = new HttpClient();
            UriBuilder = new UriBuilder(ClientUrl);
            var query = HttpUtility.ParseQueryString(string.Empty);
            query["key"] = Key;
            query["password"] = Password;
            query["from"] = From;
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
