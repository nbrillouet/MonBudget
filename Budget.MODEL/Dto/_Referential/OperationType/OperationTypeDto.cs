using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class OtForTableDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public SelectDto OperationTypeFamily { get; set; }
        public UserForGroupDto User { get; set; }
        public bool IsMandatory { get; set; }
    }

    public class OtForDetailDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public ComboSimple<SelectDto> OperationTypeFamily { get; set; }
        public UserForGroupDto User { get; set; }
        public bool IsMandatory { get; set; }
    }
}
