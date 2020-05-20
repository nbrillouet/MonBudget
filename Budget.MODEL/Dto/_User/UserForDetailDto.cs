using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class UserForDetailDto
    {
        public int Id { get; set; }
        public int IdUserGroup { get; set; }
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateLastActive { get; set; }
        public int IdGMapAddress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string IdAvatarCloud { get; set; }
        public string AvatarUrl { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
        public List<UserShortcutDto> Shortcuts { get; set; }
        public List<BankAgencyWithAccountsDto> BankAgencies { get; set; }
    }

    public class UserForConnection
    {
        public int Id { get; set; }
        public int IdUserGroup { get; set; }
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
    }
}
