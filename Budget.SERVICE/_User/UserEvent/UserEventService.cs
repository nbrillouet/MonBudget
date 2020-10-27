using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Dto;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class UserEventService : IUserEventService
    {
        private readonly IUserAccountService _userAccountService;
        private readonly IUserRepository _userRepository;
        private readonly Lazy<IAccountStatementService> _accountStatementService;
        //private readonly  _accountStatementService;
        private readonly IMapper _mapper;
        //private readonly IServiceProvider _services;

        public UserEventService(
            IUserAccountService userAccountService,
            IUserRepository userRepository,
            Lazy<IAccountStatementService> accountStatementService,
            //IServiceProvider services,
            IMapper mapper
            )
        {
            _userAccountService = userAccountService;
            _userRepository = userRepository;
            _mapper = mapper;
            _accountStatementService = accountStatementService;
            //_services = services;

        }

        public List<UserEventDto> Get(UserForDetailDto userForDetail)
        {
            List<UserEventDto> userEvents = new List<UserEventDto>();
            List<UserEventDto> userEventRefs = JsonReader.Read<UserEventDto>("UserEvents");
            //Referentiel
            //information utilisateur: recherche si toutes les informations sont completes
            if (!UserHasCompleteInformation(userForDetail))
            {
                var userEvent = userEventRefs.Where(x => x.Section == EnumUserSection.UserInformation.ToString()).FirstOrDefault();
                userEvent.Link=userEvent.Link.Replace("{idUser}", userForDetail.Id.ToString());

                userEvents.Add(userEvent);
            }

            if(userForDetail.BankAgencies.Count()==0)
            {
                var userEvent = userEventRefs.Where(x => x.Section == EnumUserSection.AccountNoAccount.ToString()).FirstOrDefault();
                userEvents.Add(userEvent);
            }
            else
            {
                //controle des derniers relevés téléchargés
                foreach(var bankAgency in userForDetail.BankAgencies)
                {
                    foreach(var account in bankAgency.Accounts)
                    {
                        var accountStatement = _accountStatementService.Value.GetLastAccountStatement(account.Id);
                        var refUserEvent = Newtonsoft.Json.JsonConvert.SerializeObject(userEventRefs.Where(x => x.Section == EnumUserSection.AsLast.ToString()).FirstOrDefault());
                        //                            var sqlDataParameters = Newtonsoft.Json.JsonConvert.DeserializeObject<List<SqlDataParameter>>(json);
                        if (accountStatement.DateIntegration<=DateTime.Now.AddMonths(-1))
                        {
                            var userEvent =    Newtonsoft.Json.JsonConvert.DeserializeObject<UserEventDto>(refUserEvent);
                            //var userEvent = userEventRefs.Where(x => x.Section == EnumUserSection.AsLast.ToString()).FirstOrDefault();
                            userEvent.Content = userEvent.Content.Replace("{accountNumber}", accountStatement.Account.Label);
                            userEvent.Content = userEvent.Content.Replace("{dateImport}", accountStatement.DateIntegration.Value.ToShortDateString());
                            userEvents.Add(userEvent);
                        }
                    }
                }
            }

            var asIsolatedCount = _accountStatementService.Value.GetAsInternalTransferOrphan(userForDetail.IdUserGroup).Count;
            if (asIsolatedCount > 0)
            {
                var userEvent = userEventRefs.Where(x => x.Section == EnumUserSection.AsInternalTransferOrphan.ToString()).FirstOrDefault();
                userEvent.Content = userEvent.Content.Replace("{asIsolatedCount}", asIsolatedCount.ToString());

                userEvents.Add(userEvent);
            }

            return userEvents;
        }

        private bool UserHasCompleteInformation(UserForDetailDto userForDetail)
        {
            
            if (string.IsNullOrEmpty(userForDetail.FirstName))
                return false;
            if (string.IsNullOrEmpty(userForDetail.LastName))
                return false;
            if (string.IsNullOrEmpty(userForDetail.Gender))
                return false;
            if (!userForDetail.DateOfBirth.HasValue)
                return false;
            if (userForDetail.IdGMapAddress == 1)
                return false;

            return true;
        }
    }
}
