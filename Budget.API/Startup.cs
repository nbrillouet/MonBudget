﻿using System;
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
using Microsoft.EntityFrameworkCore;
using Budget.HELPER;

namespace Budget.API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;

        public Startup(IConfiguration configuration,
            IOptions<CloudinarySettings> cloudinaryConfig)
        {
            Configuration = configuration;
            _cloudinaryConfig = cloudinaryConfig;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //var DefaultConnexion = CryptoHelper.Encrypt("Server = PS10; Database = XmlToSwift_Demo; Trusted_Connection = True; MultipleActiveResultSets = true");
            //var DefaultConnexion = CryptoHelper.Encrypt("Server = nl1-wsq1.a2hosting.com; Database = monbudge_budget; user=monbudge_budget; password=9A3xit4m?");
            //var DefaultConnexion = CryptoHelper.Encrypt(@"Server = DESKTOP-0M47AE3\SQLEXPRESS; Database = Budget; Trusted_Connection = True; MultipleActiveResultSets = true");

            //var CloudName = CryptoHelper.Encrypt("killmeagain77"); 
            //var ApiKey = CryptoHelper.Encrypt("867256855236325");
            //var ApiSecret = CryptoHelper.Encrypt("8XeXYsOBLHKvSn0FcvaLuTw862Y");
            //var Token = CryptoHelper.Encrypt("some_big_key_value_here_secret");

            //var decrypt = CryptoHelper.Decrypt(Configuration.GetConnectionString("DefaultConnexion"));
            var defaultconnection = CryptoHelper.Decrypt(Configuration.GetConnectionString("DefaultConnexion"));
            services.AddDbContext<BudgetContext>(options =>
                options.UseSqlServer(CryptoHelper.Decrypt(Configuration.GetConnectionString("DefaultConnexion"))));

            services.AddCors();
            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));

            var tutu = Configuration.GetSection("AppSettings")["Token"];
            var tata = Configuration.GetSection("CloudinarySettings");
            var toto = Configuration.GetSection("AppSettings");


            services.AddAutoMapper();

            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserRepository, UserRepository>();

            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IAuthRepository, AuthRepository>();

            services.AddScoped<IUserShortcutService, UserShortcutService>();
            services.AddScoped<IUserShortcutRepository, UserShortcutRepository>();

            services.AddScoped<IUserCustomOtfService, UserCustomOtfService>();
            services.AddScoped<IUserCustomOtfRepository, UserCustomOtfRepository>();

            services.AddScoped<IBankFamilyService, BankFamilyService>();
            services.AddScoped<IBankFamilyRepository, BankFamilyRepository>();

            services.AddScoped<IBankSubFamilyService, BankSubFamilyService>();
            services.AddScoped<IBankSubFamilyRepository, BankSubFamilyRepository>();

            services.AddScoped<IBankAgencyService, BankAgencyService>();
            services.AddScoped<IBankAgencyRepository, BankAgencyRepository>();

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

            services.AddScoped<IAsChartEvolutionService, AsChartEvolutionService>();
            services.AddScoped<IAsChartEvolutionRepository, AsChartEvolutionRepository>();
            services.AddScoped<IAsChartCategorisationService, AsChartCategorisationService>();
            services.AddScoped<IAsChartCategorisationRepository, AsChartCategorisationRepository>();

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

            services.AddScoped<IMovementService, MovementService>();
            services.AddScoped<IMovementRepository, MovementRepository>();

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

            services.AddScoped<IPlanAccountService, PlanAccountService>();
            services.AddScoped<IPlanAccountRepository, PlanAccountRepository>();

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

            services.AddScoped<IGMapTypeLanguageService, GMapTypeLanguageService>();
            services.AddScoped<IGMapTypeLanguageRepository, GMapTypeLanguageRepository>();

            services.AddScoped<IGMapAddressTypeService, GMapAddressTypeService>();
            services.AddScoped<IGMapAddressTypeRepository, GMapAddressTypeRepository>();

            services.AddScoped<ISelectService, SelectService>();
            services.AddScoped<IVPlanGlobalRepository, VPlanGlobalRepository>();
            services.AddScoped<IMailService, MailService>();

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

                var toto = _cloudinaryConfig.Value;
                //Add our new middleware to the pipeline
                app.UseMiddleware<RequestTrackerMiddleware>();
                //Add Cors
                app.UseCors(builder =>
                {
                    builder.WithOrigins(Configuration.GetSection("Cors")["Url"])
                    .AllowAnyHeader().AllowAnyMethod().AllowCredentials();
                });
                //app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

                //Add Authentication
                app.UseAuthentication();

                //Add Mvc
                app.UseMvc();
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

                //Add our new middleware to the pipeline
                app.UseMiddleware<RequestTrackerMiddleware>();
                //Add Cors
                app.UseCors(builder =>
                {
                    builder.WithOrigins(Configuration.GetSection("Cors")["Url"])
                    .AllowAnyHeader().AllowAnyMethod().AllowCredentials();
                });
                //app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

                //Add Authentication
                app.UseAuthentication();

                //utilisation du wwwRoot pour production:
                app.UseDefaultFiles();
                app.UseStaticFiles();
                app.UseMvc(routes =>
                {
                    routes.MapSpaFallbackRoute(
                        name: "spa-fallback",
                        defaults: new { controller = "Fallback", action = "Index" }
                        );
                });
                //--
            }

            app.UseHttpsRedirection();

            ////Add our new middleware to the pipeline
            //app.UseMiddleware<RequestTrackerMiddleware>();
            ////Add Cors
            //app.UseCors(builder =>
            //{
            //    builder.WithOrigins("http://localhost:4200")
            //    .AllowAnyHeader().AllowAnyMethod().AllowCredentials();
            //});
            ////app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            ////Add Authentication
            //app.UseAuthentication();

            ////utilisation du wwwRoot pour production:
            //app.UseDefaultFiles();
            //app.UseStaticFiles();
            //app.UseMvc(routes =>
            //{
            //    routes.MapSpaFallbackRoute(
            //        name:"spa-fallback",
            //        defaults: new {controller = "Fallback", action="Index"}
            //        );
            //});
            //--


            //sans utilisation root:
            //app.UseMvc();
        }
    }
}
