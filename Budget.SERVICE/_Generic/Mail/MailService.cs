using System;
using System.Collections.Generic;
using System.Text;

using System.Net.Mail;
using System.Net;
using MailKit.Security;
using MimeKit;

namespace Budget.SERVICE
{

    public class MailService :IMailService
    {
        //public async void SendMailTest()
        //{
        //    var mailBox = new MailBox
        //    {
        //        From = "nico_brillouet@hotmail.com",
        //        To = "kill_me_again_77@hotmail.com",
        //        Subject = "Test envoi mail",
        //        Body = "Test reussi!"
        //    };

        //    //return await SendMailAsync(mailBox);
        //}

        public void SendMailAsync()
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

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Nico", "joey@friends.com"));
            message.To.Add(new MailboxAddress("N1", "kill_me_again_77@hotmail.com"));
            message.Subject = "How you doin?";
            message.Body = new TextPart("plain")
            {
                Text = @"Hey Alice,

What are you up to this weekend? Monica is throwing one of her parties on
Saturday and I was hoping you could make it.

Will you be my +1?

-- Joey
"
            };

            try
            {
                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {
                    //587
                    //Have tried both false and true    
                    client.Connect("smtp-mail.outlook.com", 465, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate("nico_brillouet@hotmail.com", "Nbr9a3xit4m?");
                    client.Send(message);
                    client.Disconnect(true);
                }


                //using (var smtp = new MailKit.Net.Smtp.SmtpClient())
                //{
                //    smtp.MessageSent += (sender, args) =>{  };
                //        smtp.ServerCertificateValidationCallback = (s, c, h, e) => true;

                //        smtp.Connect("smtp-mail.outlook.com", 587, SecureSocketOptions.StartTls);
                //        smtp.Authenticate("nico_brillouet@hotmail.com", "Nbr9a3xit4m?");
                //        smtp.Send(message);
                //        smtp.Disconnect(true);

                //}

            }
            catch (Exception ep)
            {
                Console.WriteLine(ep.Message);

            };


            //try
            //{
            //    MailMessage mail = new MailMessage();
            //    mail.From = new System.Net.Mail.MailAddress("nico_brillouet@hotmail.com");
            //    mail.To.Add("kill_me_again_77@hotmail.com");
            //    mail.Subject = "subject";
            //    mail.Body = "Body";
            //    mail.IsBodyHtml = false;
            //    SmtpClient smtp = new SmtpClient("smtp.live.com", 587);
            //    smtp.EnableSsl = true;
            //    smtp.Credentials = new NetworkCredential("nico_brillouet@hotmail.com", "pass");
            //    smtp.Send(mail);
            //}
            //catch (Exception ep)
            //{
            //    Console.WriteLine(ep.Message);

            //}

        }
    }
}
