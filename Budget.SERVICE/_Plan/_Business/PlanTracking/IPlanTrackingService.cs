using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanTrackingService
    {
        PlanForTrackingDto Get(FilterPlanTracking filterPlanTracking);
        List<AsGridDto> GetPlanAmountTable(FilterPlanAmount filter);
    }
}
