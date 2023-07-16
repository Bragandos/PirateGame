import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { PirateDTO } from '../DTO/pirateDTO';
import { ApiBase } from './api-base.service';


@Injectable({
  providedIn: 'root'
})

export class  PirateService extends ApiBase{

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  private routeName: string = "Pirate";


  getAll()
  {
    return this.http
      .get< PirateDTO[]>(`${this.url}/${this.routeName}/all`, this.httpOptions );
  }

  getByID(
    id: number
  )
  {
    return this.http
      .get< PirateDTO[]>(`${this.url}/${this.routeName}/all/id/${id}`, this.httpOptions );
  }

  getByName(
    name: string
  ){
    return this.http
      .get< PirateDTO[]>(`${this.url}/${this.routeName}/all/spieler/${name}`, this.httpOptions );
  }

  deleteByID(
    id: number
  )
  {
    return this.http
      .get< PirateDTO[]>(`${this.url}/${this.routeName}/delete/id/${id}`, this.httpOptions );
  }

  createItem(
     pirateObject:  PirateDTO
  )
  {
    return this.http
      .post(`${this.url}/${this.routeName}/create`,  pirateObject, this.httpOptions );
  }

  updateByID(
    id: number,
     pirateObject:  PirateDTO,
   
  )
  {
    return this.http
      .put(`${this.url}/${this.routeName}/update/${id}`,  pirateObject, this.httpOptions );
  }
}