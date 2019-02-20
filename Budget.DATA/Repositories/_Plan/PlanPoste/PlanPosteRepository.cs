﻿using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class PlanPosteRepository : BaseRepository<PlanPoste>, IPlanPosteRepository
    {
        public PlanPosteRepository(BudgetContext context) : base(context)
        {

        }

        public new PlanPoste GetById(int id)
        {
            var planPoste = Context.PlanPoste
                .Where(x => x.Id == id)
                .Include(x=>x.Poste)
                .Include(x=>x.ReferenceTable)
                .FirstOrDefault();
            return planPoste;
        }

        public List<PlanPoste> Get(int idPlan,int idPoste)
        {
            var planPostes = Context.PlanPoste
                .Where(x => x.IdPlan== idPlan && x.IdPoste == idPoste)
                .ToList();
            return planPostes;
        }
    }


}
