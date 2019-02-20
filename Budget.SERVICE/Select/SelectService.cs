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
                    case (int)EnumSelectType.Empty:
                        //Aucun ajout de base dans la liste
                        return Selectlist;
                    case (int)EnumSelectType.Inconnu:
                        select = new SelectDto { Id = 1, Label = "INCONNU" };
                        break;
                    case (int)EnumSelectType.Inconnue:
                        select = new SelectDto { Id = 1, Label = "INCONNU" };
                        break;
                    case (int)EnumSelectType.Tous:
                        select = new SelectDto { Id = 0, Label = "Tous" };
                        break;
                    case (int)EnumSelectType.Toutes:
                        select = new SelectDto { Id = 0, Label = "Toutes" };
                        break;
                    case (int)EnumSelectType.Aucun:
                        select = new SelectDto { Id = 0, Label = "Aucun" };
                        break;
                    case (int)EnumSelectType.Aucune:
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
