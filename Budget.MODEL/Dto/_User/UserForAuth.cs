using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class UserForAuth
    {
        public int Id { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
        public int IdUserGroup { get; set; }
    }
}
