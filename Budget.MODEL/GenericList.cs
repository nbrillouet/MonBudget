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
}
