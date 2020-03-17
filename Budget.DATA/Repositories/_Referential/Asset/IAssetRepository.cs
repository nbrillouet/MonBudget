using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IAssetRepository : IBaseRepository<Asset> 
    {
        List<Asset> GetList(EnumAssetFamily enumAssetFamily);
    }
}
