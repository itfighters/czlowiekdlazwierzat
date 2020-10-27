using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobsLibrary.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Serialization;
using Newtonsoft.Json;
using NotificationJobsLibrary.Models;

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

        public async Task<SendNotificationResult> SendAsync(string text, IEnumerable<string> numbers)
        {
            var builder = new StringBuilder(SendSmsUriBuilder.ToString());
            builder.Append($"&msg={text}");
            builder.Append("&to=");
            builder.AppendJoin("&to=", numbers);

            var result = await Client.GetAsync(builder.ToString());
            if (result.IsSuccessStatusCode)
            {
                using (var content = await result.Content.ReadAsStreamAsync())
                {
                    var serializer = new XmlSerializer(typeof(SMSServiceResponse));
                    var response = serializer.Deserialize(content) as SMSServiceResponse;
                    return new SendNotificationResult()
                    {
                        IsSuccessful = response?.Result == "OK",
                        LogMessage = response?.Result == "OK"
                            ? $"Sms notification {text} sent to {string.Join(",", numbers)}"
                            : $"Error during SMS send to {string.Join(",", numbers)}, error code: {response.ErrorCode}, error message: {response.ErrorMsg}"
                    };
                }
            }
            else
            {
                return new SendNotificationResult();
            }
        }

        [XmlRoot(ElementName = "response")]
        public class SMSServiceResponse
        {
            [XmlElement("result")]
            public string Result { get; set; }
            [XmlElement("errorMsg")]
            public string ErrorMsg { get; set; }
            [XmlElement("errorCode")]
            public string ErrorCode { get; set; }
        }
    }
}
