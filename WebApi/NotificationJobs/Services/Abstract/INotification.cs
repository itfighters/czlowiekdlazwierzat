using System.Collections.Generic;
using System.Threading.Tasks;
using DAL.Model;
using NotificationJobsLibrary.Models;

namespace NotificationJobs.Services.Abstract
{
    public interface INotification
    {
        Task<SendNotificationResult> SendMultiplesAsync(IEnumerable<string> contacts, DAL.Model.Auction auction);
        Task<SendNotificationResult> SendSingleAsync(string contact, DAL.Model.Auction auction);

    }
}
