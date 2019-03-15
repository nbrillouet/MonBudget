using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class OperationDetailRepository : BaseRepository<OperationDetail>, IOperationDetailRepository
    {
        public OperationDetailRepository(BudgetContext context) : base(context)
        {
        }

        
        public OperationDetail GetForAddressById(int id)
        {
            var result = Context.OperationDetail
                .Where(x => x.Id == id)
                .Include(x => x.GMapAddress)
                .Include(x => x.GMapAddress.gMapAdministrativeAreaLevel1)
                .Include(x => x.GMapAddress.gMapAdministrativeAreaLevel2)
                .Include(x => x.GMapAddress.gMapCountry)
                .Include(x => x.GMapAddress.gMapLocality)
                .Include(x => x.GMapAddress.gMapNeighborhood)
                .Include(x => x.GMapAddress.gMapPostalCode)
                .Include(x => x.GMapAddress.gMapRoute)
                .Include(x => x.GMapAddress.gMapStreetNumber)
                .Include(x => x.GMapAddress.gMapSublocalityLevel1)
                .Include(x => x.GMapAddress.gMapSublocalityLevel2)
                .FirstOrDefault();

            return result;
        }

        public OperationDetail GetByIdOperation(int idOperation)
        {
            var result = Context.OperationDetail
                .Where(x => x.IdOperation == idOperation)
                .Include(x=>x.GMapAddress)
                .Include(x=>x.GMapAddress.gMapAdministrativeAreaLevel1)
                .Include(x=>x.GMapAddress.gMapAdministrativeAreaLevel2)
                .Include(x=>x.GMapAddress.gMapCountry)
                .Include(x=>x.GMapAddress.gMapLocality)
                .Include(x=>x.GMapAddress.gMapNeighborhood)
                .Include(x=>x.GMapAddress.gMapPostalCode)
                .Include(x=>x.GMapAddress.gMapRoute)
                .Include(x=>x.GMapAddress.gMapStreetNumber)
                .Include(x=>x.GMapAddress.gMapSublocalityLevel1)
                .Include(x=>x.GMapAddress.gMapSublocalityLevel2)
                .FirstOrDefault();

            return result;
        }

        public List<OperationDetail> GetAllByIdOperationMethod(int idOperationMethod)
        {
            var results = Context.OperationDetail
                .Where(x => x.Operation.IdOperationMethod == idOperationMethod)
                .Include(x=>x.Operation)
                .Include(x=>x.Operation.OperationType)
                .Include(x=>x.GMapAddress)
                .ToList();

            return results;
        }

        public OperationDetail GetByOperationDetail(OperationDetail operationDetail)
        {
            OperationDetail result = null;
            result = Context.OperationDetail
                .Where(x => x.IdOperation== operationDetail.IdOperation
                    && x.IdGMapAddress == operationDetail.IdGMapAddress
                    && x.KeywordOperation == operationDetail.KeywordOperation
                    && x.KeywordPlace == operationDetail.KeywordPlace)
                .FirstOrDefault();

            return result;

            //result = Context.OperationDetail
            //    .Where(x => x.IdOperation == operationDetail.IdOperation
            //        && x.IdGMapAddress == operationDetail.IdGMapAddress)
            //    .FirstOrDefault();
            //if (result != null)
            //    return result;

            //return result;
        }

        public OperationDetail FindKeywordPlace(string operationLabel)
        {
            var result = Context.OperationDetail
                    .Where(x => operationLabel.Contains(x.KeywordPlace))
                    .Include(x => x.GMapAddress.gMapLocality)
                    .FirstOrDefault();

            return result;
        }

        public bool HasSameKeywords(OperationDetail operationDetail)
        {
            //if(operationDetail.KeywordPlace!=null)
            //{
                return Context.OperationDetail
                    .Where(x => x.KeywordOperation == operationDetail.KeywordOperation
                        && x.KeywordPlace == operationDetail.KeywordPlace)
                    .Any();
            //}
            //else
            //{
            //    return Context.OperationDetail
            //        .Where(x => x.KeywordOperation == operationDetail.KeywordOperation)
            //        .Any();
            //}
        }
    }
}
