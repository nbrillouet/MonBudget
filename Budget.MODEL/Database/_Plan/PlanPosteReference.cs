using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("PLAN_POSTE_REFERENCE")]
    public class PlanPosteReference
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("ID_PLAN_POSTE")]
        public int IdPlanPoste { get; set; }

        [ForeignKey("IdPlanPoste")]
        public PlanPoste PlanPoste { get; set; }

        [Column("ID_REFERENCE_TABLE")]
        public int IdReferenceTable { get; set; }

        [ForeignKey("IdReferenceTable")]
        public ReferenceTable ReferenceTable { get; set; }


        [Column("ID_REFERENCE")]
        public int IdReference { get; set; }
    }
}
