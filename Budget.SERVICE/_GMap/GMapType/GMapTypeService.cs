using Budget.DATA.Repositories.GMap;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public class GMapTypeService : IGMapTypeService
    {
        private readonly IGMapTypeRepository _gMapTypeRepository;

        public GMapTypeService(IGMapTypeRepository gMapTypeRepository)
        {
            _gMapTypeRepository = gMapTypeRepository;
        }

        public List<GMapTypeDto> GetByLabelOrCreate(List<GMapType> gMapTypes, EnumLanguage enumLanguage)
        {
            var results = _gMapTypeRepository.GetByLabelOrCreate(gMapTypes);

            return GetGMapTypeDto(results,enumLanguage);

        }

        public List<GMapTypeDto> GetGMapTypeDto (List<GMapType> gMapTypes, EnumLanguage enumLanguage)
        {
            List<GMapTypeDto> GMapTypeDtos = new List<GMapTypeDto>();
            foreach (var item in gMapTypes)
            {
                switch (enumLanguage)
                {
                    case EnumLanguage.fr:
                        GMapTypeDtos.Add(new GMapTypeDto { Id = item.Id, Keyword = item.Keyword, Label = item.LabelFr != null ? item.LabelFr : item.Keyword });
                        break;
                }
            }

            return GMapTypeDtos;
        }


    }
}
