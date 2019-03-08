using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Dto.Finance
{
    [NotMapped]
    public class AsEvolutionDto
    {
        [Key]
        public string Month { get; set; }
        public int Year { get; set; }
        public decimal Credit { get; set; }
        public decimal Debit { get; set; }
        public decimal Balance { get; set; }
    }
}
