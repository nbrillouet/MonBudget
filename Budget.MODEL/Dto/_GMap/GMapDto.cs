using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class GMapAddressDto
    {
        public int Id { get; set; }
        public string FormattedAddress { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
        public Select gMapAdministrativeAreaLevel1 { get; set; }
        public Select gMapAdministrativeAreaLevel2 { get; set; }
        public Select gMapCountry { get; set; }
        public Select gMapLocality { get; set; }
        public Select gMapNeighborhood { get; set; }
        public Select gMapPostalCode { get; set; }
        public Select gMapRoute { get; set; }
        public Select gMapStreetNumber { get; set; }
        public Select gMapSublocalityLevel1 { get; set; }
        public Select gMapSublocalityLevel2 { get; set; }
        public List<GMapTypeDto> GMapTypes { get; set; }
    }

    public class GMapTypeDto
    {
        public int Id { get; set; }
        public string Keyword { get; set; }
        public string Label { get; set; }
    }
    
}
