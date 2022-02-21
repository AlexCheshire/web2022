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
        this.service.setList(paint);
      }
    )
  }

  

  ngOnInit(): void {
    
    let add = document.getElementsByClassName("addbtn");
    let addform = document.getElementById("add-hidden");
    let rm = document.getElementsByClassName("rmbtn");
    let rmform = document.getElementById("rm-hidden");
    

    add[0].addEventListener("click", () => {
        addform!.style.display = "block";
      });
      
    rm[0].addEventListener("click", () => {
        rmform!.style.display = "block";
    });
  }

}
