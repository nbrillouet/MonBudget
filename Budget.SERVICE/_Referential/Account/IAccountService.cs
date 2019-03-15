using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountService
    {
        AccountForDetailDto GetForDetailById(int id);
        void Update(AccountForDetailDto accountForDetailDto);
        Account Create(int idUser, AccountForDetailDto accountForDetailDto);
        Account GetByNumber(string number);
        Account GetById(int idAccount);
        List<Account> GetAll();
        List<Account> GetByIdBank(int idBank);
        //int Create(Account account);
        void Update(Account account);
        void Delete(Account account);
        void Delete(int idUser, int idAccount);
    }
}
