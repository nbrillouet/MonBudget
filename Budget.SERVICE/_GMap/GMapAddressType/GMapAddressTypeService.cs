using Budget.DATA.Repositories.GMap;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public class GMapAddressTypeService : IGMapAddressTypeService
    {
        private readonly IGMapAddressTypeRepository _gMapAddressTypeRepository;

        public GMapAddressTypeService(IGMapAddressTypeRepository gMapAddressTypeRepository)
        {
            _gMapAddressTypeRepository = gMapAddressTypeRepository;
        }

        public GMapAddressType Create(GMapAddressType gMapAddressType)
        {
            return _gMapAddressTypeRepository.Create(gMapAddressType);
        }

        public List<GMapAddressType> Create(int idGMapAddress, List<GMapType> gMapTypes)
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

        public List<GMapType> GetByIdGMapAddress(int id)
        {
            return _gMapAddressTypeRepository.GetByIdGMapAddress(id);
        }

    }


}
