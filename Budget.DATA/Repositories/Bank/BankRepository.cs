using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class BankRepository : BaseRepository<Bank>, IBankRepository
    {
        public BankRepository(BudgetContext context) : base(context)
        {
        }

        //public Bank GetById(int idBank)
        //{
        //    using (var context = new BudgetDbContext())
        //    {
        //        return context.Banks.Where(x => x.Id == idBank).FirstOrDefault();
        //    }
        //}

        //public List<Bank> GetAll()
        //{
        //    using (var context = new BudgetDbContext())
        //    {
        //        return context.Banks.ToList();
        //    }
        //}

        public List<Bank> GetAllWithNoUnknown()
        {
            //using (var context = new BudgetDbContext())
            //{
            return Context.Bank.Where(x => x.Id != (int)EnumBank.Inconnu).ToList();
            //}
        }

        public List<GenericList> GetGenericList()
        {
            List<Bank> banks = GetAll();
            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in banks)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.LabelBankLong;
                GenericLists.Add(genericList);
            }
            return GenericLists;
        }


    }
}
