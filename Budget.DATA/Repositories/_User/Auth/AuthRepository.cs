﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Budget.MODEL;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Budget.DATA.Repositories
{
    public class AuthRepository : BaseRepository<User>, IAuthRepository
    {
        public AuthRepository(BudgetContext context) : base(context)
        {

        }

        public async Task<User> Login(string username, string password)
        {

            var user = await Context.User
                .Where(x => x.UserName == username)
                .Include(x => x.Shortcuts)
                .Include(x=>x.UserAccounts)
                    .ThenInclude(u=>u.Account)
                        .ThenInclude(a => a.BankAgency)
                 .Include(x => x.UserAccounts)
                    .ThenInclude(u => u.Account)
                        .ThenInclude(a => a.AccountType)
                .FirstOrDefaultAsync();

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            //auth successful
            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {

                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                        return false;
                }

            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await Context.User.AddAsync(user);
            await Context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if (await Context.User.AnyAsync(x => x.UserName == username))
                return true;

            return false;
        }
    }
}