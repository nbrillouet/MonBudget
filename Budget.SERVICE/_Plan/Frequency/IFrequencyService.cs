using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IFrequencyService
    {
        List<SelectDto> GetSelectAll();
        List<FrequencyDto> GetAll();
    }

}
