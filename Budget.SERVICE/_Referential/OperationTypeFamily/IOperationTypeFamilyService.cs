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
    public interface IOperationTypeFamilyService
    {
        List<SelectDto> GetSelectList(int idUserGroup, EnumMovement enumMovement, EnumSelectType enumSelectType);
        List<SelectDto> GetSelectList(int idUserGroup, EnumSelectType enumSelectType);
        List<SelectGroupDto> GetSelectGroup(int idUserGroup);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);
        PagedList<OtfForTableDto> GetOtfTable(FilterOtfTableSelected filter);
        OtfForDetailDto GetOtfDetail(int idOperationTypeFamily);
        SelectDto GetUnknown(int idUserGroup);

        OtfForDetailDto SaveOtfDetail(OtfForDetailDto otfForDetailDto);
        bool DeleteOtfDetail(int idOtf);


    }
}
