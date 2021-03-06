﻿using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IVPlanGlobalService
    {
        List<VPlanGlobal> Get(FilterPlanTracking filter);
        List<VPlanGlobal> GetByIdPlan(int IdPlan);
    }


}
