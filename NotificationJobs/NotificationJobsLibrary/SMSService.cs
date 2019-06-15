using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace NotificationJobsLibrary;
{
    public class SMSService
    {
        public HttpClient Client { get; }

        public SMSService(HttpClient client)
        {
            client.BaseAddress = new Uri("https://api.playsms.pl/");
            Client = client;
        }

        public async Task<IEnumerable<SMSIssue>> GetAspNetDocsIssues()
        {
            var response = await Client.GetAsync(
                "send?key=8ad16723-2b9f-4b41-97cb-3aae72417bed&password=Hackathon2019&from=Informacja&to=601357570&to=60060\r\n1602&msg=WiadomoúÊ testowa");

            response.EnsureSuccessStatusCode();

            var result = await response.Content
                .ReadAsAsync<IEnumerable<SMSIssue>>();

            return result;
        }
    }

}
