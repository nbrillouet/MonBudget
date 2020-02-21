import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spinner-four-cube',
  templateUrl: './four-cube.component.html',
  styleUrls: ['./four-cube.component.scss']
})
export class FourCubeComponent implements OnInit {
@Input() size: number;

  constructor() { }

  ngOnInit() {

  }

}
