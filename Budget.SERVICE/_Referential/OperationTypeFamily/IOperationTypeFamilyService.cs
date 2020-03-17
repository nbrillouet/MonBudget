using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IOperationTypeFamilyService
    {
        OtfForDetail GetById(int idOtf);
        Select GetByCodeUserGroupForSelect(EnumCodeOtf enumCodeOtf, int idUserGroup);
        List<Select> GetSelectList(int idUserGroup, EnumMovement enumMovement, EnumSelectType enumSelectType);
        List<Select> GetSelectList(int idUserGroup, EnumSelectType enumSelectType);
        List<SelectGroupDto> GetSelectGroup(int idUserGroup);
        List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste);
        List<Select> GetSelectListByIdList(List<int> idList);
        List<Select> GetByIdUserGroup(int idUserGroup);

        PagedList<OtfForTableDto> GetForTable(FilterOtfTableSelected filter);
        OtfForDetail GetForDetail(int? idOtf, int idUser);
        OtfForDetail Save(OtfForDetail otfForDetail);
        void DeleteList(List<int> idOtfList, int idUserGroup);



    }
}
