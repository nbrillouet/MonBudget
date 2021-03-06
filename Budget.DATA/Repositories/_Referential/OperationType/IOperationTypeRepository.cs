﻿using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IOperationTypeRepository : IBaseRepository<OperationType>
    {
        List<OperationType> GetByIdUserGroup(int idUserGroup);
        List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily);
        List<OperationType> GetByOperationTypeFamilies(int idUserGroup, List<SelectDto> OperationTypeFamilies);
        OperationType GetByIdWithOperationTypeFamily(int idOperationType);
        List<OperationType> GetByIdMovement(int idUserGroup, EnumMovement enumMovement);
        List<OperationType> GetByIdList(List<int> idList);
        OperationType GetUnknown(int idUserGroup);
        PagedList<OperationType> GetOtTable(FilterOtTableSelected filter);
        OperationType GetOtDetail(int idOperationType);

        void DeleteWithEscalation(OperationType operationType);
    }
}
