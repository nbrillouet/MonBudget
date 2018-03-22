using AutoMapper;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
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
            //    });

            //CreateMap<UserForAvatarCreationDto, User>();
            //CreateMap<Shortcut,ShortcutDto>();
            //CreateMap<ShortcutDto, Shortcut>();


            //CreateMap<AccountStatementImport, AccountStatementImportForListDto>();
            //CreateMap<Bank, BankForListDto>();

            //CreateMap<Pagination, FilterAccountStatementImport>();

            CreateMap<AccountStatementImportFile, AsifForListDto>();


        }
    }
}
