using AutoMapper;
using Budget.DATA.Repositories;
using Budget.HELPER;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Chart;
using Budget.MODEL.Dto.Finance;
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


        public AccountStatementChartService(
            IMapper mapper,
            IAccountStatementChartRepository accountStatementChartRepository
            )
        {
            _mapper = mapper;
            _accountStatementChartRepository = accountStatementChartRepository;
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
            List<AsEvolutionDto> asEvolutionDtos = GetAsEvolutionDto(filterAsTableSelected, evolutionType);

            AsChartEvolutionCdb asChartEvolutionCdb = new AsChartEvolutionCdb();
            asChartEvolutionCdb.Debit = GetWidgetCardChartBar(asEvolutionDtos, EnumAmountState.Debit);
            asChartEvolutionCdb.Credit = GetWidgetCardChartBar(asEvolutionDtos, EnumAmountState.Credit);
            asChartEvolutionCdb.Balance = GetWidgetCardChartBar(asEvolutionDtos, EnumAmountState.Balance);

            return asChartEvolutionCdb;
        }
        private List<AsEvolutionDto> GetAsEvolutionDto(FilterAsTableSelected filterAsTableSelected,string evolutionType)
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

        private WidgetCardChartBar GetWidgetCardChartBar(List<AsEvolutionDto> AsEvolutions, EnumAmountState enumAmountState)
        {
            WidgetCardChartBar widgetCardChartBar = new WidgetCardChartBar();

            List<double> datas = new List<double>();
            List<string> colors = new List<string>();
            foreach (var AsEvolution in AsEvolutions)
            {
                widgetCardChartBar.Chart.Labels.Add(new SelectDto() {
                    Id = Int32.Parse(AsEvolution.Month),
                    Label = $"{DateHelper.GetLabelMonthShort(AsEvolution.Month)} {AsEvolution.Year}"
                    });

                var amount = enumAmountState == EnumAmountState.Debit 
                    ? AsEvolution.Debit : enumAmountState == EnumAmountState.Credit
                    ? AsEvolution.Credit : enumAmountState == EnumAmountState.Balance
                    ? AsEvolution.Balance : 0;
                datas.Add(amount);
                colors.Add(amount >= 0 
                    ? ChartHelper.GetChartColor(EnumChartBarColor.Green.ToString()) 
                    : ChartHelper.GetChartColor(EnumChartBarColor.Red.ToString()));
                
            }

            widgetCardChartBar.Chart.DataSets.Add(new DataSet()
            {
                Label = enumAmountState.ToString(),
                Data = datas
            });
            widgetCardChartBar.Chart.Colors.Add(new Color
            {
                BackgroundColor = colors
            });

            widgetCardChartBar.Title.Label = enumAmountState.ToString();
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
    }
}
