using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class OperationPlaceRepository : BaseRepository<OperationPlace>, IOperationPlaceRepository
    {
        public OperationPlaceRepository(BudgetContext context) : base(context)
        {
        }
        
        public List<GenericList> GetGenericList()
        {
            List<OperationPlace> operationPlaces = GetAll();
            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in operationPlaces)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.Department + " " + item.City;
                GenericLists.Add(genericList);
            }
            return GenericLists;
        }

        public List<OperationPlace> GetAllWithKeyWord()
        {
            return Context.OperationPlace.Where(x => x.Keyword != null).ToList();
        }

        public new int Create(OperationPlace entity)
        {
            Context.OperationPlace.Add(entity);
            Context.SaveChanges();

            return entity.Id;
        }
    }
}
