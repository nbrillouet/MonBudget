using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapLocalityRepository : BaseRepository<GMapLocality>, IGMapLocalityRepository
    {
        public GMapLocalityRepository(BudgetContext context) : base(context)
        {
        }

        public GMapLocality GetByLabelOrCreate(GMapLocality gMapLocality)
        {
            var result = Context.GMapLocality
                .Where(x => x.Label == gMapLocality.Label)
                .FirstOrDefault();

            if (result != null)
                return result;

            return Create(gMapLocality);
        }

    }


}
