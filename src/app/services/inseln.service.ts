import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { InselDTO } from '../DTO/inselnDTO';
import { ApiBase } from './api-base.service';


@Injectable({
  providedIn: 'root'
})
export class InselnService extends ApiBase{

  constructor(
    private http: HttpClient,
  ) {
    super();
  }
  
  private routeName: string = "Inseln";

  getAll()
  {
    return this.http
      .get< InselDTO[]>(`${this.url}/${this.routeName}/all`, this.httpOptions );
  }

  getByID(
    id: number
  )
  {
    return this.http
      .get< InselDTO[]>(`${this.url}/${this.routeName}/all/id/${id}`, this.httpOptions );
  }

  deleteByID(
    id: number
  )
  {
    return this.http
      .get< InselDTO[]>(`${this.url}/${this.routeName}/delete/id/${id}`, this.httpOptions );
  }

  createItem(
    inselObject:  InselDTO
 )
 {
   return this.http
     .post(`${this.url}/${this.routeName}/create`,  inselObject, this.httpOptions );
 }

 updateByID(
  id: number,
   inselObject:  InselDTO
)
{
  return this.http
    .put(`${this.url}/${this.routeName}/update/${id}`,  inselObject, this.httpOptions );
}
}
