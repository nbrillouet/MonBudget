using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
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

        //public List<Operation> GetByIdOperationMethod(int idOperationMethod)
        //{
        //    var operationUnknown = Context.Operation
        //        .Where(x => x.Id == 1) //ajout ligne inconnue
        //        .FirstOrDefault();

        //    var operations= Context.Operation
        //        .Where(x => x.IdOperationMethod == idOperationMethod)
        //        .OrderBy(x=>x.Label)
        //        .ToList();

        //    var results = new List<Operation>();
        //    results.Add(operationUnknown);
        //    results.AddRange(operations);

        //    return results;
        //}

        public List<Operation> GetSelectList(int idOperationMethod, int idOperationType)
        {
            var operationUnknown = Context.Operation
                .Where(x => x.Id == 1) //ajout ligne inconnue
                .FirstOrDefault();

            var operations = Context.Operation
                .Where(x => x.IdOperationMethod == idOperationMethod
                    && x.IdOperationType==idOperationType)
                .OrderBy(x => x.Label)
                .ToList();
            var results = new List<Operation>();
            results.Add(operationUnknown);
            results.AddRange(operations);

            return results;
        }

        public List<Operation> GetSelectList(List<SelectDto> operationMethods)
        {
            List<Operation> results;
            if (operationMethods.Count==0)
            {
                results = Context.Operation
                    .ToList();
            }
            else
            {
                var idOperationMethods = operationMethods.Select(x => x.Id).ToList();
                results = Context.Operation
                    .Where(x => idOperationMethods.Contains(x.IdOperationMethod))
                    .ToList();
            }

            return results;
        }

        public Operation Add(Operation operation)
        {
            return Create(operation);
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

        public new Operation Create(Operation operation)
        {
            //if (entity.OperationMethod != null)
            //    Context.OperationMethod.Attach(entity.OperationMethod);
            //if (entity.OperationType != null)
            //    Context.OperationType.Attach(entity.OperationType);

            Context.Operation.Add(operation);
            Context.SaveChanges();

            return operation;
        }
    }
}
