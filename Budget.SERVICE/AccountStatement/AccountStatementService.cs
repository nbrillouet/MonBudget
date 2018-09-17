using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Budget.SERVICE.GMap;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public class AccountStatementService : IAccountStatementService
    {
        private readonly IMapper _mapper;
        private readonly IGMapAddressService _gMapAddressService;
        private readonly IAccountStatementRepository _accountStatementRepository;
        

        public AccountStatementService(
            IMapper mapper,
            IGMapAddressService gMapAddressService,
            IAccountStatementRepository accountStatementRepository)
        {
            _mapper = mapper;
            _gMapAddressService = gMapAddressService;
            _accountStatementRepository = accountStatementRepository;
        }

        public AsDetailDto GetForDetailById(int id)
        {
            var accountStatement = _accountStatementRepository.GetForDetailById(id);
            var asDetailDto = _mapper.Map<AsDetailDto>(accountStatement);
            //recherche de la gMapAddress
           // asDetailDto.GMapAddress = _gMapAddressService.GetById(accountStatement.IdGMapAddress.Value);

            return asDetailDto;
        }

        public async Task<PagedList<AccountStatement>> GetAsync(FilterAccountStatement filter)
        {
            var accountStatements = await _accountStatementRepository.GetAsync(filter);
            return accountStatements;
        }


        public PagedList1<AsGridDto> Get(FilterAccountStatement filter)
        {
            var pagedList = _accountStatementRepository.Get(filter);

            return new PagedList1<AsGridDto>(_mapper.Map<List<AsGridDto>>(pagedList.Datas), pagedList.Pagination);

        }

        ///// <summary>
        ///// Nettoie le label operation provenant dun fichier
        ///// </summary>
        ///// <param name="operationLabel"></param>
        ///// <returns></returns>
        //public string GetOperationWork(string operationLabel)
        //{
        //    string trimOperationLabel = operationLabel.ToUpper();
        //    trimOperationLabel = trimOperationLabel.Replace("'", "");
        //    trimOperationLabel = trimOperationLabel.Replace("*", "");
        //    trimOperationLabel = trimOperationLabel.Replace("-", "");
        //    trimOperationLabel = trimOperationLabel.Replace("/", "");

        //    return trimOperationLabel;
        //}

        public Boolean Save(List<AccountStatement> accountStatements)
        {

            return _accountStatementRepository.Save(accountStatements);
        }

        //public AccountStatement InitForImport()
        //{
        //    var accountStatement = new AccountStatement();
        //    accountStatement.IdAccount = (int)EnumAccount.Inconnu;
        //    accountStatement.IdOperation = (int)EnumOperation.Inconnu;
        //    accountStatement.IdOperationMethod = (int)EnumOperationMethod.Inconnu;
        //    accountStatement.IdOperationPlace = (int)EnumOperationPlace.Inconnu;
        //    return accountStatement;
        //}


        //public List<AccountStatement> GetAccountStatementsFull(List<AccountStatement> accountStatements, int idAccount)
        //{
        //    return accountStatements.Where(x => x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        //}

        //public List<AccountStatement> GetAccountStatementsComplete(List<AccountStatement> accountStatements, int idAccount)
        //{
        //    return accountStatements.Where(x => x.IdOperation != 1 && x.IdOperationMethod != 1 && x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        //}

        //public List<AccountStatement> GetAccountStatementsMethodLess(List<AccountStatement> accountStatements, int idAccount)
        //{
        //    return accountStatements.Where(x => x.IdOperationMethod == 1 && x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        //}

        //public List<AccountStatement> GetAccountStatementsOperationLess(List<AccountStatement> accountStatements, int idAccount)
        //{
        //    return accountStatements.Where(x => x.IdOperation == 1 && x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        //}

        //public double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount)
        //{
        //    return _accountStatementRepository.GetSum(startDate, endDate, idMovement, idAccount);
        //}


    }
}
