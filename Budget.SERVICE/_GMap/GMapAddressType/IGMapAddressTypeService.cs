using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE.GMap
{
    public interface IGMapAddressTypeService
    {
        GMapAddressType Create(GMapAddressType gMapAddressType);
        List<GMapAddressType> Create(int idGMapAddress,List<GMapType> gMapTypes);
        List<GMapType> GetByIdGMapAddress(int id);
    }


}
