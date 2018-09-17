using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapAdministrativeAreaLevel2Repository : BaseRepository<GMapAdministrativeAreaLevel2>, IGMapAdministrativeAreaLevel2Repository
    {
        public GMapAdministrativeAreaLevel2Repository(BudgetContext context) : base(context)
        {
        }

        public GMapAdministrativeAreaLevel2 GetByLabelOrCreate(GMapAdministrativeAreaLevel2 gMapAdministrativeAreaLevel2)
        {
            var result = Context.GMapAdministrativeAreaLevel2
                .Where(x => x.Label == gMapAdministrativeAreaLevel2.Label)
                .FirstOrDefault();

            if (result != null)
                return result;

            return Create(gMapAdministrativeAreaLevel2);
        }

    }
}
