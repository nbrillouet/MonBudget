using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapSublocalityLevel2Repository : BaseRepository<GMapSublocalityLevel2>, IGMapSublocalityLevel2Repository
    {
        public GMapSublocalityLevel2Repository(BudgetContext context) : base(context)
        {
        }

        public GMapSublocalityLevel2 GetByLabelOrCreate(GMapSublocalityLevel2 gMapSublocalityLevel2)
        {
            var result = Context.GMapSublocalityLevel2
                .Where(x => x.Label == gMapSublocalityLevel2.Label)
                .FirstOrDefault();

            if (result != null)
                return result;

            return Create(gMapSublocalityLevel2);
        }

    }

}
