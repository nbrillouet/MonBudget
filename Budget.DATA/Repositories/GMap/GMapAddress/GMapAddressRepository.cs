using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapAddressRepository : BaseRepository<GMapAddress>, IGMapAddressRepository
    {
        public GMapAddressRepository(BudgetContext context) : base(context)
        {
        }

        public new GMapAddress GetById(int id)
        {
            var result = Context.GMapAddress
                .Where(x => x.Id == id)
                .Include(x => x.gMapCountry)
                .Include(x => x.gMapLocality)
                .Include(x => x.gMapNeighborhood)
                .Include(x => x.gMapPostalCode)
                .Include(x => x.gMapRoute)
                .Include(x => x.gMapStreetNumber)
                .Include(x => x.gMapSublocalityLevel1)
                .Include(x => x.gMapSublocalityLevel2)
                .Include(x => x.gMapAdministrativeAreaLevel1)
                .Include(x => x.gMapAdministrativeAreaLevel2)
                .FirstOrDefault();

            return result;
        }

        public GMapAddress GetByGMapAddress(GMapAddress gMapAddress)
        {
            var result = Context.GMapAddress
                .Where(x => x.idGMapAdministrativeAreaLevel1 == gMapAddress.idGMapAdministrativeAreaLevel1
                    && x.idGMapAdministrativeAreaLevel2 == gMapAddress.idGMapAdministrativeAreaLevel2
                    && x.idGMapCountry == gMapAddress.idGMapCountry
                    && x.idGMapLocality == gMapAddress.idGMapLocality
                    && x.idGMapNeighborhood == gMapAddress.idGMapNeighborhood
                    && x.idGMapPostalCode == gMapAddress.idGMapPostalCode
                    && x.idGMapRoute == gMapAddress.idGMapRoute
                    && x.idGMapStreetNumber == gMapAddress.idGMapStreetNumber
                    && x.idGMapSublocalityLevel1 == gMapAddress.idGMapSublocalityLevel1
                    && x.idGMapSublocalityLevel2 == gMapAddress.idGMapSublocalityLevel2)
                .FirstOrDefault();

            return result;
        }
    }

}
