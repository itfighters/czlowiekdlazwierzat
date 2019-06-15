using NotificationJobsLibrary;
using System;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            MailSender mailSender = new MailSender();
            var mailMassageCreator = new MailMassageCreator();
            var mailMessage = mailMassageCreator.GenerateMessage();
            var result = mailSender.SendMessage(mailMessage);
           
            //result.Wait();
            Console.WriteLine(result);
            Console.ReadKey();

        }
        static async Task<EmailResult> SendMessage()
        {
            IMailSender mailSender = new MailSender();
            var mailMassageCreator = new MailMassageCreator();
            var mailMessage = mailMassageCreator.GenerateMessage();
            return await Task.FromResult(await mailSender.SendMessageAsync(mailMessage));
        }
    }
}
