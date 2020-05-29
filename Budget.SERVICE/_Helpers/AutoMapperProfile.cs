using AutoMapper;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;

namespace Budget.SERVICE._Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            
            CreateMap<User, Select>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.FirstName + " " + s.LastName));

            //CreateMap<UserForRegister, User>()
            //    .ForMember(d => d.UserName, o => o.MapFrom(s => s.Name))
            //    .ForMember(d => d.MailAddress, o => o.MapFrom(s => s.Email))
            //    .ForAllOtherMembers(o => o.Ignore());

            CreateMap<User, UserForRegister>()
                .ForMember(d => d.Email, o => o.MapFrom(s => s.MailAddress))
                .ForMember(d => d.Name, o => o.MapFrom(s => s.UserName))
                .ForMember(d => d.Password, o => o.Ignore())
                .ForMember(d => d.PasswordConfirm, o => o.Ignore())
            .ReverseMap()
                .ForMember(d => d.UserName, o => o.MapFrom(s => s.Name))
                .ForMember(d => d.MailAddress, o => o.MapFrom(s => s.Email))
                .ForAllOtherMembers(o => o.Ignore());



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
                .ForMember(d => d.BankAgencies, o => o.Ignore())
                .ForMember(d => d.Token, o => o.Ignore())
            .ReverseMap()
                .ForMember(d => d.PasswordHash, o => o.Ignore())
                .ForMember(d => d.PasswordSalt, o => o.Ignore())
                .ForMember(d => d.GMapAddress, o => o.Ignore())
                .ForMember(d => d.UserAccounts, o => o.Ignore());
 
            CreateMap<UserForAvatarCreationDto, User>();
            CreateMap<UserForLabelDto, User>();
            CreateMap<UserForGroupDto, User>()
                .ReverseMap();

            CreateMap<User, UserForConnection>()
                .ForMember(d => d.Token, o => o.Ignore());

            CreateMap<UserShortcut, UserShortcutDto>();
            CreateMap<UserShortcutDto, UserShortcut>();
            
            CreateMap<Account, AccountForLabelDto>();
            CreateMap<Account, AccountForTable>()
                .ForMember(d => d.LinkedUsers, o => o.MapFrom(s => s.UserAccounts));
            //.ForMember(d => d.BankFamily, o => o.MapFrom(s => s.BankAgency.BankSubFamily.BankFamily))
            //.ForMember(d => d.BankSubFamily, o => o.MapFrom(s => s.BankAgency.BankSubFamily));

            CreateMap<Account, AccountForDetail>()
                //.ForMember(d => d.AccountType, o => o.Ignore())
                //.ForMember(d => d.BankAgency, o => o.Ignore())
                .ForMember(d => d.LinkedUsers, o => o.Ignore())
            .ReverseMap()
                .ForMember(d => d.IdAccountType, o => o.MapFrom(s => s.AccountType.Id))
                .ForMember(d => d.IdBankAgency, o => o.MapFrom(s => s.BankAgency.Id))
                .ForMember(d => d.UserAccounts, o => o.Ignore());
                //.ForMember(d => d.idi, o => o.MapFrom(s => s.Number + " - " + s.Label));

            CreateMap<Account, Select>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Number + " - " + s.Label));

            //Mapping vers USER pour Select
            CreateMap<UserAccount, Select>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.IdUser))
                .ForMember(d => d.Label, o => o.MapFrom(s => $"{s.User.FirstName} {s.User.LastName}"));

            //CreateMap<BankFamily, BankGenericDto>();
            CreateMap<BankFamily, Select>();
                //.ForMember(d => d.Label, o => o.MapFrom(s => s.Label));
            CreateMap<BankFamily, SelectCode>()
                //.ForMember(d => d.Label, o => o.MapFrom(s => s.Label))
                .ForMember(d => d.Code, o => o.MapFrom(s => $"\\assets\\{s.Asset.Path}\\{s.Asset.Name}.{s.Asset.Extension}"));
            CreateMap<BankFamily, SelectCodeUrl>()
                .ForMember(d => d.Url, o => o.MapFrom(s => $"\\assets\\{s.Asset.Path}\\{s.Asset.Name}.{s.Asset.Extension}"));
            
            CreateMap<BankSubFamily, Select>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Label));
            CreateMap<BankSubFamily, SelectCodeUrl>();
                //.ForMember(d => d.Url, o => o.MapFrom(s => $"\\assets\\{s.Asset.Path}\\{s.Asset.Name}.{s.Asset.Extension}"));

            CreateMap<BankAgency, Select>();

            //CreateMap<BankSubFamily, BankGenericDto>();
            CreateMap<BankSubFamily, BankSubFamilyForDetail>();
     


            CreateMap<BankAgency, BankAgencyDto>()
                .ForMember(d => d.BankFamily, o => o.MapFrom(s => s.BankSubFamily.BankFamily))
                .ForMember(d => d.BankSubFamily, o => o.MapFrom(s => s.BankSubFamily));
            CreateMap<BankAgency, BankAgencyForDetail>()
            .ReverseMap()
                .ForMember(d => d.Id ,o => o.MapFrom(s => s.Id))
                .ForPath(d => d.IdBankSubFamily, o => o.MapFrom(s => s.BankSubFamily.Id))
                //.ForPath(d => d., o => o.MapFrom(s => s.BankSubFamily.BankFamily.Id))
                .ForAllOtherMembers(o => o.Ignore());

            CreateMap<BankAgency, BankAgencyWithAccountsDto>()
                .ForMember(d => d.BankFamily, o => o.MapFrom(s => s.BankSubFamily.BankFamily));
            //.ForMember(d => d.BankSubFamily, o => o.MapFrom(s => s.BankSubFamily));

            CreateMap<StateAsif, Select>()
                .ReverseMap();

            //CreateMap<BankAgency, SelectDto>()
            //    .ForMember(d=>d.Label,o=>o.MapFrom(s=>s.BankSubFamily.LabelLong));
            CreateMap<BankAgency, BankAgencyForListDto>();
            //CreateMap<BankAgency, SelectColorDto>()
            //    .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
            //    .ForMember(d => d.Label, o => o.MapFrom(s => s.BankSubFamily.LabelLong))
            //    .ForMember(d => d.Color, o => o.MapFrom(s => s.BankSubFamily.BankFamily.LogoClassName));


            CreateMap<AccountStatement, AsForTable>()
                .ForMember(d => d.OperationTypeFamily, o => o.MapFrom(s => s.OperationType.OperationTypeFamily))
                .ForMember(d => d.BankAgency, o => o.MapFrom(s => s.Account.BankAgency));

            CreateMap<AccountStatement, AsForDetail>()
                .ForMember(d => d.Asset, opt => opt.MapFrom(source => source.OperationTypeFamily.Asset));
                //.ForMember(d => d.Operation, o => o.MapFrom(s => s.))
                //.ForMember(d => d.OperationMethod, o => o.Ignore())
                //.ForMember(d => d.OperationType, o => o.Ignore())
                //.ForMember(d => d.OperationTypeFamily, o => o.Ignore());

            CreateMap<Movement, Select>();
            CreateMap<SoldeDto, Solde>();

            CreateMap<OperationMethod, Select>();
            CreateMap<Operation, Select>();
            CreateMap<OperationTypeFamily, Select>();
            CreateMap<Movement, Select>();
            
            CreateMap<OperationTypeFamily, OtfForTableDto>()
            .ReverseMap();
            CreateMap<OperationTypeFamily, OtfForDetail>()
            .ReverseMap()
                .ForMember(d => d.Movement, o => o.Ignore())
                .ForMember(d => d.Asset, o => o.Ignore())
                .ForMember(d => d.IdMovement, o => o.MapFrom(s => s.Movement.Id))
                .ForMember(d => d.IdUserGroup, o => o.MapFrom(s => s.User.IdUserGroup))
                .ForMember(d => d.IdAsset, o => o.MapFrom(s => s.Asset.Id));

            CreateMap<Asset, SelectCode>()
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Name))
                .ForMember(d => d.Code, o => o.MapFrom(s => $"\\assets\\{s.Path}\\{s.Name}.{s.Extension}"))
            .ReverseMap()
                .ForMember(d => d.Extension, o => o.Ignore())
                .ForMember(d => d.IdFamily, o => o.Ignore())
                .ForMember(d => d.Name, o => o.Ignore())
                .ForMember(d => d.Path, o => o.Ignore());

            CreateMap<OperationType, OtForTableDto>()
            .ReverseMap()
                .ForMember(d => d.IdOperationTypeFamily, o => o.MapFrom(s => s.OperationTypeFamily.Id))
                .ForMember(d => d.OperationTypeFamily, o => o.Ignore());

            CreateMap<OperationType, OtForDetail>()
            .ReverseMap()
               .ForMember(d => d.OperationTypeFamily, o => o.Ignore())
               .ForMember(d => d.IdOperationTypeFamily, o => o.MapFrom(s => s.OperationTypeFamily.Id))
               .ForMember(d => d.IdUserGroup, o => o.MapFrom(s => s.User.IdUserGroup));

            CreateMap<Operation, OperationForTableDto>()
            .ReverseMap()
                .ForMember(d => d.OperationType, o => o.Ignore())
                .ForMember(d => d.OperationMethod, o => o.Ignore())
                .ForMember(d => d.IdOperationType, o => o.MapFrom(s => s.OperationType.Id))
                .ForMember(d => d.IdOperationMethod, o => o.MapFrom(s => s.OperationMethod.Id))
                .ForMember(d => d.IdUserGroup, o => o.MapFrom(s => s.User.IdUserGroup));

            CreateMap<Operation, OperationForDetail>()
            .ReverseMap()
                .ForMember(d => d.OperationType, o => o.Ignore())
                .ForMember(d => d.OperationMethod, o => o.Ignore())
                .ForMember(d => d.IdOperationType, o => o.MapFrom(s => s.OperationType.Id))
                .ForMember(d => d.IdOperationMethod, o => o.MapFrom(s => s.OperationMethod.Id))
                .ForMember(d => d.IdUserGroup, o => o.MapFrom(s => s.User.IdUserGroup));

            CreateMap<AccountStatementImport, AsiForListDto>();

            CreateMap<AccountStatementImportFile, AccountStatement>()
                .ForMember(dest => dest.Id, opt => opt.Ignore());

            CreateMap<AccountStatementImportFile, AsifForDetail>()
                .ForMember(d => d.Asset, o => o.MapFrom(s => s.OperationTypeFamily.Asset));
                //.ForMember(d => d.Asset, o => o.MapFrom(s => s.OperationTypeFamily.Asset))
                //.ForMember(d => d.Operation, o => o.Ignore())
                //.ForMember(d => d.OperationMethod, o => o.Ignore())
                //.ForMember(d => d.OperationType, o => o.Ignore())
                //.ForMember(d => d.OperationTypeFamily, o => o.Ignore());


            

            //Plan
            CreateMap<Plan, PlanForDetailDto>()
                .ForMember(d => d.Plan, o => o.MapFrom(s => s));

            CreateMap<PlanUser, Select>()
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

            CreateMap<AccountStatementPlan, SelectCode>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.IdPlan))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.Plan.Label))
                .ForMember(d => d.Code, o => o.MapFrom(s => s.Plan.Color));

            CreateMap<Month, Select>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Label, o => o.MapFrom(s => s.LabelLong));
            //CreateMap<Frequency, FrequencyDto>()
            //    .ForMember(d => d.monthLabelShort, o => o.Ignore());
            

            CreateMap<Poste, Select>();
            CreateMap<ReferenceTable, Select>();
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
            CreateMap<GMapAdministrativeAreaLevel1, Select>();
            CreateMap<GMapAdministrativeAreaLevel2, Select>();
            CreateMap<GMapCountry, Select>();
            CreateMap<GMapLocality, Select>();
            CreateMap<GMapNeighborhood, Select>();
            CreateMap<GMapPostalCode, Select>();
            CreateMap<GMapRoute, Select>();
            CreateMap<GMapStreetNumber, Select>();
            CreateMap<GMapSublocalityLevel1, Select>();
            CreateMap<GMapSublocalityLevel2, Select>();
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
