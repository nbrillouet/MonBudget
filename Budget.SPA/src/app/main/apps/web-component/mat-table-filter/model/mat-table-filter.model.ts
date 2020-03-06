import { Pagination } from "app/main/_models/pagination.model";
import { FilterComboMultiple, FilterComboMultipleGroup } from "app/main/_models/filters/mini-filter/combo-multiple.filters";
import { FilterDateRange } from "app/main/_models/filters/mini-filter/date-range.filter";
import { FilterNumberRange } from "app/main/_models/filters/mini-filter/number-range.filter";
import { EnumFilterType, EnumStyleType } from "./mat-table-filter.enum";
import { Observable } from "rxjs";
import { FilterSelection, FilterSelected } from "app/main/_models/generics/filter.info.model";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class MatTableFilter {
    columns: Column[];
    filterSelection$: Observable<FilterSelection<any>>;
    filterSelected$: Observable<FilterSelected<any>>;
    table$: Observable<Datas<any>>;
    toolbar?: Toolbar;
}

export class Column {
    // index: number;
    field: string;
    label: string;
    isSortable: boolean;
    width:ColumnWidth;
    pipe: boolean=false;
    filter: ColumnFilter= new ColumnFilter();
    style: ColumnStyle=new ColumnStyle();
}

export class ColumnFilter {
    type: EnumFilterType;
    datas: FilterComboMultiple | FilterComboMultipleGroup | FilterDateRange | FilterNumberRange;
    isEmpty: boolean = true;
}

export class ColumnStyle {
    type: EnumStyleType;
    datas: any; //TypeNumberUpDown | TypeButtonIcon;
}

export class TypeNumberUpDown {
    isoNumber: number;
}

export class TypeButtonIcon {
    icon: string;
    tooltip: string;
}

export class ColumnWidth {
    isFixed:boolean;
    value:number;
}

export class Row {
    [key: string]: any; // Cell<any>;
}

export class Toolbar {
    buttonAdd?: buttonOption;
    buttonDelete?: buttonOption;
    buttonFullscreen?: buttonOption;
}

export class buttonOption {
    enabled: boolean =false;
    tooltip?: string;
}

// export class buttonAdd extends buttonOption {
//     path?: string;
// }