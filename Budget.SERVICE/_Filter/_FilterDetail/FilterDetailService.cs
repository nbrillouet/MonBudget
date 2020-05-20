using AutoMapper;
using Budget.MODEL;
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
                Asset = _referentialService.AssetService.GetSelectList(EnumAssetFamily.OTF), // GetOtfLogoList(),
                Movement = _referentialService.MovementService.GetSelectList(EnumSelectType.Empty)
            };

            return filterOtfForDetail;
        }

        public FilterAsForDetail GetFilterForAs(AsForDetail asForDetail)
        {
            FilterAsForDetail filterAsForDetail = new FilterAsForDetail()
            {
                OperationMethod = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Inconnu),// _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty),
                OperationTypeFamily = _referentialService.OperationTypeFamilyService.GetSelectList(asForDetail.User.IdUserGroup, (EnumMovement)asForDetail.IdMovement, EnumSelectType.Inconnu),
                OperationType = _referentialService.OperationTypeService.GetSelectList(asForDetail.OperationTypeFamily.Id, EnumSelectType.Empty),
                Operation = _referentialService.OperationService.GetSelectList(asForDetail.User.IdUserGroup, asForDetail.OperationMethod.Id, asForDetail.OperationType.Id, EnumSelectType.Inconnu),
                OperationTransverse = _referentialService.OperationTransverseService.GetSelectList(asForDetail.User.Id, EnumSelectType.Empty),
                OperationPlace = !asForDetail.IsLocalisable 
                    ? new List<Select> { new Select { Id = 2, Label = "N/A" } }
                    : new List<Select> { new Select { Id = 1, Label = "INCONNU" }, new Select { Id = 3, Label = "INTERNET" }, new Select { Id = 4, Label = "AUTRES" } }
            };
            //if (!asDetailDto.IsLocalisable)
            //{
            //    operationDetailList = new List<Select> { new Select { Id = 2, Label = "N/A" } };
            //    asDetailDto.OperationPlace = new ComboSimple<Select>
            //    {
            //        List = operationDetailList,
            //        Selected = operationDetailList[0]
            //    };
            //}
            //else
            //{
            //    operationDetailList = new List<Select> { new Select { Id = 1, Label = "INCONNU" }, new Select { Id = 3, Label = "INTERNET" }, new Select { Id = 4, Label = "AUTRES" } };
            //    var operationDetailSelected = asDetailDto.OperationDetail.GMapAddress.Id == 1 ? operationDetailList[0]
            //            : asDetailDto.OperationDetail.GMapAddress.Id == 3 ? operationDetailList[1]
            //            : operationDetailList[2];
            //    asDetailDto.OperationPlace = new ComboSimple<Select>
            //    {
            //        List = operationDetailList,
            //        Selected = operationDetailSelected
            //    };

            //    if (operationDetailSelected.Id == 4)
            //    {
            //        asDetailDto.GMapSearchInfo = new GMapSearchInfoDto
            //        {
            //            IdGMapAddress = asDetailDto.OperationDetail.GMapAddress.Id,
            //            OperationPositionSearch = asDetailDto.OperationDetail.KeywordOperation,
            //            OperationPlaceSearch = asDetailDto.OperationDetail.KeywordPlace
            //        };
            //    }
            //}

            return filterAsForDetail;
        }

        //TODO merge with GetFilterForAs
        public FilterAsifForDetail GetFilterForAsif(AsifForDetail asifForDetail)
        {
            FilterAsifForDetail filterAsForDetail = new FilterAsifForDetail()
            {
                OperationMethod = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Inconnu),// _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty),
                OperationTypeFamily = _referentialService.OperationTypeFamilyService.GetSelectList(asifForDetail.User.IdUserGroup, (EnumMovement)asifForDetail.IdMovement, EnumSelectType.Inconnu),
                OperationType = _referentialService.OperationTypeService.GetSelectList(asifForDetail.OperationTypeFamily.Id, EnumSelectType.Empty),
                Operation = _referentialService.OperationService.GetSelectList(asifForDetail.User.IdUserGroup, asifForDetail.OperationMethod.Id, asifForDetail.OperationType.Id, EnumSelectType.Inconnu),
                OperationTransverse = _referentialService.OperationTransverseService.GetSelectList(asifForDetail.User.Id, EnumSelectType.Empty),
                OperationPlace = !asifForDetail.IsLocalisable
                    ? new List<Select> { new Select { Id = 2, Label = "N/A" } }
                    : new List<Select> { new Select { Id = 1, Label = "INCONNU" }, new Select { Id = 3, Label = "INTERNET" }, new Select { Id = 4, Label = "AUTRES" } }
            };

            return filterAsForDetail;
        }


        private List<Select> GetOtfLogoList()
        {
            List<Select> logoList = new List<Select>();
            var basePath = _hostingEnvironment.WebRootPath;
            var files = Directory.EnumerateFiles($"{basePath}/assets/images/Otf");
            int i = 0;
            foreach (var file in files)
            {
                string fileName = Path.GetFileName(file);
                if (fileName.Contains("_32"))
                {
                    var logo = new Select
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
