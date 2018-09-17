using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapNeighborhoodRepository : BaseRepository<GMapNeighborhood>, IGMapNeighborhoodRepository
    {
        public GMapNeighborhoodRepository(BudgetContext context) : base(context)
        {
        }

        public GMapNeighborhood GetByLabelOrCreate(GMapNeighborhood gMapNeighborhood)
        {
            var result = Context.GMapNeighborhood
                .Where(x => x.Label == gMapNeighborhood.Label)
                .FirstOrDefault();

            if (result != null)
                return result;

            return Create(gMapNeighborhood);
        }

    }

}
