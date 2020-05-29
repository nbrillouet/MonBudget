using AutoMapper;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class SelectService: ISelectService
    {
        private readonly IMapper _mapper;

        public SelectService(
            IMapper mapper

            )
        {
            _mapper = mapper;

        }

        public List<Select> GetSelectList(EnumSelectType enumSelectType)
        {
            List<Select> Selectlist = new List<Select>();

            Select select = new Select();
            switch (enumSelectType)
            {
                case EnumSelectType.Empty:
                    //Aucun ajout de base dans la liste
                    return Selectlist;
                case EnumSelectType.Inconnu:
                case EnumSelectType.Inconnue:
                    select = new Select { Id = 1, Label = "INCONNU" };
                    break;
                case EnumSelectType.Tous:
                    select = new Select { Id = 0, Label = "TOUS" };
                    break;
                case EnumSelectType.Toutes:
                    select = new Select { Id = 0, Label = "TOUTES" };
                    break;
                case EnumSelectType.Aucun:
                    select = new Select { Id = -1, Label = "AUCUN" };
                    break;
                case EnumSelectType.Aucune:
                    select = new Select { Id = -1, Label = "AUCUNE" };
                    break;
            }

            Selectlist.Add(select);
            return Selectlist;
        }

        public List<SelectCode> GetSelectCodeList(EnumSelectType enumSelectType)
        {
            List<SelectCode> SelectCodelist = _mapper.Map<List<SelectCode>>(GetSelectList(enumSelectType));
            return SelectCodelist;

        }
    }
}
