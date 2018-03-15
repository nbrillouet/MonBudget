using Budget.MODEL;
using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class OperationTypeRepository : BaseRepository<OperationType>, IOperationTypeRepository
    {
        public OperationTypeRepository(BudgetContext context) : base(context)
        {
        }
        public List<OperationType> GetAllByOrder(EnumSelect enumSelect)
        {
            return Context.OperationType.ToList().OrderBy(x => x.Label).ToList();
        }
        public List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect)
        {
            List<OperationType> operationTypes = new List<OperationType>();
            if (idOperationTypeFamily == 0)
                return operationTypes = GetAllByOrder(enumSelect);

            switch (enumSelect)
            {
                case EnumSelect.Normal:
                    {
                        return operationTypes = Context.OperationType.Where(x => x.IdOperationTypeFamily == idOperationTypeFamily).ToList();
                    }
                case EnumSelect.WithAll:
                    {
                        int idMovement = Context.OperationTypeFamily.Where(x => x.Id == idOperationTypeFamily).FirstOrDefault().IdMovement;
                        int idOperationTypeTypeFamilyAll = Context.OperationTypeFamily.Where(x => x.Label == "ALL_OPERATION_TYPE" && x.IdMovement == idMovement).FirstOrDefault().Id;
                        OperationType operationType = Context.OperationType.Where(x => x.IdOperationTypeFamily == idOperationTypeTypeFamilyAll).FirstOrDefault();
                        //        .IdMovement;
                        //    new OperationType
                        //{
                        //    Id = -1,
                        //    Label = "Tous",
                        //    IdOperationTypeFamily = idOperationTypeFamily
                        //};
                        List<OperationType> OperationTypes = new List<OperationType>();
                        OperationTypes.Add(operationType);
                        List<OperationType> OperationTypesDb = Context.OperationType
                                .Where(x => x.IdOperationTypeFamily == idOperationTypeFamily && x.Label != "INCONNU").ToList();
                        foreach (var item in OperationTypesDb)
                        {
                            OperationTypes.Add(item);
                        }
                        return OperationTypes;
                    }
                case EnumSelect.WithoutUnknown:
                    {
                        return Context.OperationType
                            .Where(x => x.IdOperationTypeFamily == idOperationTypeFamily && x.Label != "INCONNU").ToList();
                    }
                default:
                    return operationTypes = Context.OperationType.Where(x => x.IdOperationTypeFamily == idOperationTypeFamily).ToList();
            }
        }

        public OperationType GetByIdWithOperationTypeFamily(int idOperationType)
        {
            return Context.OperationType
                .Where(x => x.Id == idOperationType)
                .Include(x => x.OperationTypeFamily).FirstOrDefault();
        }

        public OperationType GetFirstByIdOperationTypeFamily(int idOperationTypeFamily)
        {
            return Context.OperationType
                   .Where(x => x.IdOperationTypeFamily == idOperationTypeFamily)
                   .Include(x => x.OperationTypeFamily).First();
        }

        public List<GenericList> GetGenericList()
        {
            List<OperationType> operationTypes = GetAllByOrder(EnumSelect.Normal);
            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in operationTypes)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.Label;
                GenericLists.Add(genericList);
            }
            return GenericLists;
        }


        public List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect)
        {

            List<OperationType> operationTypes = GetByIdOperationTypeFamily(IdOperationTypeFamily, enumSelect);

            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in operationTypes)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.Label;
                GenericLists.Add(genericList);
            }
            return GenericLists;
        }

        public List<OperationType> GetByIdMovement(int IdMovement)
        {
            List<OperationTypeFamily> operationTypeFamilies = Context.OperationTypeFamily.Where(x => x.IdMovement == IdMovement).ToList();
            var ids = new int[operationTypeFamilies.Count()];
            for (int i = 0; i < operationTypeFamilies.Count(); i++)
            {
                ids[i] = operationTypeFamilies[i].Id;
            }

            List<OperationType> operationTypes = Context.OperationType.Where(x => ids.Contains(x.IdOperationTypeFamily)).ToList();

            return operationTypes;
        }

        public List<GenericList> GetGenericListByIdMovement(int IdMovement)
        {
            List<OperationTypeFamily> operationTypeFamilies = Context.OperationTypeFamily.Where(x => x.IdMovement == IdMovement).ToList();
            var ids = new int[operationTypeFamilies.Count()];
            for (int i = 0; i < operationTypeFamilies.Count(); i++)
            {
                ids[i] = operationTypeFamilies[i].Id;
            }

            List<OperationType> operationTypes = Context.OperationType.Where(x => ids.Contains(x.IdOperationTypeFamily)).ToList();
            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in operationTypes)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.Label;
                GenericLists.Add(genericList);
            }
            return GenericLists;

        }

        public new int Create(OperationType entity)
        {
            Context.Set<OperationType>().Add(entity);
            Context.Entry(entity.OperationTypeFamily).State = EntityState.Unchanged;
            Context.SaveChanges();

            return entity.Id;
        }
    }
}
