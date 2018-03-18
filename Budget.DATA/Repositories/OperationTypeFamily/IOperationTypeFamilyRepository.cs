﻿using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTypeFamilyRepository : IBaseRepository<OperationTypeFamily>
    {
        List<OperationTypeFamily> GetAllByOrder();
        List<GenericList> GetGenericList();
        List<GenericList> GetGenericListByIdMovement(int idMovement, EnumSelect enumSelect);
        List<OperationTypeFamily> GetByIdMovement(int idMovement, EnumSelect enumSelect);
        new int Create(OperationTypeFamily operationTypeFamily);
    }
}