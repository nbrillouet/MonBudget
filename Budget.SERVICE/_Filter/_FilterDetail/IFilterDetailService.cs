using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IFilterDetailService
    {
        FilterOperationForDetail GetFilterOperationDetail(OperationForDetail operationForData);
    }
}
