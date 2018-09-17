using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.MODEL.Dto
{
    public class SelectDto
    {
        public int Id { get; set; }
        public string Label { get; set; }

    }

    public enum EnumSelectType
    {
        VIDE = 1,
        TOUS = 2,
        TOUTES = 3
    }
}
