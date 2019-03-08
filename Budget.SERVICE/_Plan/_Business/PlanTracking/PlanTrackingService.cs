using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class PlanTrackingService : IPlanTrackingService
    {
        private readonly IMapper _mapper;
        private readonly IVPlanGlobalService _vPlanGlobalService;
        private readonly IPlanRepository _planRepository;
        private readonly IPosteRepository _posteRepository;
        private readonly IPlanPosteUserRepository _planPosteUserRepository;
        private readonly IPlanPosteReferenceService _planPosteReferenceService;
        private readonly IAccountStatementService _accountStatementService;

        public PlanTrackingService(
            IMapper mapper,
            IVPlanGlobalService vPlanGlobalService,
            IPlanRepository planRepository,
            IPosteRepository posteRepository,
            IPlanPosteUserRepository planPosteUserRepository,
            IAccountStatementService accountStatementService,
            IPlanPosteReferenceService planPosteReferenceService
            )
        {
            _mapper = mapper;
            _vPlanGlobalService = vPlanGlobalService;
            _planRepository = planRepository;
            _posteRepository = posteRepository;
            _planPosteUserRepository = planPosteUserRepository;
            _accountStatementService = accountStatementService;
            _planPosteReferenceService = planPosteReferenceService;

        }

        public PlanForTrackingDto Get(FilterPlanTracking filterPlanTracking)
        {
            PlanForTrackingDto planForTracking = new PlanForTrackingDto();
            planForTracking.Plan = _planRepository.GetById(filterPlanTracking.IdPlan);

            List<VPlanGlobal> vPlanGlobal = _vPlanGlobalService.Get(filterPlanTracking);
            if(vPlanGlobal.Count>0)
            {
                //recherche de tous les postes de la base et affectation au planTrackingDto
                planForTracking.Postes = GetPostesForTracking(vPlanGlobal, filterPlanTracking.IdPlan);

                //somme pour le plan
                PlanTrackingAmountStoreDto planTrackingAmountStore = vPlanGlobal
                    .GroupBy(x => new { x.PreviewAmount, x.IdPlan })
                    .Select(g => new PlanTrackingAmountStoreDto { Id = g.Key.IdPlan.Value, Label = planForTracking.Plan.Label, AmountPreview = g.Key.PreviewAmount.Value, AmountReal = g.Sum(a => a.AmountOperation.Value) })
                    .GroupBy(x => new { x.Id })
                    .Select(g => new PlanTrackingAmountStoreDto { Id = g.Key.Id, Label = planForTracking.Plan.Label, AmountPreview = g.Sum(ap => ap.AmountPreview), AmountReal = g.Sum(a => a.AmountReal) })
                    .First();

                planForTracking.AmountPreview = Math.Round(planTrackingAmountStore.AmountPreview, 2);
                planForTracking.AmountReal = Math.Round(planTrackingAmountStore.AmountReal, 2);
                planForTracking.GaugeValue = CalculatePercentage(planTrackingAmountStore.AmountReal, planTrackingAmountStore.AmountPreview);
            }


            return planForTracking;
        }

        private List<PosteForTrackingDto> GetPostesForTracking(List<VPlanGlobal> vPlanGlobal,int idPlan)
        {
            List<Poste> postes = _posteRepository.GetAll();
            List<PosteForTrackingDto> postesForTracking = new List<PosteForTrackingDto>();

            foreach (var poste in postes)
            {
                PosteForTrackingDto posteForTracking = new PosteForTrackingDto();
                posteForTracking.Poste = _mapper.Map<SelectDto>(poste);

                var vByPoste = vPlanGlobal.Where(x => x.IdPoste == poste.Id).ToList();
                //recherche des planPoste et affectation au planTrackingDto
                posteForTracking.PlanPostes = GetPlanPostesForTracking(vByPoste, idPlan, poste.Id);

                if (vByPoste.Count > 0)
                { 
                    //sommme pour le poste
                    PlanTrackingAmountStoreDto planTrackingAmountStore = vByPoste
                        .GroupBy(x => new { x.PreviewAmount, x.IdPoste })
                        .Select(g => new PlanTrackingAmountStoreDto { Id = g.Key.IdPoste.Value, Label = g.Key.IdPoste.Value.ToString(), AmountPreview = g.Key.PreviewAmount.Value, AmountReal = g.Sum(a => a.AmountOperation.Value) })
                        .GroupBy(x => new { x.Id })
                        .Select(g => new PlanTrackingAmountStoreDto { Id = g.Key.Id, Label = g.Key.Id.ToString(), AmountPreview = g.Sum(ap => ap.AmountPreview), AmountReal = g.Sum(a => a.AmountReal) })
                        .First();

                    posteForTracking.AmountPreview = Math.Round(planTrackingAmountStore.AmountPreview, 2);
                    posteForTracking.AmountReal = Math.Round(planTrackingAmountStore.AmountReal, 2);
                    posteForTracking.GaugeValue = CalculatePercentage(planTrackingAmountStore.AmountReal, planTrackingAmountStore.AmountPreview);
                }
                postesForTracking.Add(posteForTracking);

            }
            return postesForTracking;
        }

        private List<PlanPosteForTrackingDto> GetPlanPostesForTracking(List<VPlanGlobal> vByPoste, int idPlan,int idPoste)
        {
            List<PlanPosteForTrackingDto> PlanPostesForTracking = new List<PlanPosteForTrackingDto>();
            
            //somme des PlanPoste group by PlanPoste
            List<PlanTrackingAmountStoreDto> planTrackingAmountStores = vByPoste
                .GroupBy(x => new { x.PreviewAmount, x.IdPlanPoste,x.PlanPosteLabel })
                .Select(g => new PlanTrackingAmountStoreDto { Id = g.Key.IdPlanPoste.Value, Label=g.Key.PlanPosteLabel, AmountPreview = g.Key.PreviewAmount.Value, AmountReal = g.Sum(a => a.AmountOperation.Value) })
                .ToList();
            foreach (var planTrackingAmountStore in planTrackingAmountStores)
            {
                PlanPosteForTrackingDto planPosteForTracking = new PlanPosteForTrackingDto
                {
                    IdPlanPoste = planTrackingAmountStore.Id,
                    //IdPlan = idPlan,
                    //IdPoste = idPoste,
                    Label = planTrackingAmountStore.Label,
                    AmountReal = Math.Round(planTrackingAmountStore.AmountReal,2),
                    AmountPreview = Math.Round(planTrackingAmountStore.AmountPreview,2),
                    GaugeValue = CalculatePercentage(planTrackingAmountStore.AmountReal, planTrackingAmountStore.AmountPreview)
            };
                var vByPlanPoste = vByPoste.Where(x => x.IdPlanPoste == planTrackingAmountStore.Id).ToList();
                planPosteForTracking.PlanPosteUsers = GetPlanPosteUsersForTracking(planPosteForTracking, planTrackingAmountStore.Id);
                
                PlanPostesForTracking.Add(planPosteForTracking);
            }

            return PlanPostesForTracking;
        }

        private List<PlanPosteUserForTrackingDto> GetPlanPosteUsersForTracking(PlanPosteForTrackingDto planPosteForTrackingDto, int idPlanPoste)
        {
            List<PlanPosteUser> planPosteUsers = _planPosteUserRepository.GetByIdPlanPoste(idPlanPoste);
            List<PlanPosteUserForTrackingDto> planPosteUsersForTracking = new List<PlanPosteUserForTrackingDto>();
            foreach ( var planPosteUser in planPosteUsers)
            {
                if (planPosteUser.PercentagePart != 0)
                {
                    PlanPosteUserForTrackingDto planPosteUserForTrackingDto = new PlanPosteUserForTrackingDto
                    {
                        FirstName = planPosteUser.PlanUser.User.FirstName,
                        PercentagePart = planPosteUser.PercentagePart,
                        AmountPreview = Math.Round(planPosteUser.PercentagePart * planPosteForTrackingDto.AmountPreview / 100, 2),
                        AmountReal = Math.Round(planPosteUser.PercentagePart * planPosteForTrackingDto.AmountReal / 100, 2)
                    };
                    planPosteUserForTrackingDto.GaugeValue = CalculatePercentage(planPosteUserForTrackingDto.AmountReal, planPosteUserForTrackingDto.AmountPreview);
                    
                    planPosteUsersForTracking.Add(planPosteUserForTrackingDto);
                }
            }

            return planPosteUsersForTracking;
        }

        private double CalculatePercentage(double AmountBase,double Amount)
        {
            return AmountBase != 0
                ? Math.Round(AmountBase * 100 / Amount, 2)
                : 0;

        }

        public List<AsForTableDto> GetPlanAmountTable(FilterPlanAmount filter)
        {
            if (filter.IdPlanPoste.HasValue)
            {
                List<PlanPosteReference> planPosteReferences = _planPosteReferenceService.GetByIdPlanPoste(filter.IdPlanPoste.Value);
                List<AsForTableDto> asForTableDto = _accountStatementService.GetByPlanPosteReferences(planPosteReferences,filter.MonthYear);

                return asForTableDto;

            }

            return null;
        }
    }
}
