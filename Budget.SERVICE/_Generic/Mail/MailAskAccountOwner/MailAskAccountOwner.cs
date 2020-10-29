﻿using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Budget.SERVICE
{

    public class MailAskAccountOwnerService : IMailAskAccountOwnerService
    {
        private readonly IMailService _mailService;

        public MailAskAccountOwnerService(
            IMailService mailService
            )
        {
            _mailService = mailService;
        }

        public void SendAskAccountOwnerMail(User userCaller, User userOwner, string accountNumber)
        {
            //string encryptId = HELPER.CryptoHelper.Encrypt(user.Id.ToString());
            //string linkpath = $"http://localhost:4200/pages/auth/reset-password/{encryptId}";

            //var file = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "datas", "mailAskAccountOwner.htm");
            //string htmlPart = File.ReadAllText(file);

            //htmlPart = htmlPart.Replace("[RECOVERY_PASSWORD_LINK]", linkpath);

            //_mailService.SendEmailAsync(user.MailAddress, user.UserName, "Réinitialisation mot de passe", htmlPart);
        }
    }
    
}