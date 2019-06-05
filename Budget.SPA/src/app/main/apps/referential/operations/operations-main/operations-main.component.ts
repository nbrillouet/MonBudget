import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'operations-main',
  templateUrl: './operations-main.component.html',
  styleUrls: ['./operations-main.component.scss'],
  animations : fuseAnimations
})
export class OperationsMainComponent implements OnInit {
subject: string = 'operation-type-families';
subjectTitle: string = 'Catégorie d\'opérations';

headerPanelIcon: string;
headerPanelIsVisible: boolean = false;
fullscreen: boolean;

constructor(
  private _activatedRoute: ActivatedRoute,
  private _router: Router,
  private _fuseConfigService: FuseConfigService
  ) {

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

  // Subscribe to the config changes
  this._fuseConfigService.config
  // .pipe(takeUntil(this._unsubscribeAll))
  .subscribe((settings) => {
      this.fullscreen = settings.layout.toolbar.fullScreen;
  });

  // //prendre en compte le fuseConfig
  // this._fuseConfigService.config
  // .subscribe((config) => {
  //     // Update the stored config
  //     this.fuseConfig = config;
  // });
}

  ngOnInit() {
    // this.onHeaderPanelClick();
  }

  Add() {
      this._router.navigate(
        [`apps/referential/operations/${this.subject}/new`]);
  }

  // onHeaderPanelClick() {
  //   this.headerPanelIsVisible = this.headerPanelIsVisible ? false : true;
  //   this.headerPanelIcon = this.headerPanelIsVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  //   this.fuseConfig.layout.toolbar.hidden=!this.headerPanelIsVisible;
  //   this._fuseConfigService.setConfig(this.fuseConfig);

  // }

  }
  


