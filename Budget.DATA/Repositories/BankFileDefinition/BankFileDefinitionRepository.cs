using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class BankFileDefinitionRepository : BaseRepository<BankFileDefinition>, IBankFileDefinitionRepository
    {
        public BankFileDefinitionRepository(BudgetContext context) : base(context)
        {
        }

        public List<BankFileDefinition> GetAllWithNoUnknown()
        {
            return Context.BankFileDefinition.Where(x => x.Id != (int)EnumBankFamily.Inconnu).ToList();
        }

        //public List<GenericList> GetGenericList()
        //{
        //    List<BankFileDefinition> bankFileDefinitions = GetAll();
        //    List<GenericList> GenericLists = new List<GenericList>();
        //    foreach (var item in bankFileDefinitions)
        //    {
        //        GenericList genericList = new GenericList();
        //        genericList.value = item.Id;
        //        genericList.text = item.LabelField;
        //        GenericLists.Add(genericList);
        //    }
        //    return GenericLists;
        //}

        public List<BankFileDefinition> GetByIdBank(int idBankFamily)
        {
            return Context.BankFileDefinition
                .Where(x => x.IdBankFamily == idBankFamily)
                .OrderBy(x => x.LabelOrder)
                .ToList();
        }

    }
}
