import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  paintList:Int1[]=[];
  constructor(private service:Serv1Service) { }
  
  ngOnInit(): void {
   
    
  }

  getPaint():void{
    this.service.getPaint().subscribe(
      (paint)=>{
        this.paintList=paint;
        this.service.setList(paint);
      }
    )
  }

  addPaint(paint:Int1){
    this.service.postPaint(paint).subscribe(
      ()=>{
        this.getPaint();
      }
    )
  }

}
