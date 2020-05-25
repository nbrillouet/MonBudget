using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountService
    {
        PagedList<AccountForTable> GetForTable(FilterAccountTableSelected filterAccountTableSelected);
        AccountForDetail GetForDetail(int? idAccount);
        //AccountForDetailDto GetForDetailById(int id);
        Account GetFullById(int idAccount);
        Account GetById(int idAccount);
        
        Account GetByNumber(string number);
        List<Account> GetAll();
        List<Account> GetByIdBankAgency(int idBankAgency);
        Select GetSelectById(int idAccount);

        //void Update(AccountForDetailDto accountForDetailDto);
        //Account Create(int idUser, AccountForDetailDto accountForDetailDto);
        void Update(Account account);
        void Delete(Account account);
        void Delete(int idUser, int idAccount);
    }
}
