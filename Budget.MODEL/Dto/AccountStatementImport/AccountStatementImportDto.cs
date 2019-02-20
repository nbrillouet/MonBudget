﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class AsiForListDto
    {
        public int Id { get; set; }
        public SelectDto User { get; set; }
        public SelectDto Bank { get; set; }
        public string FileImport { get; set; }
        public DateTime DateImport { get; set; }
    }

    public class AsiForTableDto
    {
        public int Id { get; set; }
        public SelectDto User { get; set; }
        public SelectDto Bank { get; set; }
        public string FileImport { get; set; }
        public DateTime DateImport { get; set; }
    }

}
