﻿using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IOperationTransverseAsifService
    {
        List<OperationTransverseAsif> GetByIdAsif(int idAsif);
        List<SelectDto> GetOperationTransverseSelectList(int IdAccountStatementFile, EnumSelectType enumSelectType);
        bool Update(List<SelectDto> operationTransverses, int idAsif);

    }
}
