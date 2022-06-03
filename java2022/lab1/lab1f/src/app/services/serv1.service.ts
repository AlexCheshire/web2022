import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Int1 } from '../interfaces/int1';
import { Rest1 } from '../interfaces/rest1';


@Injectable({
  providedIn: 'root'
})


export class Serv1Service {


  url:string="http://localhost:1156/paints";


  constructor(private http:HttpClient) { }


  getRest():Observable<Rest1>{
    return this.http.get<Rest1>(this.url);
  }

  postRest(paint:Int1):Observable<Int1>{
    return this.http.post<Int1>(this.url, paint)
  }

  putRest(paint:Int1):Observable<Int1>{
    return this.http.put<Int1>(paint._links.self.href, paint)
  }
  
  deleteRest(paint:Int1):Observable<Int1>{
    return this.http.delete<Int1>(paint._links.self.href)
  }
}
