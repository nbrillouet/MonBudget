using System;
using System.Collections.Generic;

namespace Budget.MODEL
{
    public class BusinessException : Exception
    {
        public List<BusinessExceptionMessage> BusinessExceptionMessages;

        public BusinessException(List<BusinessExceptionMessage> businessExceptionMessages)
        {
            BusinessExceptionMessages = businessExceptionMessages;
        }
    }

    public class BusinessExceptionMessage
    {
        public string Code { get; set; }
        public string Label { get; set; }
        public bool ForcableSave { get; set; }
        
    }

    public enum EnumBusinessException
    {
        BUS_OPE_ERR_000,     //Opération obligatoire, suppression impossible
        BUS_OPE_ERR_001,     //Opération utilisée dans un ou plusieurs imports
        BUS_OPE_ERR_002,     //Opération utilisée dans un ou plusieurs relevés de compte
    }
}
