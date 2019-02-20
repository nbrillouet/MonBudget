using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapRouteRepository : BaseRepository<GMapRoute>, IGMapRouteRepository
    {
        public GMapRouteRepository(BudgetContext context) : base(context)
        {
        }

        public GMapRoute GetByLabelOrCreate(GMapRoute gMapRoute)
        {
            var result = Context.GMapRoute
                .Where(x => x.Label == gMapRoute.Label)
                .FirstOrDefault();

            if (result != null)
                return result;

            return Create(gMapRoute);
        }

    }
}
