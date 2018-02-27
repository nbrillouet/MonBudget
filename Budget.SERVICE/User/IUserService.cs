﻿using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IUserService
    {
        Task<User> GetById(int id);
        Task<List<User>> GetAll();
        void Update(User entity);

    }
}
