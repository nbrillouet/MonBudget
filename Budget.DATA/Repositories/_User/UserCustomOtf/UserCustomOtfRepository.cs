using Budget.MODEL.Database;
using System.Collections.Generic;
using System.Linq;


namespace Budget.DATA.Repositories
{
    public class UserCustomOtfRepository : BaseRepository<UserCustomOtf>, IUserCustomOtfRepository
    {
        public UserCustomOtfRepository(BudgetContext context) : base(context)
        {
        }

        public List<OperationTypeFamily> GetOperationTypeFamilySelect(int idUser, int idAccount)
        {
            var results = Context.UserCustomOtf
                .Where(x => x.IdUser == idUser && x.IdAccount== idAccount)
                .Select(x => x.OperationTypeFamily)
                .ToList();

            return results;
        }

        public List<UserCustomOtf> Get(int idUser, int idAccount)
        {
            var results = Context.UserCustomOtf
                .Where(x => x.IdUser == idUser && x.IdAccount == idAccount)
                .ToList();

            return results;
        }

    }
}
