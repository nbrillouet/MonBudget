using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public abstract class BaseRepository<T> where T : class
    {
        public readonly BudgetContext Context;
        protected BaseRepository(BudgetContext context)
        {
            Context = context;
        }

        //public Task<T> GetById(int id)
        //{
        //    var toto = Context.Set<T>().Where(x=>x..FindAsync(id);
        //    return Context.Set<T>().FindAsync(id);
        //}

        public Task<List<T>> GetAll()
        {
            return Context.Set<T>().ToListAsync();
        }

        public void Create(T entity)
        {
            Context.Set<T>().Add(entity);
            Context.SaveChanges();
        }

        public void Update(T entity)
        {
            Context.Entry(entity).State = EntityState.Modified;
            Context.SaveChanges();
        }

        public void Delete(T entity)
        {
            Context.Set<T>().Remove(entity);
            Context.SaveChanges();
        }
    }
}
