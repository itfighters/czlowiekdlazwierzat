using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace NotificationJobsLibrary
{
    public class PlaySMSHelper : IPlaySMSHelper

    {

        public HttpClient Client { get; }

        private const string clientURL = "https:/api.playsms.pl/send?";
        private const string key = "8ad16723-2b9f-4b41-97cb-3aae72417bed";
        private const string password = "Hackathon2019";
        private const string from = "FUNDACJA";


        public PlaySMSHelper()
        {
            Client = new HttpClient();
            Client.BaseAddress = new Uri(clientURL);

        }


        public async Task SendAsync(string text, string number)
        {
            UriBuilder builder = new UriBuilder(clientURL);
            var query = HttpUtility.ParseQueryString(builder.Query);
            query["key"] = key;
            query["password"] = password;
            query["from"] = from;
            query["to"] = number;
            query["msg"] = text;
            builder.Query = query.ToString();
            string url = builder.ToString();

            var result = await Client.GetAsync(url);
        }
    }
}
