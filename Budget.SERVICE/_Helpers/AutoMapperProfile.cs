using AutoMapper;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using Budget.MODEL.Filter;

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
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                    //opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });

            CreateMap<User, UserForTableDto>()
                //trouver l'age a partir de la date de naissance
                .ForMember(dest => dest.Age, opt =>
                {
                    //opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });


            CreateMap<User, UserForDetailDto>()
                //trouver l'age a partir de la date de naissance
                .ForMember(dest => dest.Age, opt =>
                {
                    //opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                })
                .ForMember(d => d.BankAgencies, o => o.Ignore());
                //.ForMember(d => d.Accounts, o => o.MapFrom(s => s.UserAccounts.Select(ua => ua.Account).ToList()));

            CreateMap<UserForDetailDto, User>()
                .ForMember(d => d.PasswordHash, o => o.Ignore())
                .ForMember(d => d.PasswordSalt, o => o.Ignore())
                .ForMember(d => d.GMapAddress, o => o.Ignore())
                .ForMember(d => d.UserAccounts, o => o.Ignore());

            CreateMap<UserForAvatarCreationDto, User>();
            CreateMap<UserForLabelDto, User>();
            CreateMap<UserForGroupDto, User>();
            CreateMap<User, UserForConnectionDto>()
                .ForMember(d => d.Token, o => o.Ignore());

            CreateMap<UserShortcut, UserShortcutDto>();
            CreateMap<UserShortcutDto, UserShortcut>();
            
            CreateMap<Account, AccountForLabelDto>();
            CreateMap<Account, AccountForDetailDto>()
                .ForMember(d => d.AccountType, o => o.Ignore())
                .ForMember(d => d.BankAgency, o => o.Ignore())
                .ForMember(d => d.BankFamily, o => o.Ignore())
                .ForMember(d => d.BankSubFamily, o => o.Ignore())
                .ForMember(d => d.LinkedUsers, o => o.Ignore());
            CreateMap<Account, SelectDto>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Number + " - " + s.Label));

            CreateMap<BankFamily, BankGenericDto>();
            CreateMap<BankFamily, SelectDto>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.LabelLong));
            CreateMap<BankSubFamily, SelectDto>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.LabelLong));
            CreateMap<BankAgency, SelectDto>();
            CreateMap<BankSubFamily, BankGenericDto>();
            CreateMap<BankAgency, BankAgencyDto>()
                .ForMember(d => d.BankFamily, o => o.MapFrom(s => s.BankSubFamily.BankFamily))
                .ForMember(d => d.BankSubFamily, o => o.MapFrom(s => s.BankSubFamily));

            CreateMap<BankAgency, BankAgencyWithAccountsDto>()
                .ForMember(d => d.BankFamily, o => o.MapFrom(s => s.BankSubFamily.BankFamily));
            //.ForMember(d => d.BankSubFamily, o => o.MapFrom(s => s.BankSubFamily));

            //CreateMap<BankAgency, SelectDto>()
            //    .ForMember(d=>d.Label,o=>o.MapFrom(s=>s.BankSubFamily.LabelLong));
            CreateMap<BankAgency, BankAgencyForListDto>();
            //CreateMap<BankAgency, SelectColorDto>()
            //    .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
            //    .ForMember(d => d.Label, o => o.MapFrom(s => s.BankSubFamily.LabelLong))
            //    .ForMember(d => d.Color, o => o.MapFrom(s => s.BankSubFamily.BankFamily.LogoClassName));


            CreateMap<AccountStatement, AsForTableDto>()
                .ForMember(d => d.OperationTypeFamily, o => o.MapFrom(s => s.OperationType.OperationTypeFamily))
                .ForMember(d => d.BankAgency, o => o.MapFrom(s => s.Account.BankAgency));

            CreateMap<Movement, SelectDto>();

            CreateMap<OperationMethod, SelectDto>();
            CreateMap<Operation, SelectDto>();
            CreateMap<OperationTypeFamily, SelectDto>();
            CreateMap<Movement, SelectDto>();

            CreateMap<OperationTypeFamily, OtfForTableDto>();
            CreateMap<OperationTypeFamily, OtfForDetailDto>()
                .ForMember(d => d.Movement, o => o.Ignore())
                .ForMember(d => d.LogoClassName, o => o.Ignore());
            CreateMap<OtfForDetailDto, OperationTypeFamily>()
                .ForMember(d => d.Movement, o => o.Ignore())
                .ForMember(d => d.LogoClassName, o => o.MapFrom(s => s.LogoClassName.Selected.Label))
                .ForMember(d => d.IdMovement, o => o.MapFrom(s => s.Movement.Selected.Id))
                .ForMember(d => d.IdUserGroup, o => o.MapFrom(s => s.User.IdUserGroup));

            CreateMap<OperationType, OtForTableDto>();
            CreateMap<OperationType, OtForDetailDto>()
                .ForMember(d => d.OperationTypeFamily, o => o.Ignore());
            CreateMap<OtForDetailDto, OperationType>()
               .ForMember(d => d.OperationTypeFamily, o => o.Ignore())
               .ForMember(d => d.IdOperationTypeFamily, o => o.MapFrom(s => s.OperationTypeFamily.Selected.Id))
               .ForMember(d => d.IdUserGroup, o => o.MapFrom(s => s.User.IdUserGroup));

            CreateMap<Operation, OperationForTableDto>();
            CreateMap<Operation, OperationForDetail>()
                .ForMember(d => d.OperationMethod, o => o.Ignore())
                .ForMember(d => d.OperationType, o => o.Ignore());
            CreateMap<OperationForDetail, Operation>()
               .ForMember(d => d.OperationType, o => o.Ignore())
               .ForMember(d => d.OperationMethod, o => o.Ignore())
               .ForMember(d => d.IdOperationType, o => o.MapFrom(s => s.OperationType.Selected.Id))
               .ForMember(d => d.IdOperationMethod, o => o.MapFrom(s => s.OperationMethod.Selected.Id))
               .ForMember(d => d.IdUserGroup, o => o.MapFrom(s => s.User.IdUserGroup));

            CreateMap<AccountStatementImport, AsiForListDto>();

            CreateMap<AccountStatementImportFile, AccountStatement>()
                .ForMember(dest => dest.Id, opt => opt.Ignore());

            CreateMap<AccountStatementImportFile, AsifDetailDto>()
                .ForMember(d => d.LogoName, opt => opt.MapFrom(source => source.OperationTypeFamily.LogoClassName))
                //trouver l'url à partir de la className
                //.ForMember(d => d.LogoUrl, o => o.ResolveUsing(s => StringHelper.GetLogoUrl(s.OperationTypeFamily.LogoClassName)))
                .ForMember(d => d.LogoUrl, o => o.MapFrom(s => StringHelper.GetLogoUrl(s.OperationTypeFamily.LogoClassName,128)))
                .ForMember(d => d.Operation, o => o.Ignore())
                .ForMember(d => d.OperationMethod, o => o.Ignore())
                .ForMember(d => d.OperationType, o => o.Ignore())
                .ForMember(d => d.OperationTypeFamily, o => o.Ignore());


            CreateMap<AccountStatement, AsDetailDto>()
                .ForMember(d => d.LogoName, opt => opt.MapFrom(source => source.OperationTypeFamily.LogoClassName))
                //trouver l'url à partir de la className
                //.ForMember(d => d.LogoUrl, o => o.ResolveUsing(s => StringHelper.GetLogoUrl(s.OperationTypeFamily.LogoClassName)))
                .ForMember(d => d.LogoUrl, o => o.MapFrom(s => StringHelper.GetLogoUrl(s.OperationTypeFamily.LogoClassName,128)))
                .ForMember(d => d.Operation, o => o.Ignore())
                .ForMember(d => d.OperationMethod, o => o.Ignore())
                .ForMember(d => d.OperationType, o => o.Ignore())
                .ForMember(d => d.OperationTypeFamily, o => o.Ignore());

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

            CreateMap<AccountStatementPlan, SelectValueDto<string>>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.IdPlan))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Plan.Label))
                .ForMember(d => d.Value, o => o.MapFrom(s => s.Plan.Color));

            CreateMap<Month, SelectDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.LabelLong));
            //CreateMap<Frequency, FrequencyDto>()
            //    .ForMember(d => d.monthLabelShort, o => o.Ignore());
            

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
            CreateMap<GMapType, GMapTypeDto>()
                .ForMember(d => d.Label, o => o.Ignore());

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

            CreateMap<FilterAsTableSelection, FilterPlanNotAsTableSelection>()
                .ReverseMap();
        }
    }
}
