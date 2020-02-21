import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { fuseAnimations } from '@fuse/animations';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { Select, Store } from '@ngxs/store';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { Column, EnumFilterType, EnumStyleType } from '../../web-component/mat-table-filter/model/mat-table-filter.model';
import { AsiTableFilterSelectionState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selection/asi-table-filter-selection.state';
import { AsiTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selected/asi-table-filter-selected.state';
import { FilterAsiTableSelection, FilterAsiTableSelected } from 'app/main/_models/filters/account-statement-import.filter';
import { AsiTableState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table.state';
import { LoadAsiTable } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table.action';

@Component({
  selector: 'asi-list',
  templateUrl: './asi-list.component.html',
  styleUrls: ['./asi-list.component.scss'],
  animations : fuseAnimations
})

export class AsiListComponent {
  @Select(AsiTableFilterSelectionState.get) asiTableFilterSelection$: Observable<FilterSelection<FilterAsiTableSelection>>;
  @Select(AsiTableFilterSelectedState.get) asiTableFilterSelected$: Observable<FilterSelected<FilterAsiTableSelected>>;
  @Select(AsiTableState.get) asiTable$: Observable<Datas<AsiTable[]>>;

  columns : Column[]=
    [ 
      {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
      {index:1, field: 'fileImport',label:'nom fichier',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.label,datas:null}},
      // {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
      // {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      // {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      // {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:2, field: 'dateImport',label:'Date import',isSortable:true,width:{isFixed:true,value:100}, filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} }
      // {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
    ];

  constructor(
    private _router: Router,
    private _store: Store,
    private _activatedRoute: ActivatedRoute,
    ) {
      
      // this.asiTableFilterSelected$.subscribe(filterAsi=>{
      //   if(filterAsi?.loader['filter-selected']?.loaded) {
      //     this.filterAsi = filterAsi.filters;
      //   }
      // });

  }

  onRowClick($event) {
    this._router.navigate([`${$event.id}/account-statement-import-files`], {relativeTo: this._activatedRoute});
  }

  applyFilterSelected(selected: FilterAsiTableSelected) {
    this._store.dispatch(new LoadAsiTable(selected));
  }

  applyFilterSelection(selected: FilterAsiTableSelected) {

  }



}

