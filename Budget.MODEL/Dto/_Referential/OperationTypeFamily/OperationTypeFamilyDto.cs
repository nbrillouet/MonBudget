using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class OtfForTableDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public SelectDto Movement { get; set; }
        public string LogoClassName { get; set; }
        public UserForGroupDto User { get; set; }
        public bool IsMandatory { get; set; }
    }

    public class OtfForDetailDto 
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public ComboSimple<SelectDto> Movement { get; set; }
        public ComboSimple<SelectDto> LogoClassName { get; set; }
        public UserForGroupDto User { get; set; }
        public bool IsMandatory { get; set; }
    }

}
