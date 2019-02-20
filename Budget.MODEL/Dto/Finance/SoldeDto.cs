using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Dto
{
    [NotMapped]
    public class SoldeDto
    {
        //public int Id { get; set; }

        //public int IdAccount { get; set; }
        //public DateTime DateStart { get; set; }
        //public DateTime DateEnd { get; set; }
        [Key]
        public decimal Credit { get; set; }
        public decimal Debit { get; set; }
        public decimal Total { get; set; }
        public decimal Solde { get; set; }
        //public bool IsWithITransfer { get; set; }

    }
}
