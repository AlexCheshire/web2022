import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  
  //@Input() paint?:Int1
  // @Output() updated:EventEmitter<null> = new EventEmitter();
  constructor(private service:Serv1Service) { }
  paintList:Int1[]=[];
  paint:Int1 = {"title":"", "price":0, "type":"","cat":0};

  ngOnInit(): void {
    // let bt = document.getElementsByClassName("addbutton")[0];
    // bt.addEventListener("click", ()=>{
    //   this.paint!.title = (<HTMLInputElement>document.getElementById("title")).value;
    //   this.paint!.type = (<HTMLInputElement>document.getElementById("type")).value;
    //   this.paint!.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
    //   this.paint!.cat = parseInt((<HTMLInputElement>document.getElementById("cat")).value);
    //   this.addPaint();
    // })
    
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
        console.log(this.paint);
        this.getPaint();
      }
    )
  }

}
