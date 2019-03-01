using AutoMapper;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class PlanPosteDetailService : IPlanPosteDetailService
    {
        private readonly IMapper _mapper;
        private readonly IPlanPosteService _planPosteService;
        private readonly IPosteService _posteService;
        private readonly IPlanPosteUserService _planPosteUserService;
        private readonly IReferenceTableService _referenceTableService;
        private readonly IPlanPosteReferenceService _planPosteReferenceService;
        private readonly IPlanPosteFrequencyService _planPosteFrequencyService;
        private readonly IFrequencyService _frequencyService;
        private readonly IAccountStatementPlanService _accountStatementPlanService;


        public PlanPosteDetailService(
            IMapper mapper,
            IPlanPosteService planPosteService,
            IPosteService posteService,
            IPlanPosteUserService planPosteUserService,
            IReferenceTableService referenceTableService,
            IPlanPosteReferenceService planPosteReferenceService,
            IPlanPosteFrequencyService planPosteFrequencyService,
            IFrequencyService frequencyService,
            IAccountStatementPlanService accountStatementPlanService

            )
        {
            _mapper = mapper;
            _planPosteService = planPosteService;
            _posteService = posteService;
            _planPosteUserService = planPosteUserService;
            _referenceTableService = referenceTableService;
            _planPosteReferenceService = planPosteReferenceService;
            _planPosteFrequencyService = planPosteFrequencyService;
            _frequencyService = frequencyService;
            _accountStatementPlanService = accountStatementPlanService;
        }

        public PlanPosteForDetailDto GetForDetailById(int id)
        {
            var planPoste = _planPosteService.GetById(id);

            PlanPosteForDetailDto planPosteForDetailDto = _mapper.Map<PlanPosteForDetailDto>(planPoste);
            planPosteForDetailDto.Poste = _mapper.Map<SelectDto>(planPoste.Poste);

            var referenceTableList = _referenceTableService.GetAll();
            planPosteForDetailDto.ReferenceTable.List = _mapper.Map<List<SelectDto>>(referenceTableList);
            planPosteForDetailDto.ReferenceTable.Selected =  _mapper.Map<SelectDto>(planPoste.ReferenceTable);

            planPosteForDetailDto.PlanPosteUser = _planPosteUserService.GetByIdPlanPoste(planPoste.Id);

            planPosteForDetailDto.PlanPosteReference = _planPosteReferenceService.GetListForComboByIdPlanPoste(planPoste.Id, planPoste.ReferenceTable.Id, planPoste.Poste.Id);

            planPosteForDetailDto.PlanPosteFrequencies = _planPosteFrequencyService.GetByIdPlanPoste(planPoste.Id);

            //planPosteForDetailDto.Frequencies = _frequencyService.GetSelectAll();

            return planPosteForDetailDto;
        }

        public PlanPosteForDetailDto GetForDetailById(int id, int idPlan, int idPoste)
        {
            PlanPosteForDetailDto planPosteForDetailDto = new PlanPosteForDetailDto();
            planPosteForDetailDto.IdPlan = idPlan;
            planPosteForDetailDto.IdPoste = idPoste;
            planPosteForDetailDto.Poste = _mapper.Map<SelectDto>(_posteService.GetById(idPoste));

            var referenceTableList = _referenceTableService.GetAll();
            planPosteForDetailDto.ReferenceTable.List = _mapper.Map<List<SelectDto>>(referenceTableList);
            planPosteForDetailDto.ReferenceTable.Selected = new SelectDto();

            planPosteForDetailDto.PlanPosteUser = _planPosteUserService.InitForCreation(idPlan);
            
            planPosteForDetailDto.PlanPosteReference = new ComboMultiple<SelectGroupDto>();

            planPosteForDetailDto.PlanPosteFrequencies = _planPosteFrequencyService.InitForCreation();

            return planPosteForDetailDto;
        }

        public int Save(PlanPosteForDetailDto planPosteForDetailDto)
        {
            PlanPoste planPoste = null;
            if (planPosteForDetailDto.Id == 0)
            {
                //sauvegarde planPoste
                planPoste = new PlanPoste
                {
                    Id = 0,
                    IdPlan = planPosteForDetailDto.IdPlan,
                    IdPoste = planPosteForDetailDto.IdPoste,
                    IdReferenceTable = planPosteForDetailDto.ReferenceTable.Selected.Id,
                    Label= planPosteForDetailDto.Label
                };
                _planPosteService.Create(planPoste);

                //sauvegarde PlanPosteUser
                foreach ( var planPosteUser in planPosteForDetailDto.PlanPosteUser)
                {
                    PlanPosteUser ppu = new PlanPosteUser
                    {
                        Id = 0,
                        IdPlanPoste = planPoste.Id,
                        IdPlanUser = planPosteUser.IdPlanUser,
                        IsSalaryEstimatedPart = Convert.ToInt32(planPosteUser.IsSalaryEstimatedPart),
                        PercentagePart = planPosteUser.Percentage
                    };
                    _planPosteUserService.Create(ppu);
                }

                UpdatePlanPosteReference(planPoste.Id, planPosteForDetailDto.ReferenceTable.Selected.Id, planPosteForDetailDto.PlanPosteReference.ListSelected);

                UpdatePlanPosteFrequency(planPoste.Id, planPosteForDetailDto.PlanPosteFrequencies);

            }
            else
            {
                //Sauvegarde PlanPoste
                planPoste = _planPosteService.GetById(planPosteForDetailDto.Id);
                planPoste.IdReferenceTable = planPosteForDetailDto.ReferenceTable.Selected.Id;
                planPoste.Label = planPosteForDetailDto.Label;

                _planPosteService.Update(planPoste);

                //sauvegarde PlanPosteUser
                foreach (var planPosteUser in planPosteForDetailDto.PlanPosteUser)
                {
                    PlanPosteUser ppu = _planPosteUserService.GetById(planPosteUser.Id);
                    ppu.IsSalaryEstimatedPart = Convert.ToInt32(planPosteUser.IsSalaryEstimatedPart);
                    ppu.PercentagePart = planPosteUser.Percentage;
 
                    _planPosteUserService.Update(ppu);
                }

                UpdatePlanPosteReference(planPoste.Id, planPosteForDetailDto.ReferenceTable.Selected.Id, planPosteForDetailDto.PlanPosteReference.ListSelected);
                UpdatePlanPosteFrequency(planPoste.Id, planPosteForDetailDto.PlanPosteFrequencies);
            }

            // MAJ accountStatementPlan: A faire apres enregistrement 
            _accountStatementPlanService.SaveByIdPlan(planPoste.IdPlan);

            return planPoste.Id;
        }

        private void UpdatePlanPosteReference(int idPlanPoste,int idReferenceTable, List<SelectDto> planPosteReferences)
        {
            //sauvegarde PlanPosteReference
            //suppression des PlanPosteReference pour l'idPoste
            _planPosteReferenceService.DeleteByIdPlanPoste(idPlanPoste);
            foreach (var planPosteReference in planPosteReferences)
            {
                PlanPosteReference ppr = new PlanPosteReference
                {
                    Id = 0,
                    IdPlanPoste = idPlanPoste,
                    IdReference = planPosteReference.Id,
                    IdReferenceTable = idReferenceTable
                };
                _planPosteReferenceService.Create(ppr);
            }
        }

        private void UpdatePlanPosteFrequency(int idPlanPoste, List<PlanPosteFrequencyForDetailDto> planPosteFrequencies)
        {
            //Sauvegarde PlanPosteFrequency
            //suppression des PlanPosteFrequency pour l'idPoste
            _planPosteFrequencyService.DeleteByIdPlanPoste(idPlanPoste);
            foreach (var planPosteFrequency in planPosteFrequencies)
            {
                PlanPosteFrequency ppf = new PlanPosteFrequency
                {
                    Id = 0,
                    IdFrequency = planPosteFrequency.Frequency.Id,
                    IdPlanPoste = idPlanPoste,
                    PreviewAmount = planPosteFrequency.PreviewAmount
                };
                _planPosteFrequencyService.Create(ppf);
            }
        }

        public void Delete(List<int> listIdPlanPoste)
        {
            foreach(var idPlanPoste in listIdPlanPoste)
            {
                PlanPoste planPoste = _planPosteService.GetById(idPlanPoste);
                if(planPoste!=null)
                {
                    _planPosteUserService.DeleteByIdPlanPoste(planPoste.Id);
                    _planPosteFrequencyService.DeleteByIdPlanPoste(planPoste.Id);
                    _planPosteReferenceService.DeleteByIdPlanPoste(planPoste.Id);

                    _planPosteService.Delete(planPoste);
                }
            }
        }
    }
}
