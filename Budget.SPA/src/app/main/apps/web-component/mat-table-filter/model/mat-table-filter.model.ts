import { ChangePlanAmountTableFilter } from "app/main/_ngxs/plan/plan-amount-list/plan-amount-list.action";
import { Pagination } from "app/main/_models/pagination.model";
import { FilterComboMultiple, FilterComboMultipleGroup } from "app/main/_models/filters/mini-filter/combo-multiple.filters";
import { FilterDateRange } from "app/main/_models/filters/mini-filter/date-range.filter";
import { AsChartEvolutionCustomOtfFilter } from "app/main/_models/account-statement/as-chart/as-chart-evolution.model";
import { FilterNumberRange } from "app/main/_models/filters/mini-filter/number-range.filter";

export class TableField<T> {
    // name:string;
    value:T;

    // private _typeof:string;
    // get typeof():string {
 
    //     this._typeof = typeof(this.value);
    //     return this._typeof;
    // }
}

export enum EnumFilterType {
    none=-1,
    numberRange=0,
    comboMultiple=1,
    comboMultipleGroup=2,
    dateRange=3,
    label=4
}

export enum EnumStyleType {
    label=-1,
    dotDatas=0,
    numberUpDown=1,
    buttonIcon=2,
    image
}

export class MatTableFilter {
    columns: Column[];
    rows: Row[];
    pagination: Pagination;
}

export class Column {
    index: number;
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

export class Cell<T> {
    // field:string;
    value:T;

    // private _typeof:string;
    // get typeof():string {

    //     this._typeof = typeof(this.value);
    //     return this._typeof;
    // }
}

export class FilterTable {
    columnName: string;
    value: any;
}