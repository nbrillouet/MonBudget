﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("REFERENCE_TABLE", Schema = "plan")]
    public class ReferenceTable
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("TABLE_NAME")]
        public string TableName { get; set; }
        [Column("LABEL")]
        public string Label { get; set; }

    }
}
