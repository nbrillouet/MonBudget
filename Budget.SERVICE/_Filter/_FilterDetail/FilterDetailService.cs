using AutoMapper;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Budget.SERVICE
{
    public class FilterDetailService : IFilterDetailService
    {
        private readonly IMapper _mapper;
        private readonly ReferentialService _referentialService;
        private readonly IHostingEnvironment _hostingEnvironment;

        public FilterDetailService(
            IMapper mapper,
            ReferentialService referentialService,
            IHostingEnvironment hostingEnvironment
        )
        {
            _mapper = mapper;
            _referentialService = referentialService;
            _hostingEnvironment = hostingEnvironment;
        }


        public FilterOperationForDetail GetFilterForOperation(OperationForDetail operationForData)
        {
            FilterOperationForDetail FilterOperationForDetail = new FilterOperationForDetail()
            {
                OperationMethod = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty),
                OperationType = _referentialService.OperationTypeService.GetSelectGroup(operationForData.User.IdUserGroup)
            };

            return FilterOperationForDetail;
        }

        public FilterOtForDetail GetFilterForOt(OtForDetail otForDetail)
        {
            FilterOtForDetail filterOtForDetail = new FilterOtForDetail()
            {
                OperationTypeFamily = _referentialService.OperationTypeFamilyService.GetSelectGroup(otForDetail.User.IdUserGroup)
            };

            return filterOtForDetail;
        }

        public FilterOtfForDetail GetFilterForOtf(OtfForDetail otfForDetail)
        {
            FilterOtfForDetail filterOtfForDetail = new FilterOtfForDetail()
            {
                LogoClassName = _referentialService.AssetService.GetSelectList(EnumAssetFamily.OTF), // GetOtfLogoList(),
                Movement = _referentialService.MovementService.GetSelectList(EnumSelectType.Empty)
            };

            return filterOtfForDetail;
        }




        private List<SelectDto> GetOtfLogoList()
        {
            List<SelectDto> logoList = new List<SelectDto>();
            var basePath = _hostingEnvironment.WebRootPath;
            var files = Directory.EnumerateFiles($"{basePath}/assets/images/Otf");
            int i = 0;
            foreach (var file in files)
            {
                string fileName = Path.GetFileName(file);
                if (fileName.Contains("_32"))
                {
                    var logo = new SelectDto
                    {
                        Id = i,
                        Label = fileName.Replace("_32.png", string.Empty)
                    };
                    logoList.Add(logo);
                    i++;
                }
            }
            return logoList;
        }

    }
}
