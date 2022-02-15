import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  
  @Input() paint?:Int1
  @Output() updated:EventEmitter<null> = new EventEmitter();
  constructor(private service:Serv1Service) { }
  paintList:Int1[]=[];

  ngOnInit(): void {
  }

  addPaint(){
    if(this.paint){
      this.service.putPaint(this.paint).subscribe(
        ()=>{
          this.updated.emit();
        }
      )
    }
  }

}
