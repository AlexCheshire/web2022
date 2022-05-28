import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.scss']
})
export class UpdComponent implements OnInit {

  
  paintList:Int1[]=[];
  constructor(private service:Serv1Service) { }



  getPaint():void{
    this.service.getPaint().subscribe(
      (paint)=>{
        this.paintList=paint;
        this.service.setList(paint);
      }
    )
  }
  


  ngOnInit(): void {
    this.getPaint();
  }
  
  updatePaint(paint:Int1){
    this.service.putPaint(paint).subscribe(
      ()=>{
        this.getPaint();
      }
    )
  }
  

}
