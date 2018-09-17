using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories.GMap
{
    public interface IGMapAddressTypeRepository
    {
        GMapAddressType Create(GMapAddressType gMapAddressType);
        List<GMapType> GetByIdGMapAddress(int id);
    }


}
