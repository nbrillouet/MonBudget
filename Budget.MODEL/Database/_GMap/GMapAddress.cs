using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("GMAP_ADDRESS")]
    public class GMapAddress
    {
        [Column("ID")]
        public int Id { get; set; }

        [Required]
        [Column("FORMATTED_ADDRESS")]
        public string FormattedAddress { get; set; }

        [Required]
        [Column("LAT")]
        public double Lat { get; set; }

        [Required]
        [Column("LNG")]
        public double Lng { get; set; }
        
        [Column("ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_1")]
        public int idGMapAdministrativeAreaLevel1 { get; set; }

        [ForeignKey("idGMapAdministrativeAreaLevel1")]
        public GMapAdministrativeAreaLevel1 gMapAdministrativeAreaLevel1 { get; set; }

        [Column("ID_GMAP_ADMINISTRATIVE_AREA_LEVEL_2")]
        public int idGMapAdministrativeAreaLevel2 { get; set; }

        [ForeignKey("idGMapAdministrativeAreaLevel2")]
        public GMapAdministrativeAreaLevel2 gMapAdministrativeAreaLevel2 { get; set; }

        [Column("ID_GMAP_COUNTRY")]
        public int idGMapCountry { get; set; }

        [ForeignKey("idGMapCountry")]
        public GMapCountry gMapCountry { get; set; }

        [Column("ID_GMAP_LOCALITY")]
        public int idGMapLocality { get; set; }

        [ForeignKey("idGMapLocality")]
        public GMapLocality gMapLocality { get; set; }

        [Column("ID_GMAP_NEIGHBORHOOD")]
        public int idGMapNeighborhood { get; set; }

        [ForeignKey("idGMapNeighborhood")]
        public GMapNeighborhood gMapNeighborhood { get; set; }

        [Column("ID_GMAP_POSTAL_CODE")]
        public int idGMapPostalCode { get; set; }

        [ForeignKey("idGMapPostalCode")]
        public GMapPostalCode gMapPostalCode { get; set; }

        [Column("ID_GMAP_ROUTE")]
        public int idGMapRoute { get; set; }

        [ForeignKey("idGMapRoute")]
        public GMapRoute gMapRoute { get; set; }
        //---
        [Column("ID_GMAP_STREET_NUMBER")]
        public int idGMapStreetNumber { get; set; }

        [ForeignKey("idGMapStreetNumber")]
        public GMapStreetNumber gMapStreetNumber { get; set; }

        [Column("ID_GMAP_SUBLOCALITY_LEVEL_1")]
        public int idGMapSublocalityLevel1 { get; set; }

        [ForeignKey("idGMapSublocalityLevel1")]
        public GMapSublocalityLevel1 gMapSublocalityLevel1 { get; set; }

        [Column("ID_GMAP_SUBLOCALITY_LEVEL_2")]
        public int idGMapSublocalityLevel2 { get; set; }

        [ForeignKey("idGMapSublocalityLevel2")]
        public GMapSublocalityLevel2 gMapSublocalityLevel2 { get; set; }


    }

    public enum EnumGMapAddress
    {
        Inconnu = 1,
        NonApplicable = 2
    }

}
