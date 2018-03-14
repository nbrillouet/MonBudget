using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IBaseRepository<T>
    {
        Task<List<T>> GetAllAsync();
        List<T> GetAll();
        T GetById(int id);
        Task<T> GetByIdAsync(int id);
        Task<T> Create(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
