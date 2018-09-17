using AutoMapper;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.SERVICE._Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserForListDto>()
                //trouver l'age a partir de la date de naissance
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });


            CreateMap<User, UserForDetailDto>()
                //trouver l'age a partir de la date de naissance
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                })
                .ForMember(d => d.Accounts, o => o.MapFrom(s => s.UserAccounts.Select(ua => ua.Account).ToList()));

            CreateMap<UserForDetailDto, User>()
                .ForMember(d => d.PasswordHash, o => o.Ignore())
                .ForMember(d => d.PasswordSalt, o => o.Ignore())
                .ForMember(d => d.GMapAddress, o => o.Ignore())
                .ForMember(d => d.UserAccounts, o => o.Ignore());

            CreateMap<UserForAvatarCreationDto, User>();
            CreateMap<Shortcut, UserShortcutDto>();
            CreateMap<UserShortcutDto, Shortcut>();

            CreateMap<Account, AccountForLabelDto>();
            CreateMap<Bank, BankAccountsDto>();

            CreateMap<AccountStatement, AsGridDto>()
                .ForMember(d => d.OperationTypeFamily, o => o.MapFrom(s => s.OperationType.OperationTypeFamily));

            CreateMap<OperationMethod, SelectDto>();
            CreateMap<Operation, SelectDto>();
            CreateMap<OperationTypeFamily, SelectDto>();

            //CreateMap<OperationPlace, SelectDto>()
            //   .ForMember(dest => dest.Label, opt => opt.MapFrom(source => source.Department !=null ? source.Department + "-" + source.City : source.City));

            CreateMap<AccountStatementImportFile, AccountStatement>()
                .ForMember(dest => dest.Id, opt => opt.Ignore());

            CreateMap<AccountStatementImportFile, AsifDetailDto>()
                .ForMember(dest => dest.LogoName, opt => opt.MapFrom(source => source.OperationTypeFamily.LogoClassName));

            CreateMap<AccountStatement, AsDetailDto>()
                .ForMember(dest => dest.LogoName, opt => opt.MapFrom(source => source.OperationType.OperationTypeFamily.LogoClassName))
                .ForMember(d => d.OperationTypeFamily, o => o.MapFrom(s => s.OperationType.OperationTypeFamily));
            
            //Filter
            CreateMap<Pagination, FilterAccountStatement>();

            //GMap
            CreateMap<GMapAddress, GMapAddressDto>();
            CreateMap<GMapAdministrativeAreaLevel1, SelectDto>();
            CreateMap<GMapAdministrativeAreaLevel2, SelectDto>();
            CreateMap<GMapCountry, SelectDto>();
            CreateMap<GMapLocality, SelectDto>();
            CreateMap<GMapNeighborhood, SelectDto>();
            CreateMap<GMapPostalCode, SelectDto>();
            CreateMap<GMapRoute, SelectDto>();
            CreateMap<GMapStreetNumber, SelectDto>();
            CreateMap<GMapSublocalityLevel1, SelectDto>();
            CreateMap<GMapSublocalityLevel2, SelectDto>();
            CreateMap<GMapType, SelectDto>();

            CreateMap<GMapAddressDto, GMapAddress>()
                .ForMember(d => d.idGMapAdministrativeAreaLevel1, o => o.MapFrom(s => s.gMapAdministrativeAreaLevel1.Id))
                .ForMember(d => d.idGMapAdministrativeAreaLevel2, o => o.MapFrom(s => s.gMapAdministrativeAreaLevel2.Id))
                .ForMember(d => d.idGMapCountry, o => o.MapFrom(s => s.gMapCountry.Id))
                .ForMember(d => d.idGMapLocality, o => o.MapFrom(s => s.gMapLocality.Id))
                .ForMember(d => d.idGMapNeighborhood, o => o.MapFrom(s => s.gMapNeighborhood.Id))
                .ForMember(d => d.idGMapPostalCode, o => o.MapFrom(s => s.gMapPostalCode.Id))
                .ForMember(d => d.idGMapRoute, o => o.MapFrom(s => s.gMapRoute.Id))
                .ForMember(d => d.idGMapStreetNumber, o => o.MapFrom(s => s.gMapStreetNumber.Id))
                .ForMember(d => d.idGMapSublocalityLevel1, o => o.MapFrom(s => s.gMapSublocalityLevel1.Id))
                .ForMember(d => d.idGMapSublocalityLevel2, o => o.MapFrom(s => s.gMapSublocalityLevel2.Id));
        }
    }
}
