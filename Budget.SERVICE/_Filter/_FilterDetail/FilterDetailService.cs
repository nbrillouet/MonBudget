using AutoMapper;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class FilterDetailService : IFilterDetailService
    {
        private readonly IMapper _mapper;
        private readonly ReferentialService _referentialService;

        public FilterDetailService(
            IMapper mapper,
            ReferentialService referentialService
        )
        {
            _mapper = mapper;
            _referentialService = referentialService;
        }


        public FilterOperationForDetail GetFilterOperationDetail(OperationForDetail operationForData)
        {
            FilterOperationForDetail FilterOperationForDetail = new FilterOperationForDetail
            {
                OperationMethod = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty),
                OperationType = _referentialService.OperationTypeService.GetSelectGroup(operationForData.User.IdUserGroup)
            };

            return FilterOperationForDetail;
        }

    }
}
