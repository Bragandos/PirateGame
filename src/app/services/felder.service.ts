import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FelderDTO } from '../DTO/felderDTO';
import { ApiBase } from './api-base.service';


@Injectable({
  providedIn: 'root'
})
export class FelderService extends ApiBase{

  constructor(
    private http: HttpClient,
  ) { 
    super();
  }

  private routeName: string = "Felder";

  getAll()
  {
    return this.http
      .get< FelderDTO[]>(`${this.url}/${this.routeName}/all`, this.httpOptions );
  }

  getByID(
    id: number
  )
  {
    return this.http
      .get< FelderDTO[]>(`${this.url}/${this.routeName}/all/id/${id}`, this.httpOptions );
  }

  deleteByID(
    id: number
  )
  {
    return this.http
      .get< FelderDTO[]>(`${this.url}/${this.routeName}/delete/id/${id}`, this.httpOptions );
  }

  createItem(
     felderObject:  FelderDTO
  )
  {
    return this.http
      .post(`${this.url}/${this.routeName}/create`,  felderObject, this.httpOptions );
  }

  updateByID(
    id: number,
     felderObject:  FelderDTO
  )
  {
    return this.http
      .put(`${this.url}/${this.routeName}/update/${id}`,  felderObject, this.httpOptions );
  }
}
