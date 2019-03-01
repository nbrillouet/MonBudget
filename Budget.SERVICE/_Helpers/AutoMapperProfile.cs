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
            CreateMap<User, SelectDto>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.FirstName + " " + s.LastName));


            CreateMap<User, UserForListDto>()
                //trouver l'age a partir de la date de naissance
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });

            CreateMap<User, UserForTableDto>()
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
                .ForMember(d => d.Banks, o => o.Ignore());
                //.ForMember(d => d.Accounts, o => o.MapFrom(s => s.UserAccounts.Select(ua => ua.Account).ToList()));

            CreateMap<UserForDetailDto, User>()
                .ForMember(d => d.PasswordHash, o => o.Ignore())
                .ForMember(d => d.PasswordSalt, o => o.Ignore())
                .ForMember(d => d.GMapAddress, o => o.Ignore())
                .ForMember(d => d.UserAccounts, o => o.Ignore());

            CreateMap<UserForAvatarCreationDto, User>();
            CreateMap<UserForLabelDto, User>();
            CreateMap<User, UserForConnectionDto>()
                .ForMember(d => d.Token, o => o.Ignore());

            CreateMap<UserShortcut, UserShortcutDto>();
            CreateMap<UserShortcutDto, UserShortcut>();
            
            CreateMap<Account, AccountForLabelDto>();
            CreateMap<Account, AccountForDetailDto>()
                .ForMember(d => d.LinkedUsers, o => o.Ignore());
            CreateMap<Account, SelectDto>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Number + " - " + s.Label));

            CreateMap<AccountType, BankAccountsDto>();

            CreateMap<Bank, BankAccountsDto>();
            CreateMap<Bank, BankForListDto>(); 
            CreateMap<Bank, SelectDto>()
                .ForMember(d=>d.Label,o=>o.MapFrom(s=>s.LabelBankLong));
            CreateMap<Bank, SelectColorDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.LabelBankLong))
                .ForMember(d => d.Color, o => o.MapFrom(s => s.LogoClassName));


            CreateMap<AccountStatement, AsGridDto>()
                .ForMember(d => d.OperationTypeFamily, o => o.MapFrom(s => s.OperationType.OperationTypeFamily));

            CreateMap<OperationMethod, SelectDto>();
            CreateMap<Operation, SelectDto>();
            CreateMap<OperationTypeFamily, SelectDto>();

            CreateMap<AccountStatementImport, AsiForListDto>();

            CreateMap<AccountStatementImportFile, AccountStatement>()
                .ForMember(dest => dest.Id, opt => opt.Ignore());

            CreateMap<AccountStatementImportFile, AsifDetailDto>()
                .ForMember(d => d.LogoName, opt => opt.MapFrom(source => source.OperationTypeFamily.LogoClassName))
                //trouver l'url à partir de la className
                .ForMember(d => d.LogoUrl, o => o.ResolveUsing(s => StringHelper.GetLogoUrl(s.OperationTypeFamily.LogoClassName)))
                .ForMember(d => d.Operation, o => o.Ignore())
                .ForMember(d => d.OperationMethod, o => o.Ignore())
                .ForMember(d => d.OperationType, o => o.Ignore())
                .ForMember(d => d.OperationTypeFamily, o => o.Ignore());
                //.ForMember(d => d.OperationDetail, o => o.Ignore());

            CreateMap<AccountStatement, AsDetailDto>()
                .ForMember(dest => dest.LogoName, opt => opt.MapFrom(source => source.OperationType.OperationTypeFamily.LogoClassName))
                .ForMember(d => d.OperationTypeFamily, o => o.MapFrom(s => s.OperationType.OperationTypeFamily));

            //Plan
            CreateMap<Plan, PlanForDetailDto>()
                .ForMember(d => d.Plan, o => o.MapFrom(s => s));

            CreateMap<PlanUser, SelectDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.User.Id))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.User.FirstName + " " + s.User.LastName));

            CreateMap<PlanPosteForDetailDto, PlanPoste>()
                .ForMember(d => d.ReferenceTable, o => o.Ignore())
                .ForMember(d => d.Poste, o => o.Ignore())
                .ForMember(d => d.Plan, o => o.Ignore());

            CreateMap<PlanPoste, PlanPosteForDetailDto>()
                .ForMember(d => d.PlanPosteUser, o => o.Ignore())
                .ForMember(d => d.PlanPosteReference, o => o.Ignore())
                .ForMember(d => d.PlanPosteFrequencies, o => o.Ignore())
                .ForMember(d => d.ReferenceTable, o => o.Ignore());

            CreateMap<AccountStatementPlan, SelectColorDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.IdPlan))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Plan.Label))
                .ForMember(d => d.Color, o => o.MapFrom(s => s.Plan.Color));

            CreateMap<Frequency, SelectDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.MonthLabel));
            CreateMap<Frequency, FrequencyDto>()
                .ForMember(d => d.monthLabelShort, o => o.Ignore());
            

            CreateMap<Poste, SelectDto>();
            CreateMap<ReferenceTable, SelectDto>();
                //.ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                //.ForMember(d => d.Label, o => o.MapFrom(s => s.Label));

            CreateMap<PlanPosteUser, PlanPosteUserForDetailDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.IsSalaryEstimatedPart, o => o.MapFrom(s => s.IsSalaryEstimatedPart))
                .ForMember(d => d.Percentage, o => o.MapFrom(s => s.PercentagePart))
                .ForMember(d => d.User, o => o.MapFrom(s => s.PlanUser.User));


            //Filter
            //CreateMap<Pagination, FilterAccountStatement>();

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
