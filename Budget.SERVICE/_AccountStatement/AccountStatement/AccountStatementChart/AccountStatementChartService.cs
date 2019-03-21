using AutoMapper;
using Budget.DATA.Repositories;
using Budget.HELPER;
using Budget.MODEL;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountStatementChartService : IAccountStatementChartService
    {
        private readonly IMapper _mapper;
        private readonly IAccountStatementChartRepository _accountStatementChartRepository;
        private readonly IUserCustomOtfService _userCustomOtfService;
        private readonly ReferentialService _referentialService;

        public AccountStatementChartService(
            IMapper mapper,
            IAccountStatementChartRepository accountStatementChartRepository,
            IUserCustomOtfService userCustomOtfService,
            ReferentialService referentialService
            )
        {
            _mapper = mapper;
            _accountStatementChartRepository = accountStatementChartRepository;
            _userCustomOtfService = userCustomOtfService;
            _referentialService = referentialService;
        }

        public AsChartEvolutionCdb GetAsChartEvolutionBrut(FilterAsTableSelected filterAsTableSelected)
        {
            return GetAsChartEvolutionCdb(filterAsTableSelected, "Brut");
        }

        public AsChartEvolutionCdb GetAsChartEvolutionNoIntTransfer(FilterAsTableSelected filterAsTableSelected)
        {
            return GetAsChartEvolutionCdb(filterAsTableSelected, "NoIntTransfer");
        }

        private AsChartEvolutionCdb GetAsChartEvolutionCdb(FilterAsTableSelected filterAsTableSelected, string evolutionType)
        {
            List<AsEvolutionCdbDto> asEvolutionCdbDtos = GetAsEvolutionDto(filterAsTableSelected, evolutionType);

            AsChartEvolutionCdb asChartEvolutionCdb = new AsChartEvolutionCdb();
            asChartEvolutionCdb.Debit = GetWidgetCardChartBar(asEvolutionCdbDtos
                .Select(x => new BaseChartData { Id = x.Id, Month = x.Month, Year = x.Year, Amount = x.Debit })
                .ToList(), EnumAmountState.Debit.ToString());

            asChartEvolutionCdb.Credit = GetWidgetCardChartBar(asEvolutionCdbDtos
                .Select(x => new BaseChartData { Id = x.Id, Month = x.Month, Year = x.Year, Amount = x.Credit })
                .ToList(), EnumAmountState.Credit.ToString());

            asChartEvolutionCdb.Balance = GetWidgetCardChartBar(asEvolutionCdbDtos
                .Select(x => new BaseChartData { Id = x.Id, Month = x.Month, Year = x.Year, Amount = x.Balance })
                .ToList(), EnumAmountState.Balance.ToString());

            return asChartEvolutionCdb;
        }
        private List<AsEvolutionCdbDto> GetAsEvolutionDto(FilterAsTableSelected filterAsTableSelected,string evolutionType)
        {
            var date = Convert.ToDateTime($"01/{filterAsTableSelected.MonthYear.Month.Id}/{filterAsTableSelected.MonthYear.Year}");
            var dateMax = DateHelper.GetLastDayOfMonth(date);
            var dateMin = DateHelper.GetFirstDayOfMonth(dateMax.AddMonths(-12));

            switch(evolutionType)
            {
                case "Brut":
                    return _accountStatementChartRepository.GetAsChartEvolutionBrut(filterAsTableSelected.IdAccount.Value, dateMin, dateMax);
                case "NoIntTransfer":
                    return _accountStatementChartRepository.GetAsChartEvolutionNoIntTransfer(filterAsTableSelected.IdAccount.Value, dateMin, dateMax); ;
                default:
                    throw new Exception("No matching Evolution type ");
            }
        }

        private WidgetCardChartBar GetWidgetCardChartBar(List<BaseChartData> baseChartDatas, string chartLabel)
        {
            WidgetCardChartBar widgetCardChartBar = new WidgetCardChartBar();

            List<double> datas = new List<double>();
            List<string> colors = new List<string>();
            foreach (var baseChartData in baseChartDatas)
            {
                widgetCardChartBar.Chart.Labels.Add(new SelectDto() {
                    Id = Int32.Parse(baseChartData.Month),
                    Label = $"{DateHelper.GetLabelMonthShort(baseChartData.Month)} {baseChartData.Year}"
                    });

                //var amount = enumAmountState == EnumAmountState.Debit 
                //    ? AsEvolution.Debit : enumAmountState == EnumAmountState.Credit
                //    ? AsEvolution.Credit : enumAmountState == EnumAmountState.Balance
                //    ? AsEvolution.Balance : 0;

                datas.Add(baseChartData.Amount);
                colors.Add(baseChartData.Amount >= 0 
                    ? ChartHelper.GetChartColor(EnumChartBarColor.Green.ToString()) 
                    : ChartHelper.GetChartColor(EnumChartBarColor.Red.ToString()));
                
            }

            widgetCardChartBar.Chart.DataSets.Add(new DataSet()
            {
                Label = chartLabel,
                Data = datas
            });
            widgetCardChartBar.Chart.Colors.Add(new Color
            {
                BackgroundColor = colors
            });

            widgetCardChartBar.Title.Label = chartLabel;
            widgetCardChartBar.Title.AverageAmount = Math.Round(widgetCardChartBar.Chart.DataSets[0].Data.Average(),2);
            widgetCardChartBar.Title.RatioAmount = Math.Round(widgetCardChartBar.Chart.DataSets[0].Data[widgetCardChartBar.Chart.DataSets[0].Data.Count - 1] * 100 / widgetCardChartBar.Title.AverageAmount,2);
            widgetCardChartBar.Title.RatioLabel = $" pour {widgetCardChartBar.Chart.Labels.Last().Label }";

            YAxe yAxe = new YAxe();
            yAxe.Ticks.Min = widgetCardChartBar.Chart.DataSets[0].Data.Min();
            yAxe.Ticks.Max = widgetCardChartBar.Chart.DataSets[0].Data.Max();
            widgetCardChartBar.Chart.Options.Scales.YAxes.Add(yAxe);

            widgetCardChartBar.IsLoaded = true;

            return widgetCardChartBar;
        }

        public List<WidgetCardChartBar> GetAsChartEvolutionCustomOtf(FilterAsTableSelected filterAsTableSelected)
        {
            //Rechercher les operationTypeFamily favori pour l'utilisateur
            List<SelectDto> otfs = _userCustomOtfService.GetOperationTypeFamilySelect(filterAsTableSelected.IdUser.Value, filterAsTableSelected.IdAccount.Value);
            List<WidgetCardChartBar> widgetCardChartBars = new List<WidgetCardChartBar>();
            foreach (var otf in otfs)
            {
                var baseChartDatas = GetAsEvolutionCustomOtf(filterAsTableSelected, otf.Id);
                WidgetCardChartBar widgetCardChartBar = GetWidgetCardChartBar(baseChartDatas, otf.Label);
                widgetCardChartBars.Add(widgetCardChartBar);
            }

            return widgetCardChartBars;
        }

        private List<BaseChartData> GetAsEvolutionCustomOtf(FilterAsTableSelected filterAsTableSelected, int idOperationTypeFamily)
        {
            var date = Convert.ToDateTime($"01/{filterAsTableSelected.MonthYear.Month.Id}/{filterAsTableSelected.MonthYear.Year}");
            var dateMax = DateHelper.GetLastDayOfMonth(date);
            var dateMin = DateHelper.GetFirstDayOfMonth(dateMax.AddMonths(-12));

            return _accountStatementChartRepository.GetAsChartEvolutionCustomOtf(filterAsTableSelected.IdAccount.Value, idOperationTypeFamily, dateMin, dateMax);

        }

        public AsChartEvolutionCustomOtfFilter GetAsChartEvolutionCustomOtfFilter(FilterAsTableSelected filter)
        {
            var operationTypeFamilies = _referentialService.OperationTypeFamilyService.GetSelectGroup();
            AsChartEvolutionCustomOtfFilter asChartEvolutionCustomOtfFilter = new AsChartEvolutionCustomOtfFilter {
                Selected = new AsChartEvolutionCustomOtfFilterSelected
                {
                    IdUser = filter.IdUser.Value,
                    IdAccount = filter.IdAccount.Value,
                    MonthYear = filter.MonthYear,
                    OperationTypeFamilies = _userCustomOtfService.GetOperationTypeFamilySelect(filter.IdUser.Value, filter.IdAccount.Value)
                },
                OperationTypeFamilies = operationTypeFamilies,
            };

            return asChartEvolutionCustomOtfFilter;
        }

        public bool UpdateAsChartEvolutionCustomOtfFilter(AsChartEvolutionCustomOtfFilterSelected filter)
        {
            return _userCustomOtfService.Update(filter);
        }
    }
}
