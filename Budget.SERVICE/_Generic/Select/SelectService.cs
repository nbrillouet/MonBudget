using AutoMapper;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class SelectService: ISelectService
    {
        //private readonly OperationTypeService _operationTypeService;
        //private readonly OperationTypeFamilyService _operationTypeFamilyService;
        //private readonly OperationService _operationService;
        //private readonly IMapper _mapper;

        //public SelectService(
        //    OperationTypeService operationTypeService,
        //    OperationTypeFamilyService operationTypeFamilyService,
        //    OperationService operationService,
        //    IMapper mapper

        //    )
        //{
        //    _operationTypeService = operationTypeService;
        //    _operationTypeFamilyService = operationTypeFamilyService;
        //    _operationService = operationService;
        //    _mapper = mapper;

        //}

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
                    //switch(enumTableRef)
                    //{
                    //    case EnumTableRef.OperationType:
                    //        select = _mapper.Map<SelectDto>(_operationTypeService.GetUnknown(idUserGroup));
                    //        break;

                    //    case EnumTableRef.OperationTypeFamily:
                    //        select = _mapper.Map<SelectDto>(_operationTypeFamilyService.GetUnknown(idUserGroup));
                    //        break;
                    //    case EnumTableRef.Operation:
                    //        select = _mapper.Map<SelectDto>(_operationService.GetUnknown(idUserGroup));
                    //        break;
                    //    case EnumTableRef.OperationMethod:
                    //    case EnumTableRef.AccountType:
                    //        select = new SelectDto { Id = 1, Label = "INCONNU" }; ;
                    //        break;
                    //}

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
    }
}
