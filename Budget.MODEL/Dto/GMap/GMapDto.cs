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
        public SelectDto gMapAdministrativeAreaLevel1 { get; set; }
        public SelectDto gMapAdministrativeAreaLevel2 { get; set; }
        public SelectDto gMapCountry { get; set; }
        public SelectDto gMapLocality { get; set; }
        public SelectDto gMapNeighborhood { get; set; }
        public SelectDto gMapPostalCode { get; set; }
        public SelectDto gMapRoute { get; set; }
        public SelectDto gMapStreetNumber { get; set; }
        public SelectDto gMapSublocalityLevel1 { get; set; }
        public SelectDto gMapSublocalityLevel2 { get; set; }
        public List<GMapTypeDto> GMapTypes { get; set; }
    }

    public class GMapTypeDto
    {
        public int Id { get; set; }
        public string Keyword { get; set; }
        public string Label { get; set; }
    }
    
}
