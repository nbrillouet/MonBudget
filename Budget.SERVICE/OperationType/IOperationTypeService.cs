﻿using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTypeService
    {

        List<SelectDto> GetSelects(int idOperationTypeFamily, int idSelectType);
        List<SelectDto> GetSelectList(List<SelectDto> operationTypeFamilies);


        OperationType GetByIdWithOperationTypeFamily(int idOperationType);

        List<OperationType> GetAll();
        List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect);
        OperationType GetFirstByIdOperationTypeFamily(int idOperationTypeFamily);
        OperationType GetById(int idOperationType);
        List<OperationType> GetByIdMovement(int IdMovement);

        List<GenericList> GetGenericList();
        List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect);
        List<GenericList> GetGenericListByIdMovement(int IdMovement);

        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idPoste);
        List<SelectGroupDto> GetSelectGroupListByIdList(List<int> idList);
        List<SelectDto> GetSelectListByIdList(List<int> idList);

        int Create(OperationType operationType);
        void Update(OperationType operationType);
        void Delete(OperationType operationType);
    }
}
