using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL
{
    public class GenericList
    {
        public int value { get; set; }
        public string text { get; set; }
    }

    public enum EnumSelect
    {
        Normal = 1,
        WithAll = 2,
        WithoutUnknown = 3
    }

    //public class ListForCombo<T>
    //{
    //    public List<T> List { get; set; }
    //    public List<SelectDto> ListSelected { get; set; }
    //}

    public class ComboSimple<T>
    {
        public List<T> List { get; set; }
        public T Selected { get; set; }
    }

    public class ComboMultiple<T>
    {
        public List<T> List { get; set; }
        public List<SelectDto> ListSelected { get; set; }
    }
}
