using Budget.MODEL;
using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class OperationRepository : BaseRepository<Operation>, IOperationRepository
    {
        public OperationRepository(BudgetContext context) : base(context)
        {
        }

        public List<Operation> GetAllByIdOperationMethod(int idOperationMethod)
        {
            return Context.Operation.Where(x => x.IdOperationMethod == idOperationMethod)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .ToList();
        }

        public List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily)
        {
            List<Operation> operations = new List<Operation>();
            List<OperationType> operationTypes = Context.OperationType.Where(x => x.IdOperationTypeFamily == idOperationTypeFamily).OrderBy(x => x.Label).ToList();

            foreach (var operationType in operationTypes)
            {
                List<Operation> tmpOperations = Context.Operation
                    .Where(x => x.IdOperationType == operationType.Id)
                    .Include(x => x.OperationMethod)
                    .Include(x => x.OperationType)
                    .ToList();
                foreach (var tmpOperation in tmpOperations)
                {
                    operations.Add(tmpOperation);
                }
            }

            return operations;
        }

        public List<Operation> GetAllByOrder()
        {
            return Context.Operation.ToList().OrderBy(x => x.Label).ToList();
        }

        public List<GenericList> GetGenericList()
        {
            List<Operation> operations = GetAllByOrder();
            List<GenericList> GenericLists = new List<GenericList>();
            foreach (var item in operations)
            {
                GenericList genericList = new GenericList();
                genericList.value = item.Id;
                genericList.text = item.Label;
                GenericLists.Add(genericList);
            }
            return GenericLists;
        }

        public new int Create(Operation entity)
        {
            if (entity.OperationMethod != null)
                Context.OperationMethod.Attach(entity.OperationMethod);
            if (entity.OperationType != null)
                Context.OperationType.Attach(entity.OperationType);

            Context.Operation.Add(entity);
            Context.SaveChanges();

            return entity.Id;
        }
    }
}
