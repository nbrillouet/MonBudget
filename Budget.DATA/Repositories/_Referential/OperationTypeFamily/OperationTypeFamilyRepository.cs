using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class OperationTypeFamilyRepository : BaseRepository<OperationTypeFamily>, IOperationTypeFamilyRepository
    {

        private readonly IOperationRepository _operationRepository;
        private readonly IOperationTypeRepository _operationTypeRepository;

        public OperationTypeFamilyRepository(BudgetContext context,
            IOperationRepository operationRepository,
            IOperationTypeRepository operationTypeRepository) : base(context)
        {
            _operationRepository = operationRepository;
            _operationTypeRepository = operationTypeRepository;
        }

        public List<OperationTypeFamily> GetByIdMovement(int idUserGroup, EnumMovement enumMovement)
        {
            var operationTypeFamilies = Context.OperationTypeFamily
                .Where(x=>x.IdUserGroup == idUserGroup 
                    && (x.IdMovement == (int)enumMovement || x.IdMovement == (int)EnumMovement.TwoWays));

            return operationTypeFamilies
                .OrderBy(x => x.Label)
                .ToList();

        }

        public List<OperationTypeFamily> GetByIdUserGroup(int idUserGroup)
        {
            var operationTypeFamilies = Context.OperationTypeFamily
                .Where(x => x.IdUserGroup == idUserGroup);

            return operationTypeFamilies
                .OrderBy(x => x.Label)
                .ToList();
        }

        public List<OperationTypeFamily> GetAllByOrder(int idUserGroup)
        {
            return Context.OperationTypeFamily
                .Where(x => x.IdUserGroup == idUserGroup)
                .ToList()
                .OrderBy(x => x.IdMovement)
                .ThenBy(x => x.Label)
                .ToList();
        }

        public List<OperationTypeFamily> GetByIdList(List<int> idList)
        {
            List<OperationTypeFamily> results = Context.OperationTypeFamily
                .Where(x => idList.Contains(x.Id))
                .ToList();

            return results;
        }

        public PagedList<OperationTypeFamily> GetOtfTable(FilterOtfTableSelected filter)
        {
            var operationTypeFamilies = Context.OperationTypeFamily
                .Where(x=>x.IdUserGroup == filter.User.IdUserGroup)
                .Include(x => x.Movement)
                .AsQueryable();

            if (filter.Label != null)
            {
                operationTypeFamilies = operationTypeFamilies.Where(x => x.Label.Contains(filter.Label));
            }
            if (filter.Movement != null)
            {
                operationTypeFamilies = operationTypeFamilies.Where(x => x.IdMovement == filter.Movement.Id);
            }

            //string columnSorted;
            //columnSorted = $"OperationTypeFamily.{filter.Pagination.SortColumn}";
            //if (filter.Pagination.SortColumn.Contains("movement"))
            //{
            //    columnSorted = $"{columnSorted}.Label";
            //}

            if (filter.Pagination.SortDirection == "asc")
            {
                operationTypeFamilies = operationTypeFamilies.OrderBy(filter.Pagination.SortColumn);
            }
            else
            {
                operationTypeFamilies = operationTypeFamilies.OrderByDescending(filter.Pagination.SortColumn);
            }

            var results = PagedListRepository<OperationTypeFamily>.Create(operationTypeFamilies, filter.Pagination);
            return results;
        }

        public OperationTypeFamily GetOtfDetail(int idOperationTypeFamily)
        {
            var operationTypeFamily = Context.OperationTypeFamily
                .Where(x => x.Id == idOperationTypeFamily)
                .Include(x=>x.Movement)
                .FirstOrDefault();

            return operationTypeFamily;
        }

        public OperationTypeFamily GetByCodeUserGroup(EnumCodeOtf enumCodeOtf, int idUserGroup)
        {
            var operationTypeFamily = Context.OperationTypeFamily
                .Where(x => x.IdUserGroup == idUserGroup
                    && x.Code == enumCodeOtf.ToString())
                .FirstOrDefault();

            return operationTypeFamily;
        }

        //public OperationTypeFamily GetUnknown(int idUserGroup)
        //{
        //    var operationTypeFamily = Context.OperationTypeFamily
        //        .Where(x => x.IdUserGroup == idUserGroup
        //            && x.Label == "INCONNU")
        //        .FirstOrDefault();

        //    return operationTypeFamily;
        //}

        public void DeleteWithEscalation(OperationTypeFamily operationTypeFamily)
        {
            //suppression operations type liés
            var ots = Context.OperationType
                .Where(x => x.IdOperationTypeFamily == operationTypeFamily.Id)
                .ToList();

            foreach(var ot in ots)
            {
                //suppression des opérations liées
                var os = Context.Operation
                    .Where(x => x.IdOperationType == ot.Id)
                    .ToList();
                foreach(var o in os)
                {
                    _operationRepository.DeleteWithTran(o);
                }

                _operationTypeRepository.DeleteWithTran(ot);

            }

            DeleteWithTran(operationTypeFamily);

            Context.SaveChanges();

        }


    }
}
