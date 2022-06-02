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



  getRest():void{
    this.service.getRest().subscribe(
      (rest1)=>{
        this.paintList=rest1._embedded.paints;
      }
    )
  }
  


  ngOnInit(): void {
    this.getRest();
  }
  
  removeRest(paint:Int1){
    this.service.deleteRest(paint).subscribe(
      ()=>{
        this.getRest();
      }
    )
  }
  

}
