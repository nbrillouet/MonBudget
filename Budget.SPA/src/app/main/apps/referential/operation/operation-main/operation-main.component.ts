import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'operation-main',
  templateUrl: './operation-main.component.html',
  styleUrls: ['./operation-main.component.scss'],
  animations : fuseAnimations
})
export class OperationMainComponent implements OnInit {
subject: string = 'operation-type-families'
subjectTitle: string = 'Catégorie d\'opérations'

constructor(
  private _activatedRoute: ActivatedRoute,
  private _router: Router
  ) {
  // this._activatedRoute.params.subscribe(routeParams => {
  //   this.subject = routeParams['subject']==null ? 'operation-type-families' : routeParams['subject'];
    
  // });

  this._activatedRoute.url.subscribe(url=> {
    this.subject = url[0].path;
    switch(this.subject) {
      case 'operation-type-families':
        this.subjectTitle = 'Catégorie d\'opérations';
        break;
      case 'operation-types':
        this.subjectTitle = 'Type d\'opérations';
        break;
      case 'operations':
        this.subjectTitle = 'Opérations';
        break;
    }
  });
}

  ngOnInit() {

  }

  Add() {

    // switch(this.subject) {
    //   case 'operation-type-families':
      this._router.navigate(
        [`apps/referential/operations/${this.subject}/new`]);
      //   break;
      // case 'operation-types':
      //   this.selectedIndex = 1;
      //   break;
      // case 'operations':
      //   this.selectedIndex = 2;
      //   break;
    }

  }
  


