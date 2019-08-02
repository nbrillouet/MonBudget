import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener, AfterViewInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { TableField, Row, EnumFilterType, MatTableFilter, Column, FilterTable, EnumStyleType } from '../model/mat-table-filter.model';
import { MatTableDataSource, MatTable, MatSort, MatPaginator } from '@angular/material';
import { FilterDateRange } from 'app/main/_models/filters/mini-filter/date-range.filter';
import { Pagination } from 'app/main/_models/pagination.model';
import { FilterAmount } from 'app/main/_models/filters/mini-filter/amount.filter';
import { FilterComboMultipleGroup, FilterComboMultiple } from 'app/main/_models/filters/mini-filter/combo-multiple.filters';
import { DateFormatPipe } from '../pipe/pipe-date';
import { MatTableFilterColResizeService } from '../service/mat-table-filter-col-resize.service';
import { FilterNumberRange } from 'app/main/_models/filters/mini-filter/number-range.filter';

@Component({
  selector: 'mat-table-filter',
  templateUrl: './mat-table-filter.component.html',
  styleUrls: ['./mat-table-filter.component.scss']
})
export class MatTableFilterComponent implements OnInit,AfterViewInit,OnChanges {
  @Input()  onloading:boolean;
  @Input()  columns: Column[];
  @Input()  rows: Row[]=[];
  @Input()  pagination: Pagination;
  
  @Output() changeFilter = new EventEmitter<FilterTable>();
  @Output() changePagination = new EventEmitter<Pagination>();
  @Output() clickButtonIcon = new EventEmitter<Row>();

  @ViewChild(MatTable, {read: ElementRef} ) private matTableRef: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  matTableFilter: MatTableFilter = new MatTableFilter();

  templateFor:string;

  enumFilterType= EnumFilterType;
  enumStyleType = EnumStyleType;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Row>();
  matTableWidth:number;

  isLoaded:boolean;
  rowsLoading:boolean=true;
  rowsLoaded: boolean=false;

  constructor(
    private renderer: Renderer2,
    private _dateFormatPipe: DateFormatPipe,
    private _matTableFilterColResizeService: MatTableFilterColResizeService
  ) {
    
   }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    if(this.matTableRef){
      this.matTableWidth = this.matTableRef.nativeElement.clientWidth;
    }
    
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isLoaded=false;
        
    if(changes.rows) {
      this.matTableFilter.rows=changes.rows.currentValue;
      this.dataSource.data = this.matTableFilter.rows;
    }

    if(changes.columns) {
      console.log('mat-table-filter-changes.columns-TRIG',changes.columns.currentValue);
      if(changes.columns.currentValue!=null) {
        this.matTableFilter.columns=changes.columns.currentValue;
        
        this.setDisplayedColumns();
        this.setTableResize();
      }
    }

    if(changes.pagination) {
      this.matTableFilter.pagination=changes.pagination.currentValue;
    }

    if(this.matTableFilter.columns!=null && this.matTableFilter.pagination!=null ) {
      this.isLoaded = true;

      // console.log('passed loaded');
    }

    if(changes.onloading) {
      console.log('mat-table-filter-changes.onloading-TRIG',changes);
      this.loading(changes.onloading.currentValue);
      //this.onLoading=changes.onloading.currentValue;
    }
    // console.log('this.matTableFilter',this.matTableFilter);
    

  }

  setDisplayedColumns() {
    this.matTableFilter.columns.forEach(( column, index) => {
      column.index = index;
      this.displayedColumns[index] = column.field;
    });
  }

  //========================================================================
  //===================  RESIZE COLUMN =====================================
  //========================================================================
  onResizeColumn(event: any, index: number) {
    this._matTableFilterColResizeService.onResizeColumn(event,index,this.renderer,this.matTableFilter,this.matTableRef);
  }

  setTableResize() {
    let maxWidth=this.matTableWidth;
    let percentCols = this.matTableFilter.columns.filter(x=>!x.width.isFixed).length;
    let sumWidthFixedCols = this.matTableFilter.columns.filter(x=>x.width.isFixed).map(x=>x.width.value).reduce((a, b) => a + b, 0);

    let leaveWidth=maxWidth-sumWidthFixedCols;
    let unitWidth=leaveWidth/percentCols;
    
    this.matTableFilter.columns.forEach(( column, index) => {
      column.width.value = column.width.isFixed ? column.width.value : unitWidth;
      this._matTableFilterColResizeService.setColumnWidth(column);
    });

  }

  onMatTableResize($event) {
    this.matTableWidth=$event.contentRect.width;
    this.setTableResize();
  }


  //========================================================================
  //=============================  SORTING =================================
  //========================================================================
  onSortChangeEvent(event): void {
    if(this.pagination) {
      this.loading(true);
      if(this.pagination.sortColumn!=this.sort.active || this.pagination.sortDirection!=this.sort.direction) {
        this.rowsLoading = true;
        this.rowsLoaded=false;
        this.rows=[];

        this.pagination.currentPage=0;
        this.pagination.sortColumn = this.sort.active;
        this.pagination.sortDirection = this.sort.direction;

        this.changePagination.emit(this.pagination);
      }
      
    }
  }


  //========================================================================
  //=============================  FILTERING ===============================
  //========================================================================
  hasFilterData(column:Column) {
    if(column.filter && column.filter.datas) {
      switch(column.filter.type) {
        case (this.enumFilterType.comboMultiple): {
          let datas = <FilterComboMultiple>column.filter.datas;
          return datas.combos.listSelected!=null && datas.combos.listSelected.length>0;
        }
        case (this.enumFilterType.comboMultipleGroup): {
          let datas = <FilterComboMultipleGroup>column.filter.datas;
          return datas.combos.listSelected!=null && datas.combos.listSelected.length>0;
        }
        case (this.enumFilterType.dateRange): {
          let datas = <FilterDateRange>column.filter.datas;
          return datas.dateMax!=null || datas.dateMin!=null;
        }
        case (this.enumFilterType.numberRange): {
          let datas = <FilterNumberRange>column.filter.datas;
          // console.log(datas)
          return datas.numberMax!=null || datas.numberMin!=null;
        }
        default: {
          return false;
        }
      }
    }

    return false;

  }

 
  applyFilter(columnName:string,$event) {
    this.loading(true);

    this.changeFilter.emit(<FilterTable> { columnName:columnName, value:$event });
  }

  //========================================================================
  //============================  PAGINATION ===============================
  //========================================================================
  onPageChangeEvent(event) {
    if(this.pagination) {
      this.loading(true);
      
      this.pagination.currentPage = this.paginator.pageIndex;
      this.pagination.nbItemsPerPage = this.paginator.pageSize;
      this.changePagination.emit(this.pagination);
    }
  }

  // length:number;  //totalItems
  // pageSize:number; //nbItemsPerPage
  // pageSizeOptions:number[]; //nbItem [15, 100, 200]

  onClickButtonIcon($event:Row) {
    // console.log('columnField',columnField);
    // console.log('$event',$event);
    this.clickButtonIcon.emit($event);

  }

  loading(onloading:boolean){
    console.log('onloading', onloading);
    this.onloading=onloading;

    if(onloading)
      this.dataSource.data=[];
  }
  
}
