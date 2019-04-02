using AutoMapper;
using Budget.DATA.Repositories.GMap;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public class GMapAddressService : IGMapAddressService
    {
        private readonly IGMapAddressRepository _gMapAddressRepository;
        private readonly IMapper _mapper;
        private readonly IGMapAdministrativeAreaLevel1Service _gMapAdministrativeAreaLevel1Service;
        private readonly IGMapAdministrativeAreaLevel2Service _gMapAdministrativeAreaLevel2Service;
        private readonly IGMapCountryService _gMapCountryService;
        private readonly IGMapLocalityService _gMapLocalityService;
        private readonly IGMapNeighborhoodService _gMapNeighborhoodService;
        private readonly IGMapPostalCodeService _gMapPostalCodeService;
        private readonly IGMapRouteService _gMapRouteService;
        private readonly IGMapStreetNumberService _gMapStreetNumberService;
        private readonly IGMapSublocalityLevel1Service _gMapSublocalityLevel1Service;
        private readonly IGMapSublocalityLevel2Service _gMapSublocalityLevel2Service;
        private readonly IGMapTypeService _gMapTypeService;
        private readonly IGMapAddressTypeService _gMapAddressTypeService;

        public GMapAddressService(
            IGMapAddressRepository gMapAddressRepository,
            IMapper mapper,
            IGMapAdministrativeAreaLevel1Service gMapAdministrativeAreaLevel1Service,
            IGMapAdministrativeAreaLevel2Service gMapAdministrativeAreaLevel2Service,
            IGMapCountryService gMapCountryService,
            IGMapLocalityService gMapLocalityService,
            IGMapNeighborhoodService gMapNeighborhoodService,
            IGMapPostalCodeService gMapPostalCodeService,
            IGMapRouteService gMapRouteService,
            IGMapStreetNumberService gMapStreetNumberService,
            IGMapSublocalityLevel1Service gMapSublocalityLevel1Service,
            IGMapSublocalityLevel2Service gMapSublocalityLevel2Service,
            IGMapTypeService gMapTypeService,
            IGMapAddressTypeService gMapAddressTypeService)
        {
            _gMapAddressRepository = gMapAddressRepository;
            _mapper = mapper;
            _gMapAdministrativeAreaLevel1Service = gMapAdministrativeAreaLevel1Service;
            _gMapAdministrativeAreaLevel2Service = gMapAdministrativeAreaLevel2Service;
            _gMapCountryService = gMapCountryService;
            _gMapLocalityService = gMapLocalityService;
            _gMapNeighborhoodService = gMapNeighborhoodService;
            _gMapPostalCodeService = gMapPostalCodeService;
            _gMapRouteService = gMapRouteService;
            _gMapStreetNumberService = gMapStreetNumberService;
            _gMapSublocalityLevel1Service = gMapSublocalityLevel1Service;
            _gMapSublocalityLevel2Service = gMapSublocalityLevel2Service;
            _gMapTypeService = gMapTypeService;
            _gMapAddressTypeService = gMapAddressTypeService;
        }

        public GMapAddressDto GetById(int id, EnumLanguage enumLanguage)
        {
            GMapAddress gMapAddress = _gMapAddressRepository.GetById(id);
            GMapAddressDto gMapAddressDto = _mapper.Map<GMapAddressDto>(gMapAddress);
            if(gMapAddressDto!=null)
                gMapAddressDto.GMapTypes= _gMapAddressTypeService.GetByIdGMapAddress(id, enumLanguage);

            return gMapAddressDto;
        }

        public GMapAddressDto Create(GMapAddressDto gMapAddressDto)
        {
            GMapAddress gMapAddress = _mapper.Map<GMapAddress>(gMapAddressDto);
            GMapAdministrativeAreaLevel1 gMapAdministrativeAreaLevel1 = _gMapAdministrativeAreaLevel1Service.GetByLabelOrCreate(gMapAddress.gMapAdministrativeAreaLevel1);
            GMapAdministrativeAreaLevel2 gMapAdministrativeAreaLevel2 = _gMapAdministrativeAreaLevel2Service.GetByLabelOrCreate(gMapAddress.gMapAdministrativeAreaLevel2);
            GMapCountry gMapCountry = _gMapCountryService.GetByLabelOrCreate(gMapAddress.gMapCountry);
            GMapLocality gMapLocality = _gMapLocalityService.GetByLabelOrCreate(gMapAddress.gMapLocality);
            GMapNeighborhood gMapNeighborhood = _gMapNeighborhoodService.GetByLabelOrCreate(gMapAddress.gMapNeighborhood);
            GMapPostalCode gMapPostalCode = _gMapPostalCodeService.GetByLabelOrCreate(gMapAddress.gMapPostalCode);
            GMapRoute gMapRoute = _gMapRouteService.GetByLabelOrCreate(gMapAddress.gMapRoute);
            GMapStreetNumber gMapStreetNumber = _gMapStreetNumberService.GetByLabelOrCreate(gMapAddress.gMapStreetNumber);
            GMapSublocalityLevel1 gMapSublocalityLevel1 = _gMapSublocalityLevel1Service.GetByLabelOrCreate(gMapAddress.gMapSublocalityLevel1);
            GMapSublocalityLevel2 gMapSublocalityLevel2 = _gMapSublocalityLevel2Service.GetByLabelOrCreate(gMapAddress.gMapSublocalityLevel2);

            gMapAddress.idGMapAdministrativeAreaLevel1 = gMapAdministrativeAreaLevel1.Id;
            gMapAddress.idGMapAdministrativeAreaLevel2 = gMapAdministrativeAreaLevel2.Id;
            gMapAddress.idGMapCountry = gMapCountry.Id;
            gMapAddress.idGMapLocality = gMapLocality.Id;
            gMapAddress.idGMapNeighborhood = gMapNeighborhood.Id;
            gMapAddress.idGMapPostalCode = gMapPostalCode.Id;
            gMapAddress.idGMapRoute = gMapRoute.Id;
            gMapAddress.idGMapStreetNumber = gMapStreetNumber.Id;
            gMapAddress.idGMapSublocalityLevel1 = gMapSublocalityLevel1.Id;
            gMapAddress.idGMapSublocalityLevel2 = gMapSublocalityLevel2.Id;

            List<GMapTypeDto> gMapTypes = _gMapTypeService.GetByKeywordOrCreate(_mapper.Map<List<GMapType>>(gMapAddressDto.GMapTypes), EnumLanguage.FR);
            

            //Recherche si adresse existe deja
            var gMapAddressDuplicate = _gMapAddressRepository.GetByGMapAddress(gMapAddress);
            if (gMapAddressDuplicate == null)
            {
                gMapAddress = _gMapAddressRepository.Create(gMapAddress);
                gMapAddressDto = _mapper.Map<GMapAddressDto>(gMapAddress);

                //creation du GMapAddressType
                List<GMapAddressType> gMapAddressTypes = _gMapAddressTypeService.Create(gMapAddress.Id, gMapTypes);
                gMapAddressDto.GMapTypes = gMapTypes; // _mapper.Map<List<SelectDto>>(gMapTypes);
            }
            else
            {
                gMapAddressDto = _mapper.Map<GMapAddressDto>(gMapAddressDuplicate);
                gMapAddressDto.GMapTypes = gMapTypes; // _mapper.Map<List<SelectDto>>(_gMapAddressTypeService.GetByIdGMapAddress(gMapAddressDuplicate.Id));
            }

            return gMapAddressDto;
      
        }

    }


}
