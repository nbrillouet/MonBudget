using AutoMapper;
using Budget.API.Dtos;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            //CreateMap<User, UserForListDto>()
            //    //trouver l'age a partir de la date de naissance
            //    .ForMember(dest => dest.Age, opt =>
            //     {
            //         opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
            //     });


            //CreateMap<User, UserForDetailedDto>()
            //    //trouver l'age a partir de la date de naissance
            //    .ForMember(dest => dest.Age, opt =>
            //    {
            //        opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
            //    })
            //    .ForMember(d => d.Accounts, o => o.MapFrom(s => s.UserAccounts.Select(ua => ua.Account).ToList()));

            //CreateMap<UserForAvatarCreationDto, User>();
            //CreateMap<Shortcut,ShortcutDto>();
            //CreateMap<ShortcutDto, Shortcut>();
            
            CreateMap<AccountStatementImport, AccountStatementImportForListDto>();

            CreateMap<AccountStatementImportFile, AsifGridDto>();

            CreateMap<Account, AccountDto>();
            
            

            CreateMap<Bank, BankForListDto>();
           
  

            //CreateMap<Pagination, FilterAccountStatementImportFile>();
            //CreateMap<Pagination, FilterAccountStatementImport>();

            //CreateMap<AccountStatementImportFile, AsifForListDto>();


            CreateMap<Operation, SelectDto>();
            CreateMap<OperationMethod, SelectDto>();
            CreateMap<OperationType, SelectDto>();
            CreateMap<OperationTypeFamily, SelectDto>();
           

        }
    }
}
