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
        private readonly IMapper _mapper;
        private readonly IPlanService _planService;
        private readonly IPlanPosteService _planPosteService;
        private readonly IPlanPosteReferenceService _planPosteReferenceService;
        private readonly IPlanDetailService _planDetailService;
        private readonly IPlanPosteDetailService _planPosteDetailService;
        private readonly IPlanTrackingService _planTrackingService;
        private readonly IPlanUserService _planUserService;

        public PlanController(
            IMapper mapper,
            IPlanService planService,
            IPlanPosteService planPosteService,
            IPlanPosteReferenceService planPosteReferenceService,
            IPlanDetailService planDetailService,
            IPlanPosteDetailService planPosteDetailService,
            IPlanTrackingService planTrackingService,
            IPlanUserService planUserService
            )
        {
            _mapper = mapper;
            _planService = planService;
            _planPosteService = planPosteService;
            _planPosteReferenceService = planPosteReferenceService;
            _planDetailService = planDetailService;
            _planPosteDetailService = planPosteDetailService;
            _planTrackingService = planTrackingService;
            _planUserService = planUserService;
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

        [HttpGet("plans/{id}/plan-detail")]
        public IActionResult Get(int id)
        {
            var planForDetailDto = _planDetailService.GetForDetail(id);

            return Ok(planForDetailDto);
        }



        [HttpPost("plan-details/save")]
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

        [HttpGet("plan-postes/{id}/plans/{idPlan}/postes/{idPoste}/plan-poste-detail")]
        public IActionResult GetPlanPosteDetail(int id,int idPlan,int idPoste)
        {
            if (id != 0)
            {
                return Ok(_planPosteDetailService.GetForDetailById(id));
            }
            return Ok(_planPosteDetailService.GetForDetailById(id, idPlan, idPoste));
        }

        [HttpGet("plan-poste-references/plan-postes/{idPlanPoste}/reference-table/{idReferenceTable}/postes/{idPoste}/combo-reference")]
        public IActionResult GetPlanPosteReferenceDetail(int idPlanPoste, int idReferenceTable, int idPoste)
        {
            return Ok(_planPosteReferenceService.GetListForComboByIdPlanPoste(idPlanPoste, idReferenceTable, idPoste));
        }

        [HttpPost("plans/{idPlan}/plan-tracking")]
        public IActionResult GetPlanTrackingByIdPlan(int idPlan, [FromBody] FilterPlanTracking filter)
        {

            var planForDetailDto = _planTrackingService.Get(filter);

            return Ok(planForDetailDto);
        }

    }
}
