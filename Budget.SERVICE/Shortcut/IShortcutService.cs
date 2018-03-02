using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IShortcutService
    {
        Task<Shortcut> GetById(int id);

        void Delete(Shortcut shortcut);

        Task<Shortcut> Create(Shortcut shortcut);
    }
}
