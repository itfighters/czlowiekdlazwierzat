using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace NotificationJobsLibrary
{
    public class MailSender : IMailSender
    {
        //private string _emailSender;
        //private string _emailSenderPassword;
        //private string _emailSenderHost;
        //private string _emailSenderPort;
        //Boolean emailIsSSL = true;
        private string _host = "smtp.gmail.com";
        private int _port = 587;
        private bool _enableSsl = true;
        private bool _useDefaultCredentials = false;
        private ICredentialsByHost _credentials = new NetworkCredential("czlowiekdlazwierzathackton@gmail.com", "Testowanie1");
        /// </summary>
        

        public MailSender()
        {

        }
        static bool mailSent = false;
        private static void SendCompletedCallback(object sender, AsyncCompletedEventArgs e)
        {
            // Get the unique identifier for this asynchronous operation.
            String token = (string)e.UserState;

            if (e.Cancelled)
            {
                Console.WriteLine("[{0}] Send canceled.", token);
            }
            if (e.Error != null)
            {
                Console.WriteLine("[{0}] {1}", token, e.Error.ToString());
            }
            else
            {
                Console.WriteLine("Message sent.");
            }
            mailSent = true;
        }
        public async Task<EmailResult> SendMessageAsync(MailMessage mail)
        {

            try
            {
                using (var smtpClient = new SmtpClient(){ Host = _host, Port = _port, EnableSsl=_enableSsl, UseDefaultCredentials=_useDefaultCredentials, Credentials= _credentials} )
                {
                    //smtpClient.Aut
                    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpClient.SendCompleted += new
            SendCompletedEventHandler(SendCompletedCallback);
                    await smtpClient.SendMailAsync(mail);
                    return EmailResult.Ok;
                }
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                return EmailResult.Fail;
              
            }

        }
        public EmailResult SendMessage(MailMessage mail)
        {

            try
            {
                using (var smtpClient = new SmtpClient() { Host = _host, Port = _port, EnableSsl = _enableSsl, UseDefaultCredentials = _useDefaultCredentials, Credentials = _credentials })
                {
                    smtpClient.Timeout = 10000;
                    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpClient.SendCompleted += new
            SendCompletedEventHandler(SendCompletedCallback);
                    smtpClient.Send(mail);
                    return EmailResult.Ok;
                }
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                return EmailResult.Fail;

            }

        }




    }
}