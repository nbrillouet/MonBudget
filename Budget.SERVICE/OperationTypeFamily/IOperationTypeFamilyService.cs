using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTypeFamilyService
    {
        List<SelectDto> GetSelects(int idMovement,int idSelectType);
        List<SelectGroupDto> GetSelectGroup();

        OperationTypeFamily GetById(int idOperationTypeFamily);
        //List<GenericList> GetGenericList();
        //List<GenericList> GetGenericListByIdMovement(int idMovement, EnumSelect enumSelect);
        List<OperationTypeFamily> GetByIdMovement(int idMovement, EnumSelect enumSelect);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);

        int Create(OperationTypeFamily operationTypeFamily);
        void Update(OperationTypeFamily operationTypeFamily);
        void Delete(OperationTypeFamily operationTypeFamily);
    }
}
