using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    //public class AccountDto
    //{
    //    public int Id { get; set; }
    //    public string Number { get; set; }
    //    public string Label { get; set; }
    //    public BankSubFamily BankAgency { get; set; }
    //    public double StartAmount { get; set; }
    //    public AccountType AccountType { get; set; }
    //    public double AlertThreshold { get; set; }
    //}

    public class AccountForLabelDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Label { get; set; }
    }

    public class AccountForDetailDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Label { get; set; }
        public ComboSimple<Select> BankFamily { get; set; }
        public ComboSimple<Select> BankSubFamily { get; set; }
        public ComboSimple<Select> BankAgency { get; set; }
        public ComboSimple<Select> AccountType { get; set; }
        public List<Select> LinkedUsers { get; set; }
        public double StartAmount { get; set; }
        public double AlertThreshold { get; set; }
    }
}
