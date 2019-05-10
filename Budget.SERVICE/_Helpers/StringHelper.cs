using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE._Helpers
{
    public static class StringHelper
    {
        public static string GetLogoUrl(string logoClassName,int logoSize)
        {
            if (logoClassName != null)
                return $"assets/images/Otf/{logoClassName}_{logoSize}.png";

            return $"assets/images/Otf/OtfInconnu_{logoSize}.png";
        }
    }
}
