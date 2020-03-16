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
        OtfForDetail GetById(int idOtf);
        SelectDto GetByCodeUserGroupForSelect(EnumCodeOtf enumCodeOtf, int idUserGroup);
        List<SelectDto> GetSelectList(int idUserGroup, EnumMovement enumMovement, EnumSelectType enumSelectType);
        List<SelectDto> GetSelectList(int idUserGroup, EnumSelectType enumSelectType);
        List<SelectGroupDto> GetSelectGroup(int idUserGroup);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste);
        List<SelectDto> GetSelectListByIdList(List<int> idList);
        List<SelectDto> GetByIdUserGroup(int idUserGroup);

        PagedList<OtfForTableDto> GetForTable(FilterOtfTableSelected filter);
        OtfForDetail GetForDetail(int? idOtf, int idUser);
        OtfForDetail Save(OtfForDetail otfForDetail);
        void DeleteList(List<int> idOtfList, int idUserGroup);



    }
}
