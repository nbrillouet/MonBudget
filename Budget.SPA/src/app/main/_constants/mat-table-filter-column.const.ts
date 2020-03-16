import { Column } from "../apps/web-component/mat-table-filter/model/mat-table-filter.model";
import { EnumStyleType, EnumFilterType } from "../apps/web-component/mat-table-filter/model/mat-table-filter.enum";

export const USER_COLUMNS : Column[]=
[ 
   { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
   { field: 'avatarUrl',label:'avatar',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.image,datas:null}},
   { field: 'lastName',label:'nom',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
   { field: 'firstName',label:'prénom',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
   { field: 'userName',label:'pseudonyme',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}}
];

export const AS_MODEL_1_COLUMNS : Column[]=
[ 
  { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  { field: 'plans',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
  { field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} },
  { field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
];

export const AS_MODEL_2_COLUMNS: Column[]=
[ 
  { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  { field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} },
  { field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
];

export const ASI_COLUMNS: Column[]=
[ 
    { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
    { field: 'fileImport',label:'nom fichier',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.label,datas:null}},
    { field: 'dateImport',label:'Date import',isSortable:true,width:{isFixed:true,value:100}, filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} }
];

export const PLAN_POSTE_COLUMNS: Column[]=
[ 
    { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
    { field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}}
];

export const PLAN_COLUMNS: Column[]=
[ 
   { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
   { field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.label,datas:null}},
   { field: 'year',label:'année',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}}
];

export const OTF_COLUMNS : Column[]=
[ 
  { field: 'isUsed',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.dotBool,datas:null}},
  { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  { field: 'asset-label',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.image,datas:null}},
  { field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'movement-label',label:'sens',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  //{ field: 'none',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.buttonIcon,datas:{icon: 'delete_forever',tooltip: 'supprimer enregistrement'}}}
];

export const OT_COLUMNS: Column[]=
[ 
  { field: 'isUsed',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.dotBool,datas:null}},
  { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  { field: 'operationTypeFamily-label',label:'Catégorie opération',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}}
  //{ field: 'none',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.buttonIcon,datas:{icon: 'delete_forever',tooltip: 'supprimer enregistrement'}}}
];

export const OPERATION_COLUMNS: Column[]=
[ 
  { field: 'isUsed',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.dotBool,datas:null}},
  { field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  { field: 'operationMethod-label',label:'Méthode opération',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'operationType-label',label:'Type opération',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
  { field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}}
//   { field: 'none',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.buttonIcon,datas:{icon: 'delete_forever',tooltip: 'supprimer enregistrement'}}}
];