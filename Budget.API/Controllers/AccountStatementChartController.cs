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
    [Route("api/account-statement-charts")]
    public class AccountStatementChartController: Controller
    {
        private readonly IAccountStatementChartService _accountStatementChartService;

        public AccountStatementChartController(
            IAccountStatementChartService accountStatementChartService

            )
        {
            _accountStatementChartService = accountStatementChartService;
        }

        [HttpPost]
        [Route("chart-evolution-brut")]
        public IActionResult GetAsChartEvolutionBrut([FromBody] FilterAsTableSelected filter)
        {
            var result = _accountStatementChartService.GetAsChartEvolutionBrut(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("chart-evolution-no-int-transfer")]
        public IActionResult GetAsChartEvolutionNoIntTransfer([FromBody] FilterAsTableSelected filter)
        {
            var result = _accountStatementChartService.GetAsChartEvolutionNoIntTransfer(filter);

            return Ok(result);
        }
    }
}
