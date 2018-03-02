﻿using Budget.MODEL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class ShortcutRepository : BaseRepository<Shortcut>, IShortcutRepository
    {
        public ShortcutRepository(BudgetContext context) : base(context)
        {
        }

        public Task<Shortcut> GetById(int id)
        {
            return Context.Shortcut
                .Where(x => x.Id == id)
                .FirstOrDefaultAsync();
        }

        
    }
}
