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
        Account GetFullById(int idAccount);
        Account GetById(int idAccount);
        void Update(AccountForDetailDto accountForDetailDto);
        Account Create(int idUser, AccountForDetailDto accountForDetailDto);
        Account GetByNumber(string number);

        List<Account> GetAll();
        List<Account> GetByIdBankAgency(int idBankAgency);


        void Update(Account account);
        void Delete(Account account);
        void Delete(int idUser, int idAccount);
    }
}
