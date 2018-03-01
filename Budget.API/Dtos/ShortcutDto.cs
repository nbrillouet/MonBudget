using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Dtos
{
    public class ShortcutDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string Icon { get; set; }
        public string Url { get; set; }
    }
}
