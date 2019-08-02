using AutoMapper;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Budget.SERVICE;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api")]
    public class PlanController : Controller
    {
        private readonly IPlanService _planService;
        private readonly IPlanPosteReferenceService _planPosteReferenceService;
        private readonly IPlanDetailService _planDetailService;
        private readonly IPlanPosteDetailService _planPosteDetailService;
        private readonly IPlanTrackingService _planTrackingService;
        private readonly IPlanUserService _planUserService;
        private readonly IPlanPosteFrequencyService _planPosteFrequencyService;
        private readonly IAccountStatementPlanService _accountStatementPlanService;

        public PlanController(
            IPlanService planService,
            IPlanPosteReferenceService planPosteReferenceService,
            IPlanDetailService planDetailService,
            IPlanPosteDetailService planPosteDetailService,
            IPlanTrackingService planTrackingService,
            IPlanUserService planUserService,
            IPlanPosteFrequencyService planPosteFrequencyService,
            IAccountStatementPlanService accountStatementPlanService
            )
        {
            _planService = planService;
            _planPosteReferenceService = planPosteReferenceService;
            _planDetailService = planDetailService;
            _planPosteDetailService = planPosteDetailService;
            _planTrackingService = planTrackingService;
            _planUserService = planUserService;
            _planPosteFrequencyService = planPosteFrequencyService;
            _accountStatementPlanService = accountStatementPlanService;
        }

        [HttpPost]
        [Route("plans/filter")]
        public async Task<IActionResult> GetPlanTable([FromBody] FilterPlan filter)
        {
            var pagedList = _planService.GetPlanTable(filter);

            return Ok(pagedList);

        }

        [HttpGet("plans/combo-filter")]
        public IActionResult GetPlanTableComboFilter()
        {
            var plan = _planService.GetPlanTableComboFilter();

            return Ok(plan);
        }

        [HttpGet("plans/users/{idUser}/list")]
        public IActionResult GetPlansByIdUser(int idUser)
        {
            var plan = _planUserService.GetPlansByIdUser(idUser);

            return Ok(plan);
        }

        [HttpGet("user-groups/{idUserGroup}/plans/{idPlan}/plan-detail")]
        public IActionResult Get(int idPlan,int idUserGroup)
        {
            var planForDetailDto = _planDetailService.GetForDetail(idPlan, idUserGroup);

            return Ok(planForDetailDto);
        }



        [HttpPost("plans/plan-details/save")]
        public IActionResult SavePlanDetail([FromBody] PlanForDetailDto planForDetailDto)
        {
            try
            {
                _planDetailService.Save(planForDetailDto);
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Erreur lors de la sauvegarde", e.Message.ToString());
                //ModelState.AddModelError("Erreur lors de la sauvegarde", "complément erreur");
                //ModelState.AddModelError("Erreur 2", "2");
                return BadRequest(ModelState);
            }

            return Ok(planForDetailDto.Plan.Id);
        }

        [HttpPost("plan-poste-details/save")]
        public IActionResult SavePlanPosteDetail([FromBody] PlanPosteForDetailDto planPosteForDetailDto)
        {
             return Ok(_planPosteDetailService.Save(planPosteForDetailDto));
        }

        [HttpPost("plan-poste-details/delete")]
        public IActionResult DeletePlanPosteDetail([FromBody] List<int> listIdPlanPoste)
        {
            _planPosteDetailService.Delete(listIdPlanPoste);
            return Ok("SUPPRESSION OK");
        }

        [HttpGet("plan-postes/{id}/user-groups/{idUserGroup}/plans/{idPlan}/postes/{idPoste}/plan-poste-detail")]
        public IActionResult GetPlanPosteDetail(int id,int idUserGroup, int idPlan,int idPoste)
        {
            if (id != 0)
            {
                return Ok(_planPosteDetailService.GetForDetailById(idUserGroup,id));
            }
            return Ok(_planPosteDetailService.GetForDetailById(idUserGroup, idPlan, idPoste));
        }

        [HttpGet("plans/{idPlan}/user-groups/{idUserGroup}/as-not-in-plan")]
        public IActionResult GetAsNotInPlan(int idPlan, int idUserGroup)
        {

            var asifForTableDto = _accountStatementPlanService.GetAsNotInPlan(idPlan, idUserGroup);

            return Ok(asifForTableDto);
        }

        [HttpGet("plan-poste-references/user-groups/{idUserGroup}/plan-postes/{idPlanPoste}/reference-table/{idReferenceTable}/postes/{idPoste}/combo-reference")]
        public IActionResult GetPlanPosteReferenceDetail(int idUserGroup, int idPlanPoste, int idReferenceTable, int idPoste)
        {
            return Ok(_planPosteReferenceService.GetListForComboByIdPlanPoste(idUserGroup, idPlanPoste, idReferenceTable, idPoste));
        }

        [HttpPost("plans/{idPlan}/plan-tracking")]
        public IActionResult GetPlanTrackingByIdPlan(int idPlan, [FromBody] FilterPlanTracking filter)
        {

            var planForDetailDto = _planTrackingService.Get(filter);

            return Ok(planForDetailDto);
        }

        [HttpPost]
        [Route("plan-amounts/filter")]
        public IActionResult GetPlanAmountTable([FromBody] FilterPlanAmount filter)
        {
            var results = _planTrackingService.GetPlanAmountTable(filter);

            return Ok(results);

        }
        
        [HttpGet("plan-poste-frequencies/plan-postes/{idPlanPoste}/is-annual-estimation/{isAnnualEstimation}")]
        public IActionResult GetPlanPosteFrequencies(int idPlanPoste,bool isAnnualEstimation)
        {
            if(idPlanPoste!=0)
            {
                var toto = _planPosteFrequencyService.GetByIdPlanPoste(idPlanPoste);
                if ((toto.Count == 1 && !isAnnualEstimation) || (toto.Count>1 && isAnnualEstimation))
                   return Ok(_planPosteFrequencyService.InitForCreation(isAnnualEstimation));
                else
                    return Ok(toto);
            }
            return Ok(_planPosteFrequencyService.InitForCreation(isAnnualEstimation));

        }
    }
}
