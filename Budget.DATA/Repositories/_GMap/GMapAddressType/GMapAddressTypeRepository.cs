using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public class GMapAddressTypeRepository : BaseRepository<GMapAddressType>, IGMapAddressTypeRepository
    {
        public GMapAddressTypeRepository(BudgetContext context) : base(context)
        {
        }

        public List<GMapType> GetByIdGMapAddress(int id)
        {
            var results = Context.GMapAddressType
                .Where(x => x.IdGMapAddress == id)
                .Select(x=>x.GMapType)
                .ToList();

            return results;
        }



    }


}
