using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public interface IGMapAddressService
    {
        GMapAddressDto Create(GMapAddressDto gMapAddressDto);
        //GMapAddress Create(GMapAddress gMapAddress);
        GMapAddressDto GetById(int id);
    }
}
