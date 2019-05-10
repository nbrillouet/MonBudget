using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("OPERATION_DETAIL", Schema = "ref")]
    public class OperationDetail
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("ID_OPERATION")]
        public int IdOperation { get; set; }

        [ForeignKey("IdOperation")]
        public Operation Operation { get; set; }

        [Column("KEYWORD_OPERATION")]
        public string KeywordOperation { get; set; }

        [Column("KEYWORD_PLACE")]
        public string KeywordPlace { get; set; }

        [Column("ID_GMAP_ADDRESS")]
        public int IdGMapAddress { get; set; }

        [ForeignKey("IdGMapAddress")]
        public GMapAddress GMapAddress { get; set; }
        [Column("ID_USER_GROUP")]
        public int IdUserGroup { get; set; }
        [Column("IS_MANDATORY")]
        public bool IsMandatory { get; set; }
    }
}
