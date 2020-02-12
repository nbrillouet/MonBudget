import { Injectable, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { MatTable } from "@angular/material";
import { MatTableFilter } from "../model/mat-table-filter.model";

@Injectable()
export class MatTableFilterColResizeService {
pressed = false;
currentResizeIndex: number;
startX: number;
startWidth: number;
isResizingRight: boolean;
resizableMousemove: () => void;
resizableMouseup: () => void;
// @ViewChild(MatTable, {read: ElementRef} ) private matTableRef: ElementRef;

    constructor(
        
    ) { }
    
    onResizeColumn(event: any, index: number,renderer:Renderer2, matTableFilter:MatTableFilter, matTableRef:ElementRef) {
        this.checkResizing(event, index, matTableFilter,matTableRef);
        this.currentResizeIndex = index;
        this.pressed = true;
        this.startX = event.pageX;
        this.startWidth = event.target.clientWidth;
        event.preventDefault();
        this.mouseMove(index,renderer,matTableFilter);
    }

    private checkResizing(event, index, matTableFilter:MatTableFilter,matTableRef:ElementRef) {
        const cellData = this.getCellData(index,matTableRef);
        if ( ( index === 0 ) || ( Math.abs(event.pageX - cellData.right) < cellData.width / 2 &&  index !== matTableFilter.columns.length - 1 ) ) {
          this.isResizingRight = true;
        } else {
          this.isResizingRight = false;
        }
    }

    private getCellData(index: number,matTableRef:ElementRef) {
        const headerRow = matTableRef.nativeElement.children[0];
        const cell = headerRow.children[index];
        return cell.getBoundingClientRect();
    }

    mouseMove(index: number,renderer: Renderer2,matTableFilter:MatTableFilter) {
    
        this.resizableMousemove = renderer.listen('document', 'mousemove', (event) => {
          if (this.pressed && event.buttons ) {
            const dx = (this.isResizingRight) ? (event.pageX - this.startX) : (-event.pageX + this.startX);
            const width = this.startWidth + dx;
            if ( this.currentResizeIndex === index && width > 50 ) {
              this.setColumnWidthChanges(index, width,matTableFilter);
            }
          }
        });
        this.resizableMouseup = renderer.listen('document', 'mouseup', (event) => {
          if (this.pressed) {
            this.pressed = false;
            this.currentResizeIndex = -1;
            this.resizableMousemove();
            this.resizableMouseup();
          }
        });
    }

    setColumnWidthChanges(index: number, width: number, matTableFilter:MatTableFilter) {
        const orgWidth = matTableFilter.columns[index].width.value;
        const dx = width - orgWidth;
        if ( dx !== 0 ) {
          const j = ( this.isResizingRight ) ? index + 1 : index - 1;
          const newWidth = matTableFilter.columns[j].width.value - dx;
          if ( newWidth > 50 ) {
            matTableFilter.columns[index].width.value = width;
            this.setColumnWidth(matTableFilter.columns[index]);
            matTableFilter.columns[j].width.value = newWidth;
            this.setColumnWidth(matTableFilter.columns[j]);
            }
        }
    }

    setColumnWidth(column: any) {

    const columnEls = Array.from( document.getElementsByClassName('mat-column-' + column.field) );

    columnEls.forEach(( el: HTMLDivElement ) => {
        el.style.width = column.width.value + 'px';

    });
    }
}