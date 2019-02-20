using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapAdministrativeAreaLevel1Repository : BaseRepository<GMapAdministrativeAreaLevel1>, IGMapAdministrativeAreaLevel1Repository
    {
        public GMapAdministrativeAreaLevel1Repository(BudgetContext context) : base(context)
        {
        }

        public GMapAdministrativeAreaLevel1 GetByLabelOrCreate(GMapAdministrativeAreaLevel1 gMapAdministrativeAreaLevel1)
        {
            var result = Context.GMapAdministrativeAreaLevel1
                .Where(x => x.Label == gMapAdministrativeAreaLevel1.Label)
                .FirstOrDefault();

            if (result != null)
                return result;

            var toto = Create(gMapAdministrativeAreaLevel1);
            return toto;
        }

    }

}
