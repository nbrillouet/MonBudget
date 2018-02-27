using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Dtos
{
    public class UserForAvatarCreationDto
    {
        public string AvatarUrl { get; set; }
        public IFormFile File { get; set; }
        public string IdAvatarCloud { get; set; }

        public UserForAvatarCreationDto()
        {

        }
    }
}
