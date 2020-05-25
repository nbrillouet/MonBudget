using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class AccountForTable
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Label { get; set; }
        public BankAgencyForDetail BankAgency { get; set; }
        //public Select BankAgency { get; set; }
        //public Select BankSubFamily { get; set; }
        //public SelectCode BankFamily { get; set; }
        public double StartAmount { get; set; }
        public Select AccountType { get; set; }
        public double AlertThreshold { get; set; }
        public List<Select> LinkedUsers { get; set; }
        public double Solde { get; set; }
    }

    public class AccountForLabelDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Label { get; set; }
    }

    public class AccountForDetail
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Label { get; set; }
        //public Select BankFamily { get; set; }
        //public Select BankSubFamily { get; set; }
        public BankAgencyForDetail BankAgency { get; set; }
        public Select AccountType { get; set; }
        public List<Select> LinkedUsers { get; set; }
        public double StartAmount { get; set; }
        public double AlertThreshold { get; set; }
    }

    //public class AccountForDetailDto
    //{
    //    public int Id { get; set; }
    //    public string Number { get; set; }
    //    public string Label { get; set; }
    //    public ComboSimple<Select> BankFamily { get; set; }
    //    public ComboSimple<Select> BankSubFamily { get; set; }
    //    public ComboSimple<Select> BankAgency { get; set; }
    //    public ComboSimple<Select> AccountType { get; set; }
    //    public List<Select> LinkedUsers { get; set; }
    //    public double StartAmount { get; set; }
    //    public double AlertThreshold { get; set; }
    //}
}
