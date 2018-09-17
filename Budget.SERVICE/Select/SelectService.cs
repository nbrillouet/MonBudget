using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class SelectService: ISelectService
    {
        public List<SelectDto> GetSelectList(int typeList)
        {
            List<SelectDto> Selectlist = new List<SelectDto>();
            if (typeList != -1)
            {
                SelectDto select = new SelectDto();
                switch (typeList)
                {
                    case 0:
                        select = new SelectDto { Id = 0, Label = "Tous" };
                        break;
                    case 2:
                        select = new SelectDto { Id = 0, Label = "Toutes" };
                        break;
                    case 3:
                        select = new SelectDto { Id = 0, Label = "Aucun" };
                        break;
                    case 4:
                        select = new SelectDto { Id = 0, Label = "Aucune" };
                        break;
                }

                Selectlist = new List<SelectDto> { select };
            }
            else
            {
                Selectlist = new List<SelectDto>();
            }

            return Selectlist;
        }
    }
}
