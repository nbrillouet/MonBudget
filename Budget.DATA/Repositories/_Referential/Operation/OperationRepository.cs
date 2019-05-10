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


        public List<Operation> GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType)
        {
            var results = Context.Operation
                .Where(x => x.IdUserGroup == idUserGroup
                    && x.IdOperationMethod == idOperationMethod
                    && x.IdOperationType == idOperationType)
                .OrderBy(x => x.Label);

            return results.ToList(); ;
        }

        public List<Operation> GetSelectList(int idUserGroup, List<SelectDto> operationTypes)
        {
            List<Operation> results;
            if (operationTypes == null || !operationTypes.Any())
            {
                results = Context.Operation
                    .Where(x => x.IdUserGroup == idUserGroup)
                    .ToList();
            }
            else
            {
                var idOperationTypes = operationTypes.Select(x => x.Id).ToList();
                results = Context.Operation
                    .Where(x=> idOperationTypes.Contains(x.IdOperationType))
                    .ToList();
            }

            return results;
        }

        public List<Operation> GetByIdMovement(int idUserGroup, EnumMovement enumMovement)
        {
            var results = Context.Operation
                .Where(x => x.IdUserGroup == idUserGroup
                    && x.OperationType.OperationTypeFamily.IdMovement == (int)enumMovement)
                .Include(x => x.OperationType);

            return results.ToList();
        }

        public List<Operation> GetByIdList(List<int> idList)
        {
            List<Operation> operations = Context.Operation
                .Where(x=> idList.Contains(x.Id))
                .ToList();

            return operations;
        }

        public Operation GetUnknown(int idUserGroup)
        {
            var operation = Context.Operation
                .Where(x => x.IdUserGroup == idUserGroup 
                    && x.Label=="INCONNU")
                .FirstOrDefault();

            return operation;
        }
    }
}
