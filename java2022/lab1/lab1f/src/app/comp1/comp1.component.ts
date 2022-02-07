import { Component, OnInit } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  paintList:Int1[]=[];
  constructor(private service:Serv1Service) { }

  getPaint():void{
    this.service.getPaint().subscribe(
      (paint)=>{
        this.paintList=paint;
      }
    )
  }

  ngOnInit(): void {
  }

}
