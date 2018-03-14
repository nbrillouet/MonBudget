using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("OPERATION_METHOD")]
    public class OperationMethod
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL")]
        [StringLength(50)]
        public string Label { get; set; }

        [NotMapped]
        public string KeywordWork { get; set; }
    }

    public enum EnumOperationMethod
    {
        Inconnu = 1,
        PaiementCarte = 2,
        Cotisation = 3,
        Virement = 4,
        RemiseCheque = 5,
        Prelevement = 6,
        Frais = 7,
        RetraitCarte = 8,
        EmissionCheque = 20

    }
}
