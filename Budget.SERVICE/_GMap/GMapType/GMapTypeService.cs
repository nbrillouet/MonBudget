using Budget.DATA.Repositories.GMap;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public class GMapTypeService : IGMapTypeService
    {
        private readonly IGMapTypeRepository _gMapTypeRepository;

        public GMapTypeService(IGMapTypeRepository gMapTypeRepository)
        {
            _gMapTypeRepository = gMapTypeRepository;
        }

        public List<GMapType> GetByLabelOrCreate(List<GMapType> gMapTypes)
        {
            return _gMapTypeRepository.GetByLabelOrCreate(gMapTypes);
        }


    }
}
