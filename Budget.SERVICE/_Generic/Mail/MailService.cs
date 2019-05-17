using Budget.MODEL.Database._Generic;
using System;
using System.Collections.Generic;
using System.Text;
using EASendMail;
using System.Net.Mail;
using SmtpClient = System.Net.Mail.SmtpClient;
using System.Net;

namespace Budget.SERVICE
{

    public class MailService : IMailService
    {
        public bool SendMailTest()
        {
            var mailBox = new MailBox
            {
                From = "nico_brillouet@hotmail.com",
                To = "kill_me_again_77@hotmail.com",
                Subject = "Test envoi mail",
                Body = "Test reussi!"
            };

            return SendMail(mailBox);
        }

        public bool SendMail(MailBox mailBox)
        {
            //SmtpMail oMail = new SmtpMail("TryIt");
            //SmtpClient oSmtp = new SmtpClient();

            //// Your Hotmail email address
            //oMail.From = mailBox.From;// "liveid@hotmail.com";

            //// Set recipient email address
            //oMail.To = mailBox.To; // "support@emailarchitect.net";

            //// Set email subject
            //oMail.Subject = mailBox.Subject; // "test email from hotmail account";

            //// Set email body
            //oMail.TextBody = mailBox.Body; // "this is a test email sent from c# project with hotmail.";
            //// Hotmail SMTP server address
            //SmtpServer oServer = new SmtpServer("smtp.live.com");

            //// Hotmail user authentication should use your
            //// email address as the user name.
            //oServer.User = "nico_brillouet@hotmail.com";
            //oServer.Password = "pass";

            //// Set 587 port, if you want to use 25 port, please change 587 to 25
            //oServer.Port =25;

            //// detect SSL/TLS connection automatically
            //oServer.ConnectType = SmtpConnectType.ConnectSSLAuto;

            //try
            //{
            //    Console.WriteLine("start to send email over SSL...");
            //    oSmtp.SendMail(oServer, oMail);
            //    Console.WriteLine("email was sent successfully!");
            //    return true;
            //}
            //catch (Exception ep)
            //{
            //    Console.WriteLine("failed to send email with the following error:");
            //    Console.WriteLine(ep.Message);
            //    return false;
            //}

            try
            {
                MailMessage mail = new MailMessage();
                mail.From = new System.Net.Mail.MailAddress("nico_brillouet@hotmail.com");
                mail.To.Add("kill_me_again_77@hotmail.com");
                mail.Subject = "subject";
                mail.Body = "Body";
                mail.IsBodyHtml = false;
                SmtpClient smtp = new SmtpClient("smtp.live.com", 587);
                smtp.EnableSsl = true;
                smtp.Credentials = new NetworkCredential("nico_brillouet@hotmail.com", "pass");
                smtp.Send(mail);
            }
            catch (Exception ep)
            {
                Console.WriteLine(ep.Message);

            }
            return true;
        }
    }
}
