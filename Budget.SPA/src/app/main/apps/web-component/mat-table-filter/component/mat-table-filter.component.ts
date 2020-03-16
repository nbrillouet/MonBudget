import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Row, Column, MatTableFilter } from '../model/mat-table-filter.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { FilterDateRange } from 'app/main/_models/filters/mini-filter/date-range.filter';
import { FilterComboMultipleGroup, FilterComboMultiple } from 'app/main/_models/filters/mini-filter/combo-multiple.filters';
import { FilterNumberRange } from 'app/main/_models/filters/mini-filter/number-range.filter';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { EnumFilterType, EnumStyleType } from '../model/mat-table-filter.enum';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mat-table-filter',
  templateUrl: './mat-table-filter.component.html',
  styleUrls: ['./mat-table-filter.component.scss']
})
export class MatTableFilterComponent implements OnInit, OnDestroy {
  @Input() matTableFilter: MatTableFilter;

  @Output() changeFilterSelected = new EventEmitter<any>();
  @Output() changeFilterSelection = new EventEmitter<any>();
  @Output() clickButtonIcon = new EventEmitter<Row>();
  @Output() onRowClick = new EventEmitter<Row>();
  @Output() toolbarAddItemEvent = new EventEmitter<null>();
  @Output() toolbarDeleteItemsEvent = new EventEmitter<number[]>();

  @ViewChild(MatTable,{ read: ElementRef } ) private matTableRef: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  $filterSelection$ : Subscription;
  $filterSelected$: Subscription;
  $table$: Subscription;

  rows: Row[];
  filterSelected: any;
  filterSelection: any;
  templateFor:string;
  enumFilterType= EnumFilterType;
  enumStyleType = EnumStyleType;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Row>();
  idCurrentRow: number;
  onloading: boolean;
  columnToLoad: boolean;
  checkboxesDelete: number[]=[];

  constructor(
    private el: ElementRef,
    private _router: Router
  ) {
    
   }

   //detecter changement des rows pour appliquer resize
   onRowsChange($event) {
     if($event.id==this.idCurrentRow){
      this.setTableResize();
     }
   }

  ngOnInit() {
    this.matTableFilter.columns = JSON.parse(JSON.stringify(this.matTableFilter.columns));

    if(this.matTableFilter?.toolbar && this.matTableFilter.toolbar.buttonDelete.enabled)
      this.addCheckboxDeleteColumn();

    this.$table$ = this.matTableFilter.table$.subscribe(table=>{
        this.loading(true);
        if(table?.loader['datas']?.loaded) {
          this.rows = this.getMatTableFilterRows(table);
          
          this.idCurrentRow = this.rows.length>0 ? this.rows[0].id : null;
          this.dataSource.data = this.rows;
          this.loading(false);
        }
    });

    this.$filterSelection$ = this.matTableFilter.filterSelection$.subscribe(selection=>{
      if(selection?.loader['filter-selection']?.loaded) {
        this.filterSelection = selection.selection;
        if(!this.filterSelected) {
          this.columnToLoad=true;
        }
        else {
          this.matTableFilter.columns=this.getMatTableFilterColumns(selection.selection);
        }
      }
    });

    this.$filterSelected$ = this.matTableFilter.filterSelected$.subscribe(selected=>{
      if(selected?.loader['filter-selected']?.loaded) {
        this.filterSelected=selected.selected;

        if(this.columnToLoad) {
          this.getMatTableFilterColumns(this.filterSelection);
          this.columnToLoad = false;
        }
      }
    });
  }

  ngOnDestroy() {
    // this.$filterSelection$.unsubscribe();
    // this.$filterSelected$.unsubscribe();
    // this.$table$.unsubscribe();
  }

  getMatTableFilterRows(datas: Datas<any> ) {
    let tableRows: Row[] = [];
    
    for (let data of datas.datas) {
      let tableRow = new Row();
      for (let column of this.matTableFilter.columns) {
        let fields = column.field.split('-')
        let value= null;

        if(fields.length>1){

          value = data[fields[0]][fields[1]];
        }
        else
          value = data[fields[0]];

        tableRow[`${column.field}`] = value;           
      }

      tableRows.push(tableRow);
    }
    return tableRows;
  }

  getMatTableFilterColumns(filterDatas) {
    this.setDisplayedColumns();

    for (let column of this.matTableFilter.columns) {
      let fields = column.field.split('-');
      switch(column.filter.type) {
        case EnumFilterType.comboMultiple:
            column.filter.datas = <FilterComboMultiple> { placeholder:fields[0],combos:{list : filterDatas[`${fields[0]}`], listSelected: this.filterSelected[`${fields[0]}`] }}; //filterDatas.selected[`${fields[0]}`]} };
          break;
        case EnumFilterType.comboMultipleGroup:
          if(column.filter.datas) {
            let filterComboMultipleGroup  =  <FilterComboMultipleGroup>column.filter.datas;
            filterComboMultipleGroup.combos.list = filterDatas[`${fields[0]}`];
            column.filter.datas = filterComboMultipleGroup;
          }
          else {
            column.filter.datas =<FilterComboMultipleGroup> { placeholder:fields[0],combos:{list : filterDatas[`${fields[0]}`], listSelected:this.filterSelected[`${fields[0]}`] }}; // filterDatas.selected[`${fields[0]}`]} };
          }
          break;
        case EnumFilterType.dateRange:
            column.filter.datas = <FilterDateRange> { placeholder:fields[0],dateMin:null,dateMax:null }; 
          break;
        case EnumFilterType.numberRange:
            column.filter.datas = <FilterNumberRange> { placeholder:fields[0],suffixIcon:'euro_symbol',numberMin:null,numberMax:null };
          break;
      }
    }
    return this.matTableFilter.columns;
  }

  setDisplayedColumns() {
    this.matTableFilter.columns.forEach((column, index) => {
      // column.index = index;
      this.displayedColumns[index] = column.field;
    });
  }

  //========================================================================
  //===================  RESIZE COLUMN =====================================
  //========================================================================

  setTableResize() {
    let maxWidth= this.matTableRef.nativeElement.clientWidth; //this.matTableWidth;
    let percentCols = this.matTableFilter.columns.filter(x=>!x.width.isFixed).length;
    let sumWidthFixedCols = this.matTableFilter.columns.filter(x=>x.width.isFixed).map(x=>x.width.value).reduce((a, b) => a + b, 0);

    let leaveWidth=maxWidth-sumWidthFixedCols;
    let unitWidth=leaveWidth/percentCols;

    this.matTableFilter.columns.forEach(( column, index) => {
      column.width.value = column.width.isFixed ? column.width.value : unitWidth;

        let elements = this.el.nativeElement.getElementsByClassName(`mat-column-${column.field}`); //querySelectorAll('.option_input');

        if(elements.length>0) {
          for(let i=0; i<elements.length;i++) {
            elements[i].style.width = column.width.value + 'px';

          }
        }
    });

  }

  onResize($event) {
    
    // this.matTableWidth=$event.contentRect.width;
    this.setTableResize();
  }


  //========================================================================
  //=============================  SORTING =================================
  //========================================================================
  onSortChangeEvent(event): void {
    this.loading(true);

    this.filterSelected[`pagination`].currentPage=0;
    this.filterSelected[`pagination`].sortColumn = this.sort.active;
    this.filterSelected[`pagination`].sortDirection = this.sort.direction;

    this.changeFilterSelected.emit(this.filterSelected);
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

    let fields=column.field.split('-');

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
        break;
      case EnumFilterType.numberRange:
        let filterNumber = <FilterNumberRange>$event;
        $event = (filterNumber.numberMax==null && filterNumber.numberMin==null) ? null : $event;
        this.filterSelected[`${fields[0]}`]=$event;
        break;
      case EnumFilterType.label:
          this.filterSelected[`${fields[0]}`]=$event;
          break;
    }
 
    column.filter.isEmpty = $event==null || $event.length==0;

    this.changeFilterSelected.emit(this.filterSelected);
    this.changeFilterSelection.emit(this.filterSelected);
  }

  //========================================================================
  //============================  PAGINATION ===============================
  //========================================================================
  onPageChangeEvent(event) {
      this.loading(true);

      this.filterSelected[`pagination`].currentPage = this.paginator.pageIndex;
      this.filterSelected[`pagination`].nbItemsPerPage = this.paginator.pageSize;
      this.changeFilterSelected.emit(this.filterSelected);

  }

  onClickButtonIcon($event:Row) {

    this.clickButtonIcon.emit($event);
  }

  loading(onloading:boolean){

    this.onloading=onloading;

    if(onloading) {

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

  //========================================================================
  //============================  TOOLBAR    ===============================
  //========================================================================
  addCheckboxDeleteColumn() {
    let checkboxDelete: Column = {field: 'checkboxDelete',label:'',isSortable:false,width:{isFixed:true,value:60},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.checkboxDelete,datas:null } }
    this.matTableFilter.columns.unshift(checkboxDelete);
  }

  onCheckboxDeleteChange($event, id:number) {
    if($event.checked) {
      this.checkboxesDelete.push(id);
    }
    else
    {
      let index = this.checkboxesDelete.indexOf(id);
      if (index > -1) {
        this.checkboxesDelete.splice(index, 1);
      }
    }
  }

  addItem() {
    this.toolbarAddItemEvent.emit();
  }
  
  deleteItems(idList:number[]) {
    this.toolbarDeleteItemsEvent.emit(idList);
    this.checkboxesDelete=[];
  }
}
