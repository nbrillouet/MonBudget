﻿using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
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
                    .OrderBy(x=>x.Label)
                    .ToList();
            }
            else
            {
                var idOperationTypes = operationTypes.Select(x => x.Id).ToList();
                results = Context.Operation
                    .Where(x=> idOperationTypes.Contains(x.IdOperationType))
                    .OrderBy(x => x.Label)
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

        public PagedList<Operation> GetTable(FilterOperationTableSelected filter)
        {
            var operations = Context.Operation
                .Where(x => x.IdUserGroup == filter.User.IdUserGroup)
                .Include(x => x.OperationType)
                .Include(x => x.OperationMethod)
                .AsQueryable();

            if (filter.Label != null)
            {
                operations = operations.Where(x => x.Label.Contains(filter.Label));
            }

            if (filter.OperationMethods != null && filter.OperationMethods.Count>0)
            {
                var idOperationMethods = filter.OperationMethods.Select(x => x.Id).ToList();
                operations = operations.Where(x => idOperationMethods.Contains(x.IdOperationMethod));
            }

            if (filter.OperationTypes != null && filter.OperationTypes.Count>0)
            {
                var idOperationTypes = filter.OperationTypes.Select(x => x.Id).ToList();
                operations = operations.Where(x => idOperationTypes.Contains(x.IdOperationType));
            }

            if (filter.Pagination.SortDirection == "asc")
            {
                operations = operations.OrderBy(filter.Pagination.SortColumn);
            }
            else
            {
                operations = operations.OrderByDescending(filter.Pagination.SortColumn);
            }

            var results = PagedListRepository<Operation>.Create(operations, filter.Pagination);
            return results;
        }

        public Operation GetDetail(int idOperation)
        {
            var operation = Context.Operation
                .Where(x => x.Id == idOperation)
                .Include(x => x.OperationMethod)
                .Include(x=>x.OperationType)
                .FirstOrDefault();

            return operation;
        }

        //public void DeleteWithEscalation(Operation operation)
        //{
        //    //suppression operations type liés
        //    var ots = Context.OperationType
        //        .Where(x => x.IdOperationTypeFamily == operationTypeFamily.Id)
        //        .ToList();

        //    foreach (var ot in ots)
        //    {
        //        //suppression des opérations liées
        //        var os = Context.Operation
        //            .Where(x => x.IdOperationType == ot.Id)
        //            .ToList();
        //        foreach (var o in os)
        //        {
        //            _operationRepository.DeleteWithTran(o);
        //        }

        //        _operationTypeRepository.DeleteWithTran(ot);

        //    }

        //    DeleteWithTran(operationTypeFamily);

        //    Context.SaveChanges();

        //}
    }
}
