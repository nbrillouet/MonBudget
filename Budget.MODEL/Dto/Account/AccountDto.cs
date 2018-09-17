using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class AccountDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Label { get; set; }
        public Bank Bank { get; set; }
        public double StartAmount { get; set; }
        public AccountType AccountType { get; set; }
        public double AlertThreshold { get; set; }
    }
}
