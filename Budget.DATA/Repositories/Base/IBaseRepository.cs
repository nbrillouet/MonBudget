using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IBaseRepository<T>
    {
        Task<List<T>> GetAll();
        //Task<T> GetById(int id);
        Task<T> Create(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
