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
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';

// export class B<T> {
//   Prop: T;
//   constructor(TCreator: new() => T) {
//       this.Prop = new TCreator();
//   }
// }




@Component({
  selector: 'mat-table-filter',
  templateUrl: './mat-table-filter.component.html',
  styleUrls: ['./mat-table-filter.component.scss']
})
export class MatTableFilterComponent implements OnInit {
  @Input()  onloading: boolean;
  @Input()  columns: Column[];
  @Input()  pagination: Pagination;
  @Input()  observableFilter: Observable<FilterInfo<any>>;
  @Input()  observableTable: Observable<Datas<any>>;
  // @Input()  filter: any; // B<any>;
  // @Input()  filterSelected: any;
  @Output() changeFilter = new EventEmitter<any>();
  @Output() changePagination = new EventEmitter<Pagination>();
  @Output() clickButtonIcon = new EventEmitter<Row>();
  @Output() onRowClick = new EventEmitter<Row>()

  // @ViewChild(MatTable, { static: false }) matTableRef: MatTable<any>;
  @ViewChild(MatTable,{read: ElementRef, static: false} ) private matTableRef: ElementRef;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  

  rows: Row[];
  // columns: Column[];
  filterSelected: any;
  // matTableFilter: MatTableFilter = new MatTableFilter();

  templateFor:string;

  enumFilterType= EnumFilterType;
  enumStyleType = EnumStyleType;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Row>();
  // matTableWidth:number;

  // isLoaded:boolean;
  // rowsLoading:boolean=true;
  // rowsLoaded: boolean=false;
  idCurrentRow: number;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private _dateFormatPipe: DateFormatPipe,
    private _matTableFilterColResizeService: MatTableFilterColResizeService
  ) {
    
   }

   //detecter changement des rows pour appliquer resize
   onRowsChange($event) {
     if($event.id==this.idCurrentRow){
      this.setTableResize();
      console.log($event)
     }
   }
   
  // identity<T>(arg: T): T {
  //   return arg;
  // }

  ngOnInit() {
    this.observableTable.subscribe(table=>{
      if(table.loader['datas'] && table.loader['datas'].loaded){
        

        this.rows = this.getMatTableFilterRows(table);
        console.log('datas.datas',table);
        this.idCurrentRow = this.rows.length>0 ? this.rows[0].id : null;
        // this.matTableFilter.rows=this.rows;
        this.dataSource.data = this.rows; // this.matTableFilter.rows;
        
        console.log('filter',this.filterSelected);
        this.loading(false);
        // console.log('this.rows', this.rows);
      }
      // console.log('--->table in mat-table', table);
     });

    this.observableFilter.subscribe(filter=>{
      // console.log('--->filter in mat-table', filter);
      if(filter.loader['filters'] && filter.loader['filters'].loaded) {
        // this.matTableWidth = this.matTableRef.nativeElement.clientWidth;

        this.columns=this.getMatTableFilterColumns(filter.filters);
        // this.matTableFilter.columns=this.columns;
        
        this.filterSelected=filter.filters.selected;

        this.loading(false);
        // console.log('this.filterSelected',this.filterSelected);
      }
     });
  }

  getMatTableFilterRows(datas: Datas<any> ) {
    let tableRows: Row[] = [];
      for (let data of datas.datas) {
        let tableRow = new Row();
        for (let column of this.columns) {
          // console.log('column.field',column.field);
          // console.log('column.field',column.field);
          // console.log('tableRow[column.field]',tableRow[`${column.field}`]);
          // console.log('data[column.field]',data[column.field]);
          let fields = column.field.split('-')
          let value= null;
          // for(let field of fields) {
            if(fields.length>1){
              // console.log('fields',fields);
              value = data[fields[0]][fields[1]];
              // console.log('value',value);
            }
             
              else
              value = data[fields[0]]
          // }
          
          tableRow[`${column.field}`] = value; //data[column.field];
          // console.log('tableRow[column.field]',tableRow[`${column.field}`]);
          
        }
        //creation de la ligne
        
        // tableRow['id']= data.id;
        // tableRow['plan']= data.plans;
        // tableRow['operationMethod']=data.operationMethod.label;
        // tableRow['operationTypeFamily']=data.operationTypeFamily.label;
        // tableRow['operationType']=data.operationType.label;
        // tableRow['operation']=data.operation.label;
        // tableRow['dateIntegration']=data.dateIntegration;
        // tableRow['amountOperation']=data.amountOperation;
        // tableRow['button']=null;

        tableRows.push(tableRow);
      }

     console.log('tableRows',tableRows);

      return tableRows;
  }

  getMatTableFilterColumns(filterDatas) {
    // let operationComboMultiple: FilterComboMultiple = null;
    // let operationMethodComboMultiple: FilterComboMultiple = null;
    // let operationTypeFamilyComboMultipleGroup: FilterComboMultipleGroup = null;
    // let operationTypeComboMultipleGroup: FilterComboMultipleGroup = null;
    // let filterDateIntegration: FilterDateRange = { placeholder:'Intégration',dateMin:null,dateMax:null }; 
    // let filterNumberRange: FilterNumberRange ={ placeholder:'Montant',suffixIcon:'euro_symbol',numberMin:null,numberMax:null };

    // if(filterDatas!=null) {

    //   operationComboMultiple = <FilterComboMultiple> { placeholder:'opération',combos:{list : filterDatas.operations, listSelected: filterDatas.selected.operations} };
    //   operationMethodComboMultiple= <FilterComboMultiple> { placeholder:'Méthode d opération',combos:{list : filterDatas.operationMethods, listSelected: filterDatas.selected.operationMethods} };
    //   operationTypeFamilyComboMultipleGroup = <FilterComboMultipleGroup> { placeholder:'Catégorie opération',combos:{list : filterDatas.operationTypeFamilies, listSelected: filterDatas.selected.operationTypeFamilies} };
    //   operationTypeComboMultipleGroup = <FilterComboMultipleGroup> { placeholder:'Type opération',combos:{list : filterDatas.operationTypes, listSelected: filterDatas.selected.operationTypes} };
    //   // filterDateIntegration = <FilterDateRange> { placeholder:'Intégration',dateMin:null,dateMax:null };
    
    // }
    
    // let columns : Column[]= [];
    // columns = [ 
    //     {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
    //     {index:1, field: 'plans',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
    //     {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationMethodComboMultiple}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeFamilyComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationComboMultiple},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:6, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: filterDateIntegration},pipe:true,style:{type:EnumStyleType.label,datas:null} },
    //     {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: filterNumberRange},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} },
    //     {index:8, field: 'button',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null},pipe:false,style: {type:EnumStyleType.buttonIcon,datas:{icon:'more_horiz',tooltip:'détail'}} }
    //     ];
    this.setDisplayedColumns();
    for (let column of this.columns) {
      let fields = column.field.split('-');
      switch(column.filter.type) {
        case EnumFilterType.comboMultiple:
          column.filter.datas = <FilterComboMultiple> { placeholder:fields[0],combos:{list : filterDatas[`${fields[0]}`], listSelected: filterDatas.selected[`${fields[0]}`]} };
          break;
        case EnumFilterType.comboMultipleGroup:
            column.filter.datas = <FilterComboMultipleGroup> { placeholder:fields[0],combos:{list : filterDatas[`${fields[0]}`], listSelected: filterDatas.selected[`${fields[0]}`]} };
          break;
        case EnumFilterType.dateRange:
            column.filter.datas = <FilterDateRange> { placeholder:fields[0],dateMin:null,dateMax:null }; 
          break;
        case EnumFilterType.numberRange:
            column.filter.datas = <FilterNumberRange> { placeholder:fields[0],suffixIcon:'euro_symbol',numberMin:null,numberMax:null };
          break;
      }
    }
    console.log('this.columns',this.columns);
    return this.columns;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.isLoaded=false;
        
  //   if(changes.rows) {
  //     // this.matTableFilter.rows=changes.rows.currentValue;
  //     // this.dataSource.data = this.matTableFilter.rows;
      
  //     // this.setTableResize();
  //   }

  //   if(changes.columns) {
  //     // console.log('mat-table-filter-changes.columns-TRIG',changes.columns.currentValue);
  //     if(changes.columns.currentValue!=null) {

  //       // this.matTableFilter.columns=changes.columns.currentValue;
  //       // setTimeout(x=>{
  //       //   let elements = this.el.nativeElement.getElementsByClassName('mat-column-id'); //querySelectorAll('.option_input');
  //       //   // console.log('elements',elements[0]);
  //       //   elements[0].style.width = '200px';
  //       // },1000);

  //     }

  //     // console.log('VI',changes);
  //   }

  //   if(changes.pagination) {
  //     // this.matTableFilter.pagination=changes.pagination.currentValue;
  //     // console.log('III',changes);
  //   }

  //   // if(this.matTableFilter.columns!=null && this.matTableFilter.pagination!=null ) {
  //   //   this.isLoaded = true;
  //   //   // console.log('IV',changes);
  //   //   // console.log('passed loaded');
  //   // }

  //   if(changes.onloading) {
  //     // console.log('mat-table-filter-changes.onloading-TRIG',changes);
  //     // this.loading(changes.onloading.currentValue);
  //     // if(!this.onloading){
  //     //   // this.matTableWidth = this.matTableRef.nativeElement.clientWidth;
  //     //   // console.log('--->this.matTableRef', this.matTableRef);
  //     // }
  //     // console.log('VII',changes);
  //     //this.onLoading=changes.onloading.currentValue;
  //   }
  //   // console.log('this.matTableFilter',this.matTableFilter);
    

  // }

  setDisplayedColumns() {
    this.columns.forEach(( column, index) => {
      column.index = index;
      this.displayedColumns[index] = column.field;
    });
    // this.matTableFilter.columns.forEach(( column, index) => {
    //   column.index = index;
    //   this.displayedColumns[index] = column.field;
    // });

  }

  //========================================================================
  //===================  RESIZE COLUMN =====================================
  //========================================================================
  // onResizeColumn(event: any, index: number) {
  //   this._matTableFilterColResizeService.onResizeColumn(event,index,this.renderer,this.matTableFilter,this.matTableRef);
  // }

  setTableResize() {
    let maxWidth= this.matTableRef.nativeElement.clientWidth; //this.matTableWidth;
    let percentCols = this.columns.filter(x=>!x.width.isFixed).length;
    let sumWidthFixedCols = this.columns.filter(x=>x.width.isFixed).map(x=>x.width.value).reduce((a, b) => a + b, 0);

    let leaveWidth=maxWidth-sumWidthFixedCols;
    let unitWidth=leaveWidth/percentCols;
    // console.group('resize');
    // console.log('maxWidth',maxWidth);
    // console.log('percentCols',percentCols);
    // console.log('sumWidthFixedCols',sumWidthFixedCols);
    // console.log('leaveWidth',leaveWidth);
    // console.log('unitWidth',unitWidth);
    // console.groupEnd;

    this.columns.forEach(( column, index) => {
      column.width.value = column.width.isFixed ? column.width.value : unitWidth;
      // console.log('column.width.value',column.width.value);

      // setTimeout(x=>{
        let elements = this.el.nativeElement.getElementsByClassName(`mat-column-${column.field}`); //querySelectorAll('.option_input');
        // console.log('elements',elements);
        if(elements.length>0) {
          for(let i=0; i<elements.length;i++) {
            elements[i].style.width = column.width.value + 'px';
            // console.log('el.style.width',elements[i].style.width);
          }
        }
      // },0);

      // this._matTableFilterColResizeService.setColumnWidth(column);
    });

  }

  onResize($event) {
    console.log('$event.contentRect.width',$event.contentRect.width);
    // this.matTableWidth=$event.contentRect.width;
    this.setTableResize();
  }


  //========================================================================
  //=============================  SORTING =================================
  //========================================================================
  onSortChangeEvent(event): void {
    // if(this.pagination) {
    this.loading(true);
    //   if(this.pagination.sortColumn!=this.sort.active || this.pagination.sortDirection!=this.sort.direction) {
    //     this.rowsLoading = true;
    //     this.rowsLoaded=false;
    //     this.rows=[];
    this.filterSelected[`pagination`].currentPage=0;
    this.filterSelected[`pagination`].sortColumn = this.sort.active;
    this.filterSelected[`pagination`].sortDirection = this.sort.direction;

    this.changeFilter.emit(this.filterSelected);
    // this.pagination.currentPage=0;
    //     this.pagination.sortColumn = this.sort.active;
    //     this.pagination.sortDirection = this.sort.direction;

    //     this.changePagination.emit(this.pagination);
    //   }
      
    // }
  }


  //========================================================================
  //=============================  FILTERING ===============================
  //========================================================================
  // hasFilterData(column:Column) {
  //   if(column.filter && column.filter.datas) {
  //     switch(column.filter.type) {
  //       case (this.enumFilterType.comboMultiple): {
  //         let datas = <FilterComboMultiple>column.filter.datas;
  //         return datas.combos.listSelected!=null && datas.combos.listSelected.length>0;
  //       }
  //       case (this.enumFilterType.comboMultipleGroup): {
  //         let datas = <FilterComboMultipleGroup>column.filter.datas;
  //         return datas.combos.listSelected!=null && datas.combos.listSelected.length>0;
  //       }
  //       case (this.enumFilterType.dateRange): {
  //         let datas = <FilterDateRange>column.filter.datas;
  //         return datas.dateMax!=null || datas.dateMin!=null;
  //       }
  //       case (this.enumFilterType.numberRange): {
  //         let datas = <FilterNumberRange>column.filter.datas;
  //         // console.log(datas)
  //         return datas.numberMax!=null || datas.numberMin!=null;
  //       }
  //       default: {
  //         return false;
  //       }
  //     }
  //   }

  //   return false;

  // }

 
  applyFilter(column:Column, $event) {
    // console.log('-------->column',column);
    // console.log('$event',$event);
    let fields=column.field.split('-');
    // let filter = this.filterSelected[`${fields[0]}`];
    // console.log('filter-selected',this.filterSelected);
    // console.log('fields[0]',fields[0]);

    switch(column.filter.type) {
      case EnumFilterType.comboMultiple:
        this.filterSelected[`${fields[0]}`] = $event;
        break;
      case EnumFilterType.comboMultipleGroup:
        this.filterSelected[`${fields[0]}`] = $event;
        break;
      case EnumFilterType.dateRange:
        let filter = <FilterDateRange>$event;
        $event = (filter.dateMax==null && filter.dateMin==null) ? null : $event;
        this.filterSelected[`${fields[0]}`]=$event;
        console.log('-->filter date',$event);
        break;
      case EnumFilterType.dateRange:
        let filterNumber = <FilterNumberRange>$event;
        $event = (filterNumber.numberMax==null && filterNumber.numberMin==null) ? null : $event;
        this.filterSelected[`${fields[0]}`]=$event;
        console.log('-->filter date',$event);
        break;

    }
    console.log('$event',$event);
    column.filter.isEmpty = $event==null || $event.length==0;

    // console.log('-------->emit ',this.filterSelected);
    this.changeFilter.emit(this.filterSelected);
    // this.filterAs.selected.pagination.currentPage=0;
    // this._store.dispatch(new LoadAsTableFilter(this.filterAs.selected));

    // this.filterAs.selected.operationMethods = data;

    // // this.loading(true);
    // this.changeFilter.emit(<FilterTable> { columnName:columnName, value:$event });
  }

  //========================================================================
  //============================  PAGINATION ===============================
  //========================================================================
  onPageChangeEvent(event) {
    // if(this.pagination) {
      this.loading(true);
      
      // this.pagination.currentPage = this.paginator.pageIndex;
      // this.pagination.nbItemsPerPage = this.paginator.pageSize;

      this.filterSelected[`pagination`].currentPage = this.paginator.pageIndex;
      this.filterSelected[`pagination`].nbItemsPerPage = this.paginator.pageSize;
      this.changeFilter.emit(this.filterSelected);
      // this.changePagination.emit(this.pagination);
    // }
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
    // console.log('onloading', onloading);
    this.onloading=onloading;

    if(onloading) {
      console.log('ON LOADING');
      this.dataSource.data=[];
    }
      

    if(!onloading) {
      if(this.matTableRef && this.matTableRef.nativeElement) {


        // this.matTableWidth = this.matTableRef.nativeElement.clientWidth;
        // this.setDisplayedColumns();

      }

    }
  }


  // pour la sélection d'un texte dans le tableau
  public mouseEvent: MouseEvent
  public txtmouseEvent: boolean = false
  public activeClick: number = -1

  public onClickLigne(event: MouseEvent, index: number, row: any) {

      if (this.txtmouseEvent == false) {
          if (Math.abs(this.mouseEvent.clientX - event.clientX) < 10 && Math.abs(this.mouseEvent.clientY - event.clientY) < 10) {
              this.activeClick = index;
              console.log('this.activeClick',this.activeClick);
              this.onRowClick.emit(row);
          }
          else {
              this.txtmouseEvent = true
          }
      }
      else {
          this.txtmouseEvent = false
      }
  }
  onMouseDown(event: MouseEvent) {
    this.mouseEvent = event
  }
  
}
