using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public interface IGMapTypeService
    {
        List<GMapTypeDto> GetByKeywordOrCreate(List<GMapType> gMapTypes, EnumLanguage enumLanguage);
        List<GMapTypeDto> GetGMapTypeDto(List<GMapType> gMapTypes, EnumLanguage enumLanguage);
    }


}
