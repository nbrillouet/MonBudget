import { NgModule } from '@angular/core'
import { CommonModule } from "@angular/common"
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import * as material from '@angular/material'
import { CdkTableModule } from '@angular/cdk/table';
//import { FlexLayoutModule } from "@angular/flex-layout"
//import { CovalentHighlightModule } from '@covalent/highlight'
//import { CovalentMarkdownModule } from '@covalent/markdown'



const MATERIAL = [
    material.MatBadgeModule,
    material.MatBottomSheetModule,
    material.MatButtonModule,
    material.MatButtonToggleModule,
    material.MatCardModule,
    material.MatCheckboxModule,
    material.MatChipsModule,
    material.MatDialogModule,
    material.MatExpansionModule,
    material.MatGridListModule,
    material.MatIconModule,
    material.MatInputModule,
    material.MatListModule,
    material.MatMenuModule,
    material.MatPaginatorModule,
    material.MatProgressBarModule,
    material.MatRadioModule,
    material.MatSelectModule,
    material.MatSidenavModule,
    material.MatSlideToggleModule,
    material.MatSnackBarModule,
    material.MatSortModule,
    material.MatTabsModule,
    material.MatTableModule,
    material.MatToolbarModule,
    material.MatTooltipModule,
    material.MatSliderModule,
    material.MatFormFieldModule,
    material.MatDatepickerModule,
    material.MatNativeDateModule,
    material.MatStepperModule,
    material.MatProgressSpinnerModule,
    material.MatAutocompleteModule,
    CdkTableModule
    //FlexLayoutModule, CovalentHighlightModule, CovalentMarkdownModule
]


// const ANGULAR = [
//     BrowserModule,
//     BrowserAnimationsModule,
//     CommonModule,
//     RouterModule,
//     FormsModule, ReactiveFormsModule,
//     HttpClientModule
// ]

@NgModule({
    imports: [ ...MATERIAL],
    exports: [ ...MATERIAL]
   
})
export class AngularMaterialModule { }