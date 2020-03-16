using AutoMapper;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class AssetService : IAssetService
    {
        private readonly IMapper _mapper;
        private readonly IAssetRepository _assetRepository;
        private readonly ISelectService _selectService;

        public AssetService(
            IAssetRepository assetRepository,
            ISelectService selectService,
            IMapper mapper
            )
        {
            _assetRepository = assetRepository;
            _selectService = selectService;
            _mapper = mapper;
        }


        public List<SelectDto> GetSelectList(EnumAssetFamily enumAssetFamily)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            //var bankAgencies = _bankAgencyRepository.GetByIdBankSubFamily(idBankSubFamily);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(selectList).ToList());

            return selectList;
        }

    }

}
