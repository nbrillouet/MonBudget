﻿using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationRepository : IBaseRepository<Operation>
    {
        List<Operation> GetSelectList(int idOperationMethod, int idOperationType);
        List<Operation> GetSelectList(List<SelectDto> operationMethods);
        List<Operation> GetByIdMovement(EnumMovement enumMovement);
        List<Operation> GetAllByOrder();
        List<Operation> GetAllByIdOperationMethod(int idOperationMethod);
        List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily);
        List<Operation> GetByIdList(List<int> idList);

        Operation Add(Operation operation);


        List<VPlanGlobal> getTest();

    }
}