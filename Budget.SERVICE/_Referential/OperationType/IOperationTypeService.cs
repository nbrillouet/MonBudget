using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTypeService
    {
        List<SelectDto> GetSelectList(int idUserGroup, List<SelectDto> operationTypeFamilies);
        List<SelectDto> GetSelectList(int idOperationTypeFamily, EnumSelectType enumSelectType);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);
        OperationType GetByIdWithOperationTypeFamily(int idOperationType);
        OperationType GetUnknown(int idUserGroup);
        PagedList<OtForTableDto> GetOtTable(FilterOtTableSelected filter);
        OtForDetailDto GetOtDetail(int idOperationType, int idUserGroup);

        OtForDetailDto SaveOtDetail(OtForDetailDto otForDetailDto);
        bool DeleteOtDetail(int idOt);

    }
}
