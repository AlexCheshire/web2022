import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.scss']
})
export class RmComponent implements OnInit {


  

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
  
  removePaint(paint:Int1){
    this.service.deletePaint(paint).subscribe(
      ()=>{
        this.getPaint();
      }
    )
  }
  

}
