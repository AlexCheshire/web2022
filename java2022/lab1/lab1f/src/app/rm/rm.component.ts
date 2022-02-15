import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.scss']
})
export class RmComponent implements OnInit {


  
  @Input() paint?:Int1
  @Output() updated:EventEmitter<null> = new EventEmitter();
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
  
  removePaint(){
    if(this.paint){
      this.service.deletePaint(this.paint).subscribe(
        ()=>{
          this.updated.emit();
        }
      )
    }
  }
  

}
