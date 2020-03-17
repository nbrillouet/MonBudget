using AutoMapper;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;

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
        private readonly IMonthService _frequencyService;
        private readonly IAccountStatementPlanService _accountStatementPlanService;
        private readonly IPlanAccountService _planAccountService;

        public PlanPosteDetailService(
            IMapper mapper,
            IPlanPosteService planPosteService,
            IPosteService posteService,
            IPlanPosteUserService planPosteUserService,
            IReferenceTableService referenceTableService,
            IPlanPosteReferenceService planPosteReferenceService,
            IPlanPosteFrequencyService planPosteFrequencyService,
            IMonthService frequencyService,
            IAccountStatementPlanService accountStatementPlanService,
            IPlanAccountService planAccountService

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
            _planAccountService = planAccountService;
        }

        public PlanPosteForDetailDto GetForDetailById(int idUserGroup, int idPlanPoste)
        {
            var planPoste = _planPosteService.GetById(idPlanPoste);

            PlanPosteForDetailDto planPosteForDetailDto = _mapper.Map<PlanPosteForDetailDto>(planPoste);
            planPosteForDetailDto.Poste = _mapper.Map<Select>(planPoste.Poste);

            var referenceTableList = _referenceTableService.GetAll();
            planPosteForDetailDto.ReferenceTable.List = _mapper.Map<List<Select>>(referenceTableList);
            planPosteForDetailDto.ReferenceTable.Selected =  _mapper.Map<Select>(planPoste.ReferenceTable);



            planPosteForDetailDto.PlanPosteUser = _planPosteUserService.GetByIdPlanPoste(planPoste.Id);

            planPosteForDetailDto.PlanPosteReference = _planPosteReferenceService.GetListForComboByIdPlanPoste(idUserGroup, planPoste.Id, planPoste.ReferenceTable.Id, planPoste.Poste.Id);

            planPosteForDetailDto.PlanPosteFrequencies = _planPosteFrequencyService.GetByIdPlanPoste(planPoste.Id);


            return planPosteForDetailDto;
        }

        public PlanPosteForDetailDto GetForDetailById(int idUserGroup, int idPlan, int idPoste)
        {
            PlanPosteForDetailDto planPosteForDetailDto = new PlanPosteForDetailDto();
            planPosteForDetailDto.IdPlan = idPlan;
            planPosteForDetailDto.IdPoste = idPoste;
            planPosteForDetailDto.Poste = _mapper.Map<Select>(_posteService.GetById(idPoste));

            var referenceTableList = _referenceTableService.GetAll();
            planPosteForDetailDto.ReferenceTable.List = _mapper.Map<List<Select>>(referenceTableList);
            planPosteForDetailDto.ReferenceTable.Selected = new Select();

            planPosteForDetailDto.PlanPosteUser = _planPosteUserService.InitForCreation(idPlan);
            
            planPosteForDetailDto.PlanPosteReference = new ComboMultiple<SelectGroupDto>();

            planPosteForDetailDto.PlanPosteFrequencies = _planPosteFrequencyService.InitForCreation(false);

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

                //UpdatePlanPosteReference(planPoste.Id, planPosteForDetailDto.ReferenceTable.Selected.Id, planPosteForDetailDto.PlanPosteReference.ListSelected);

                //UpdatePlanPosteFrequency(planPoste.Id, planPosteForDetailDto.PlanPosteFrequencies);

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


            }

            //UpdatePlanAccount(planPosteForDetailDto.IdPlan, planPosteForDetailDto.Accounts.ListSelected);
            UpdatePlanPosteReference(planPoste.Id, planPosteForDetailDto.ReferenceTable.Selected.Id, planPosteForDetailDto.PlanPosteReference.ListSelected);
            UpdatePlanPosteFrequency(planPoste.Id, planPosteForDetailDto.PlanPosteFrequencies);

            // MAJ accountStatementPlan: A faire apres enregistrement 
            _accountStatementPlanService.SaveByIdPlan(planPoste.IdPlan);

            return planPoste.Id;
        }

        private void UpdatePlanPosteReference(int idPlanPoste,int idReferenceTable, List<Select> planPosteReferences)
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
