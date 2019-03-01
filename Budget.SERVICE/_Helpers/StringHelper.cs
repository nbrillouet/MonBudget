using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE._Helpers
{
    public static class StringHelper
    {
        public static string GetLogoUrl(string logoClassName)
        {
            if (logoClassName != null)
                return $"assets/images/Otf/{logoClassName}_128.png";

            return "assets/images/Otf/OtfInconnu_128.png";
        }
    }
}
