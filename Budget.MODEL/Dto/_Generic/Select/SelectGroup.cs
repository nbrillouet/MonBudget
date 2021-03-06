﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto.Select
{
    public class SelectGroupDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public List<SelectDto> Selects { get; set; }

        public SelectGroupDto()
        {
            Selects = new List<SelectDto>();
        }
    }

    public class SelectNameValueGroupDto<T>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<SelectNameValueDto<T>> Selects { get; set; }

        public SelectNameValueGroupDto() 
        {
            Selects = new List<SelectNameValueDto<T>>();
        }
}
}
