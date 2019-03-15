using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Budget.DATA;
using Budget.SERVICE;
using Budget.DATA.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Budget.API.Helpers;
using AutoMapper;
using Budget.SERVICE.GMap;
using Budget.DATA.Repositories.GMap;
using Budget.DATA.Repositories.ContextTransaction;


namespace Budget.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //x => x.UseSqlServer(Configuration.GetConnectionString("DefaultConnexion"))
            services.AddDbContext<BudgetContext>();
            
            services.AddCors();
            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));
            services.AddAutoMapper();

            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserRepository, UserRepository>();

            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IAuthRepository, AuthRepository>();

            services.AddScoped<IUserShortcutService, UserShortcutService>();
            services.AddScoped<IUserShortcutRepository, UserShortcutRepository>();

            services.AddScoped<IBankService, BankService>();
            services.AddScoped<IBankRepository, BankRepository>();

            services.AddScoped<IAccountStatementImportService, AccountStatementImportService>();
            services.AddScoped<IAccountStatementImportRepository, AccountStatementImportRepository>();
            services.AddScoped<IBanquePopulaireImportFileService, BanquePopulaireImportFileService>();
            services.AddScoped<ICreditAgricoleImportFileService, CreditAgricoleImportFileService>();

            services.AddScoped<IBankFileDefinitionService, BankFileDefinitionService > ();
            services.AddScoped<IBankFileDefinitionRepository, BankFileDefinitionRepository>();

            services.AddScoped<IAccountStatementImportFileService, AccountStatementImportFileService>();
            services.AddScoped<IAccountStatementImportFileRepository, AccountStatementImportFileRepository>();

            services.AddScoped<IAccountStatementService, AccountStatementService>();
            services.AddScoped<IAccountStatementRepository, AccountStatementRepository>();

            services.AddScoped<IAccountStatementChartService, AccountStatementChartService>();
            services.AddScoped<IAccountStatementChartRepository, AccountStatementChartRepository>();
            

            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IAccountRepository, AccountRepository>();

            services.AddScoped<IUserAccountService, UserAccountService>();
            services.AddScoped<IUserAccountRepository, UserAccountRepository>();

            services.AddScoped<IAccountTypeService, AccountTypeService>();
            services.AddScoped<IAccountTypeRepository, AccountTypeRepository>();

            services.AddScoped<IOperationMethodService, OperationMethodService>();
            services.AddScoped<IOperationMethodRepository, OperationMethodRepository>();

            services.AddScoped<IOperationMethodLexicalService, OperationMethodLexicalService>();
            services.AddScoped<IOperationMethodLexicalRepository, OperationMethodLexicalRepository>();

            services.AddScoped<IOperationTypeService, OperationTypeService>();
            services.AddScoped<IOperationTypeRepository, OperationTypeRepository>();

            services.AddScoped<IOperationTypeFamilyService, OperationTypeFamilyService>();
            services.AddScoped<IOperationTypeFamilyRepository, OperationTypeFamilyRepository>();

            services.AddScoped<IOperationService, OperationService>();
            services.AddScoped<IOperationRepository, OperationRepository>();

            services.AddScoped<IOperationDetailService, OperationDetailService>();
            services.AddScoped<IOperationDetailRepository, OperationDetailRepository>();

            services.AddScoped<IOperationTransverseService, OperationTransverseService>();
            services.AddScoped<IOperationTransverseRepository, OperationTransverseRepository>();

            services.AddScoped<IOperationTransverseAsifService, OperationTransverseAsifService>();
            services.AddScoped<IOperationTransverseAsifRepository, OperationTransverseAsifRepository>();

            services.AddScoped<IOperationTransverseAsService, OperationTransverseAsService>();
            services.AddScoped<IOperationTransverseAsRepository, OperationTransverseAsRepository>();
            
            services.AddScoped<IPlanService, PlanService>();
            services.AddScoped<IPlanRepository, PlanRepository>();

            services.AddScoped<IPlanPosteReferenceService, PlanPosteReferenceService>();
            services.AddScoped<IPlanPosteReferenceRepository, PlanPosteReferenceRepository>();

            services.AddScoped<IPlanPosteFrequencyService, PlanPosteFrequencyService>();
            services.AddScoped<IPlanPosteFrequencyRepository, PlanPosteFrequencyRepository>();

            services.AddScoped<IMonthService, MonthService>();
            services.AddScoped<IMonthRepository, MonthRepository>();

            services.AddScoped<IPlanPosteUserService, PlanPosteUserService>();
            services.AddScoped<IPlanPosteUserRepository, PlanPosteUserRepository>();
            
            services.AddScoped<IPlanUserRepository, PlanUserRepository>();
            services.AddScoped<IPlanUserService, PlanUserService>();

            services.AddScoped<IAccountStatementPlanRepository, AccountStatementPlanRepository>();
            services.AddScoped<IAccountStatementPlanService, AccountStatementPlanService>();

            services.AddScoped<IReferenceTableService, ReferenceTableService>();
            services.AddScoped<IReferenceTableRepository, ReferenceTableRepository>();

            services.AddScoped<IPosteService, PosteService>();
            services.AddScoped<IPosteRepository, PosteRepository>();

            services.AddScoped<IPlanPosteService, PlanPosteService>();
            services.AddScoped<IPlanPosteRepository, PlanPosteRepository>();

            services.AddScoped<IVPlanGlobalService, VPlanGlobalService>();
            services.AddScoped<IVPlanGlobalRepository, VPlanGlobalRepository>();
            

            services.AddScoped<IPlanDetailService,PlanDetailService>();
            services.AddScoped<IPlanPosteDetailService, PlanPosteDetailService>();
            services.AddScoped<IPlanTrackingService, PlanTrackingService>();
            


            //services.AddScoped<IOperationPlaceService, OperationPlaceService>();
            //services.AddScoped<IOperationPlaceRepository, OperationPlaceRepository>();

            services.AddScoped<IParameterService, ParameterService>();
            services.AddScoped<IParameterRepository, ParameterRepository>();

            services.AddScoped<IGMapAddressService, GMapAddressService>();
            services.AddScoped<IGMapAddressRepository, GMapAddressRepository>();

            services.AddScoped<IGMapAdministrativeAreaLevel1Service, GMapAdministrativeAreaLevel1Service>();
            services.AddScoped<IGMapAdministrativeAreaLevel1Repository, GMapAdministrativeAreaLevel1Repository>();

            services.AddScoped<IGMapAdministrativeAreaLevel2Service, GMapAdministrativeAreaLevel2Service>();
            services.AddScoped<IGMapAdministrativeAreaLevel2Repository, GMapAdministrativeAreaLevel2Repository>();

            services.AddScoped<IGMapCountryService, GMapCountryService>();
            services.AddScoped<IGMapCountryRepository, GMapCountryRepository>();

            services.AddScoped<IGMapLocalityService, GMapLocalityService>();
            services.AddScoped<IGMapLocalityRepository, GMapLocalityRepository>();

            services.AddScoped<IGMapNeighborhoodService, GMapNeighborhoodService>();
            services.AddScoped<IGMapNeighborhoodRepository, GMapNeighborhoodRepository>();

            services.AddScoped<IGMapPostalCodeService, GMapPostalCodeService>();
            services.AddScoped<IGMapPostalCodeRepository, GMapPostalCodeRepository>();

            services.AddScoped<IGMapRouteService, GMapRouteService>();
            services.AddScoped<IGMapRouteRepository, GMapRouteRepository>();

            services.AddScoped<IGMapStreetNumberService, GMapStreetNumberService>();
            services.AddScoped<IGMapStreetNumberRepository, GMapStreetNumberRepository>();

            services.AddScoped<IGMapSublocalityLevel1Service, GMapSublocalityLevel1Service>();
            services.AddScoped<IGMapSublocalityLevel1Repository, GMapSublocalityLevel1Repository>();

            services.AddScoped<IGMapSublocalityLevel2Service, GMapSublocalityLevel2Service>();
            services.AddScoped<IGMapSublocalityLevel2Repository, GMapSublocalityLevel2Repository>();

            services.AddScoped<IGMapTypeService, GMapTypeService>();
            services.AddScoped<IGMapTypeRepository, GMapTypeRepository>();

            services.AddScoped<IGMapAddressTypeService, GMapAddressTypeService>();
            services.AddScoped<IGMapAddressTypeRepository, GMapAddressTypeRepository>();

            services.AddScoped<ISelectService, SelectService>();
            services.AddScoped<IVPlanGlobalRepository, VPlanGlobalRepository>();

            services.AddScoped<IFilterService, FilterService>();
            
            services.AddTransient<ReferentialService>();

            services.AddScoped<IContextTransaction, ContextTransaction>();

            services.AddTransient<IGreeter, Greeter>();

            //add authentification
            var key = Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value);
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            services.AddMvc().AddJsonOptions(opt=>
            {
                opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(builder =>
                {
                    builder.Run(async context =>
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            context.Response.AddApplicationError(error.Error.Message);
                            await context.Response.WriteAsync(error.Error.Message);
                        }
                    });
                });
            }

            //Add our new middleware to the pipeline
            app.UseMiddleware<RequestTrackerMiddleware>();

            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());

            app.UseAuthentication();

            app.UseMvc();
        }
    }
}
