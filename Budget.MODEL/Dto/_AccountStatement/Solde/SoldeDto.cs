using Budget.HELPER;
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
        
        private double _credit;
        [Key]
        public double Credit
        {
            get => MathHelper.RoundIt(_credit, 2);
            set => _credit = MathHelper.RoundIt(value, 2);
        }

        private double _debit;
        public double Debit
        {
            get => MathHelper.RoundIt(_debit, 2);
            set => _debit = MathHelper.RoundIt(value, 2);
        }

        private double _total;
        public double Total
        {
            get => MathHelper.RoundIt(_total, 2);
            set => _total = MathHelper.RoundIt(value, 2);
        }
        private double _solde;
        public double Solde
        {
            get => MathHelper.RoundIt(_solde, 2);
            set => _solde = MathHelper.RoundIt(value, 2);
        }

    }
}
