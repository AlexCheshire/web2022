import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Int1 } from '../interfaces/int1';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  list = new BehaviorSubject<Int1[]>([]);
  url:string="http://localhost:8080/lab1/Servlet1";

  constructor(private http:HttpClient) { }

  getPaint():Observable<Int1[]>{
    return this.http.get<Int1[]>(this.url)
  }
  postPaint(paint:Int1):Observable<Int1[]>{
    return this.http.post<Int1[]>(this.url, paint)
  }
  putPaint(paint:Int1):Observable<Int1[]>{
    return this.http.put<Int1[]>(this.url+"/"+paint.title, paint)
  }
  deletePaint(paint:Int1):Observable<Int1[]>{
    return this.http.delete<Int1[]>(this.url+"/"+paint.title)
  }
  setList(list:Int1[]){
    this.list.next(list);
  }
}
