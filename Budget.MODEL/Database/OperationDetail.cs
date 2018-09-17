using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("OPERATION_DETAIL")]
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

        //[Column("ID_OPERATION_PLACE")]
        //public int IdOperationPlace { get; set; }

        //[ForeignKey("IdOperationPlace")]
        //public OperationPlace operationPlace { get; set; }

        [Column("ID_GMAP_ADDRESS")]
        public int IdGMapAddress { get; set; }

        [ForeignKey("IdGMapAddress")]
        public GMapAddress GMapAddress { get; set; }
    }
}
