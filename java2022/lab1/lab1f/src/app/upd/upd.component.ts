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
  selectedItem?:Int1;
  constructor(private service:Serv1Service) { }



  getRest():void{
    this.service.getRest().subscribe(
      (rest1)=>{
        this.paintList=rest1._embedded.paints;
      }
    )
  }
  
  onSelect(paint:Int1){
    this.selectedItem=paint;
  }


  ngOnInit(): void {
    this.getRest();
  }
  
  updateRest(paint:Int1){
    this.service.putRest(this.selectedItem!._links.self.href, paint).subscribe(
      ()=>{
        this.getRest();
      }
    )
  }
  

}
