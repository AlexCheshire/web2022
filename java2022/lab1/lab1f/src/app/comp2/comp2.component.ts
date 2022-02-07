import { Component, OnInit } from '@angular/core';
import { Int1 } from '../interfaces/int1';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  paintList:Int1[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
