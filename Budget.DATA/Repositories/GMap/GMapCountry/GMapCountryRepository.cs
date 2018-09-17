using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapCountryRepository : BaseRepository<GMapCountry>, IGMapCountryRepository
    {
        public GMapCountryRepository(BudgetContext context) : base(context)
        {
        }

        public GMapCountry GetByLabelOrCreate(GMapCountry gMapCountry)
        {
            var result = Context.GMapCountry
                .Where(x => x.Label == gMapCountry.Label)
                .FirstOrDefault();

            if (result != null)
                return result;

            return Create(gMapCountry);
        }

    }


}
