using Budget.DATA.Repositories;
using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public class ShortcutService : IShortcutService
    {
        private readonly IShortcutRepository _shortcutRepository;

        public ShortcutService(IShortcutRepository shortcutRepository)
        {
            _shortcutRepository = shortcutRepository;
        }

        public Task<Shortcut> GetByIdAsync(int id)
        {
            return _shortcutRepository.GetByIdAsync(id);
        }

        public Task<Shortcut> Create(Shortcut shortcut)
        {
            return _shortcutRepository.Create(shortcut);
        }

        public void Delete(Shortcut shortcut)
        {
            _shortcutRepository.Delete(shortcut);
        }
    }
}
