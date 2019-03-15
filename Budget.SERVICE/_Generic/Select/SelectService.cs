using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class SelectService: ISelectService
    {
        public List<SelectDto> GetSelectList(EnumSelectType enumSelectType)
        {
            List<SelectDto> Selectlist = new List<SelectDto>();

            SelectDto select = new SelectDto();
            switch (enumSelectType)
            {
                case EnumSelectType.Empty:
                    //Aucun ajout de base dans la liste
                    return Selectlist;
                case EnumSelectType.Inconnu:
                    select = new SelectDto { Id = 1, Label = "INCONNU" };
                    break;
                case EnumSelectType.Inconnue:
                    select = new SelectDto { Id = 1, Label = "INCONNU" };
                    break;
                case EnumSelectType.Tous:
                    select = new SelectDto { Id = 0, Label = "TOUS" };
                    break;
                case EnumSelectType.Toutes:
                    select = new SelectDto { Id = 0, Label = "TOUTES" };
                    break;
                case EnumSelectType.Aucun:
                    select = new SelectDto { Id = -1, Label = "AUCUN" };
                    break;
                case EnumSelectType.Aucune:
                    select = new SelectDto { Id = -1, Label = "AUCUNE" };
                    break;
            }

            Selectlist.Add(select);
            return Selectlist;
        }
    }
}
