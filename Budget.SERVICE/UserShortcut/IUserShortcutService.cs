using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IUserShortcutService
    {
        Task<UserShortcut> GetByIdAsync(int id);

        void Delete(UserShortcut shortcut);

        Task<UserShortcut> Create(UserShortcut shortcut);
    }
}
