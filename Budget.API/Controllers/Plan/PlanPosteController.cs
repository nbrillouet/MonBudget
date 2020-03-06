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
    [Route("api/plan-postes")]
    public class PlanPosteController : Controller
    {
        //private readonly IPlanService _planService;
        private readonly IPlanPosteService _planPosteService;
        private readonly IPlanPosteReferenceService _planPosteReferenceService;
        //private readonly IPlanDetailService _planDetailService;
        private readonly IPlanPosteDetailService _planPosteDetailService;
        //private readonly IPlanTrackingService _planTrackingService;
        //private readonly IPlanUserService _planUserService;
        private readonly IPlanPosteFrequencyService _planPosteFrequencyService;
        //private readonly IAccountStatementPlanService _accountStatementPlanService;
        private readonly IFilterService _filterService;

        public PlanPosteController(
            IPlanPosteService planPosteService,
            //IPlanService planService,
            IPlanPosteReferenceService planPosteReferenceService,
            //IPlanDetailService planDetailService,
            IPlanPosteDetailService planPosteDetailService,
            //IPlanTrackingService planTrackingService,
            //IPlanUserService planUserService,
            IPlanPosteFrequencyService planPosteFrequencyService,
            //IAccountStatementPlanService accountStatementPlanService,
            IFilterService filterService
            )
        {
            _planPosteService = planPosteService;
            //_planService = planService;
            _planPosteReferenceService = planPosteReferenceService;
            //_planDetailService = planDetailService;
            _planPosteDetailService = planPosteDetailService;
            //_planTrackingService = planTrackingService;
            //_planUserService = planUserService;
            //_planPosteFrequencyService = planPosteFrequencyService;
            //_accountStatementPlanService = accountStatementPlanService;
            _filterService = filterService;
        }

        [HttpPost]
        [Route("plan-poste-table-filter")]
        public IActionResult getPlanPosteTableFilter([FromBody] FilterPlanPosteTableSelected filter)
        {
            var result = _filterService.GetFilterPlanPosteTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("plan-poste-table-data")]
        public IActionResult GetPlanPosteTableData([FromBody] FilterPlanPosteTableSelected filter)
        {
            var pagedList = _planPosteService.GetPlanPosteTable(filter);

            return Ok(pagedList);
        }

        

        [HttpPost("plan-poste-detail-save")]
        public IActionResult SavePlanPosteDetail([FromBody] PlanPosteForDetailDto planPosteForDetail)
        {
            return Ok(_planPosteDetailService.Save(planPosteForDetail));
        }

        [HttpPost("plan-poste-detail-delete")]
        public IActionResult DeletePlanPosteDetail([FromBody] List<int> listIdPlanPoste)
        {
            _planPosteDetailService.Delete(listIdPlanPoste);
            return Ok("SUPPRESSION OK");
        }

        [HttpGet("{idPlanPoste}/user-groups/{idUserGroup}/plans/{idPlan}/postes/{idPoste}/plan-poste-detail")]
        public IActionResult GetPlanPosteDetail(int idPlanPoste, int idUserGroup, int idPlan, int idPoste)
        {
            if (idPlanPoste != 0)
            {
                return Ok(_planPosteDetailService.GetForDetailById(idUserGroup, idPlanPoste));
            }
            return Ok(_planPosteDetailService.GetForDetailById(idUserGroup, idPlan, idPoste));
        }

        //[HttpGet("plans/{idPlan}/user-groups/{idUserGroup}/as-not-in-plan")]
        //public IActionResult GetAsNotInPlan(int idPlan, int idUserGroup)
        //{

        //    var asifForTableDto = _accountStatementPlanService.GetAsNotInPlan(idPlan, idUserGroup);

        //    return Ok(asifForTableDto);
        //}

        //[HttpGet("plan-poste-references/user-groups/{idUserGroup}/plan-postes/{idPlanPoste}/reference-table/{idReferenceTable}/postes/{idPoste}/combo-reference")]
        //public IActionResult GetPlanPosteReferenceDetail(int idUserGroup, int idPlanPoste, int idReferenceTable, int idPoste)
        //{
        //    return Ok(_planPosteReferenceService.GetListForComboByIdPlanPoste(idUserGroup, idPlanPoste, idReferenceTable, idPoste));
        //}

        //[HttpPost("plans/{idPlan}/plan-tracking")]
        //public IActionResult GetPlanTrackingByIdPlan(int idPlan, [FromBody] FilterPlanTracking filter)
        //{

        //    var planForDetailDto = _planTrackingService.Get(filter);

        //    return Ok(planForDetailDto);
        //}

        //[HttpPost]
        //[Route("plan-amounts/filter")]
        //public IActionResult GetPlanAmountTable([FromBody] FilterPlanAmount filter)
        //{
        //    var results = _planTrackingService.GetPlanAmountTable(filter);

        //    return Ok(results);

        //}

        [HttpGet("plan-poste-frequencies/plan-postes/{idPlanPoste}/is-annual-estimation/{isAnnualEstimation}")]
        public IActionResult GetPlanPosteFrequencies(int idPlanPoste, bool isAnnualEstimation)
        {
            if (idPlanPoste != 0)
            {
                var toto = _planPosteFrequencyService.GetByIdPlanPoste(idPlanPoste);
                if ((toto.Count == 1 && !isAnnualEstimation) || (toto.Count > 1 && isAnnualEstimation))
                    return Ok(_planPosteFrequencyService.InitForCreation(isAnnualEstimation));
                else
                    return Ok(toto);
            }
            return Ok(_planPosteFrequencyService.InitForCreation(isAnnualEstimation));

        }
    }
}
