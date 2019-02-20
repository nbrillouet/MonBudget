using Budget.DATA.Repositories.GMap;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public class GMapCountryService : IGMapCountryService
    {
        private readonly IGMapCountryRepository _gMapCountryRepository;

        public GMapCountryService(IGMapCountryRepository gMapCountryRepository)
        {
            _gMapCountryRepository = gMapCountryRepository;
        }

        public GMapCountry GetByLabelOrCreate(GMapCountry gMapCountry)
        {
            return _gMapCountryRepository.GetByLabelOrCreate(gMapCountry);
        }

    }

}
