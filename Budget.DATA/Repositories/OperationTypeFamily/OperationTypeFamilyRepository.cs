using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class OperationTypeFamilyRepository : BaseRepository<OperationTypeFamily>, IOperationTypeFamilyRepository
    {
        public OperationTypeFamilyRepository(BudgetContext context) : base(context)
        {
        }

        public List<OperationTypeFamily> GetByIdMovement(EnumMovement enumMovement)
        {
            return Context.OperationTypeFamily
                .Where(x => x.IdMovement == (int)enumMovement || x.IdMovement==(int)EnumMovement.TwoWays)
                .ToList()
                .OrderBy(x => x.Label)
                .ToList();
        }
        
        public List<OperationTypeFamily> GetAllByOrder()
        {
            return Context.OperationTypeFamily.ToList()
                .OrderBy(x => x.IdMovement)
                .ThenBy(x=>x.Label)
                .ToList();
        }

        public List<OperationTypeFamily> GetByIdList(List<int> idList)
        {
            List<OperationTypeFamily> results = Context
                .OperationTypeFamily
                .Where(x => idList.Contains(x.Id))
                .ToList();

            return results;
        }

        public new int Create(OperationTypeFamily entity)
        {
            Context.Set<OperationTypeFamily>().Add(entity);

            Context.SaveChanges();

            return entity.Id;
        }
    }
}
