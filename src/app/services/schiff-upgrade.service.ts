import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SchiffupgradeDTO } from '../DTO/schiffUpgradeDTO';
import { ApiBase } from './api-base.service';


@Injectable({
  providedIn: 'root'
})
export class SchiffUpgradeService extends ApiBase{

  constructor(
    private http: HttpClient,
  ) { 
    super();
  }

  private routeName: string = "Schiffupgrades";


  getAll()
  {
    return this.http
      .get< SchiffupgradeDTO[]>(`${this.url}/${this.routeName}/all`, this.httpOptions );
  }

  getByID(
    id: number
  )
  {
    return this.http
      .get< SchiffupgradeDTO[]>(`${this.url}/${this.routeName}/all/id_schiffupgrades/${id}`, this.httpOptions );
  }

  createItem(
    SchiffUpgradeObject:  SchiffupgradeDTO
 )
 {
   return this.http
     .post(`${this.url}/${this.routeName}/create`,  SchiffUpgradeObject, this.httpOptions );
 }

  updateByID(
    id: number,
    SchiffUpgradeObject:  SchiffupgradeDTO
  )
  {
    return this.http
      .put(`${this.url}/${this.routeName}/update/${id}`,  SchiffUpgradeObject, this.httpOptions );
  }
}