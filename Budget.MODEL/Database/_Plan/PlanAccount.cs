using System.ComponentModel.DataAnnotations.Schema;

namespace Budget.MODEL.Database
{
    [Table("PLAN_ACCOUNT", Schema = "plan")]
    public class PlanAccount
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("ID_PLAN")]
        public int IdPlan { get; set; }

        [ForeignKey("IdPlan")]
        public Plan Plan { get; set; }

        [Column("ID_ACCOUNT")]
        public int IdAccount { get; set; }

        [ForeignKey("IdAccount")]
        public Account Account { get; set; }

    }

}
