﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Database
{
    public class VPlanGlobal
    {
        public int? IdAccountStatement { get; set; }
        public DateTime? DateIntegration { get; set; }
        public double? AmountOperation { get; set; }
        public double? PreviewAmount { get; set; }
        //public string FirstName { get; set; }
        //public double? PA { get; set; }
        //public double? AU { get; set; }
        public int? IdPlan { get; set; }
        public int? IdPlanPoste { get; set; }
        public string PlanPosteLabel { get; set; }
        public int? IdPoste { get; set; }
        public int? IdReference { get; set; }
        public string LabelReference { get; set; }
        public int? Month { get; set; }
        public int? Year { get; set; }
    }
}
