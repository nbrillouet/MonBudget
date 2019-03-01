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
        List<SelectDto> GetSelectList(EnumMovement enumMovement, EnumSelectType enumSelectType);
        List<SelectGroupDto> GetSelectGroup();

        OperationTypeFamily GetById(int idOperationTypeFamily);

        //List<OperationTypeFamily> GetByIdMovement(EnumMovement enumMovement, EnumSelect enumSelect);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);

        int Create(OperationTypeFamily operationTypeFamily);
        void Update(OperationTypeFamily operationTypeFamily);
        void Delete(OperationTypeFamily operationTypeFamily);
    }
}
