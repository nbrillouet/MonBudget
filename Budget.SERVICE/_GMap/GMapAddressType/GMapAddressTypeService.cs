using Budget.DATA.Repositories.GMap;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public class GMapAddressTypeService : IGMapAddressTypeService
    {
        private readonly IGMapTypeService _gMapTypeService;
        private readonly IGMapAddressTypeRepository _gMapAddressTypeRepository;

        public GMapAddressTypeService(
            IGMapTypeService gMapTypeService,
            IGMapAddressTypeRepository gMapAddressTypeRepository)
        {
            _gMapAddressTypeRepository = gMapAddressTypeRepository;
            _gMapTypeService = gMapTypeService;
        }

        public GMapAddressType Create(GMapAddressType gMapAddressType)
        {
            return _gMapAddressTypeRepository.Create(gMapAddressType);
        }

        public List<GMapAddressType> Create(int idGMapAddress, List<GMapTypeDto> gMapTypes)
        {
            List<GMapAddressType> gMapAddressTypes = new List<GMapAddressType>();
            foreach (var gMapType in gMapTypes)
            {
                var gMapAddressType = new GMapAddressType
                {
                    IdGMapAddress = idGMapAddress,
                    IdGMapType = gMapType.Id
                };
                gMapAddressTypes.Add(Create(gMapAddressType));
            }

            return gMapAddressTypes;
        }

        public List<GMapTypeDto> GetByIdGMapAddress(int id, EnumLanguage enumLanguage)
        {
            var results = _gMapAddressTypeRepository.GetByIdGMapAddress(id);

            return _gMapTypeService.GetGMapTypeDto(results, enumLanguage);
        }

    }


}
