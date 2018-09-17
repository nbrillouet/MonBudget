using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto.Select
{
    public class SelectGroupDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public List<SelectDto> Selects { get; set; }
    }
}
