using Budget.MODEL;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Dtos
{
    public class AccountStatementImportForUploadDto
    {
        public IFormFile File { get; set; }

    }
}
