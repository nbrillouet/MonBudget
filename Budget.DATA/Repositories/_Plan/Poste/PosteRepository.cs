using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class PosteRepository : BaseRepository<Poste>, IPosteRepository
    {
        public PosteRepository(BudgetContext context) : base(context)
        {

        }
    }

}
