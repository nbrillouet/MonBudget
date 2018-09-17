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

        public List<OperationTypeFamily> GetByIdMovement(int idMovement)
        {
            return Context.OperationTypeFamily
                .Where(x => x.IdMovement == idMovement)
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

        public List<GenericList> GetGenericList()
        {
            List<OperationTypeFamily> operationTypeFamilys = GetAllByOrder();
            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in operationTypeFamilys)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.Label;
                GenericLists.Add(genericList);
            }
            return GenericLists;
        }

        public List<GenericList> GetGenericListByIdMovement(int idMovement, EnumSelect enumSelect)
        {
            List<OperationTypeFamily> operationTypeFamilys = GetByIdMovement(idMovement, enumSelect);
            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in operationTypeFamilys)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.Label;
                GenericLists.Add(genericList);
            }
            return GenericLists;
        }

        public List<OperationTypeFamily> GetByIdMovement(int idMovement, EnumSelect enumSelect)
        {
            switch (enumSelect)
            {
                case EnumSelect.Normal:
                    {
                        return Context.OperationTypeFamily
                            .Where(x => x.IdMovement == idMovement && x.Label != "ALL_OPERATION_TYPE")
                            .ToList()
                            .OrderBy(x => x.Label)
                            .ToList();
                    }
                case EnumSelect.WithAll:
                    {
                        OperationTypeFamily operationTypeFamily = new OperationTypeFamily
                        {
                            Id = -1,
                            Label = "Toutes",
                            IdMovement = idMovement
                        };
                        List<OperationTypeFamily> operationTypeFamilies = new List<OperationTypeFamily>();
                        operationTypeFamilies.Add(operationTypeFamily);
                        List<OperationTypeFamily> operationTypeFamiliesDb =
                            Context.OperationTypeFamily
                            .Where(x => x.IdMovement == idMovement && x.Label != "INCONNU" && x.Label != "ALL_OPERATION_TYPE").ToList().OrderBy(x => x.Label).ToList();
                        foreach (var item in operationTypeFamiliesDb)
                        {
                            operationTypeFamilies.Add(item);
                        }
                        return operationTypeFamilies;
                    }
                case EnumSelect.WithoutUnknown:
                    {
                        return Context.OperationTypeFamily
                            .Where(x => x.IdMovement == idMovement && x.Label != "ALL_OPERATION_TYPE" && x.Label != "INCONNU")
                            .ToList()
                            .OrderBy(x => x.Label)
                            .ToList();
                    }
                default:
                    {
                        return Context.OperationTypeFamily
                            .Where(x => x.IdMovement == idMovement && x.Label != "ALL_OPERATION_TYPE")
                            .ToList()
                            .OrderBy(x => x.Label)
                            .ToList();
                    }
            }

        }

        public new int Create(OperationTypeFamily entity)
        {
            Context.Set<OperationTypeFamily>().Add(entity);

            Context.SaveChanges();

            return entity.Id;
        }
    }
}
