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
