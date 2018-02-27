using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateLastActive { get; set; }
        public string AvatarUrl { get; set; }
    }
}
