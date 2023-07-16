import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CrewupgradeDTO } from '../DTO/crewUpgradeDTO';
import { ApiBase } from './api-base.service';

@Injectable({
  providedIn: 'root'
})
export class CrewUpgradeService extends ApiBase{

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  private routeName: string = "Crewupgrade";

  getAll()
  {
    return this.http
      .get< CrewupgradeDTO[]>(`${this.url}/${this.routeName}/all`, this.httpOptions );
  }

  getByID(
    id: number
  )
  {
    return this.http
      .get< CrewupgradeDTO[]>(`${this.url}/${this.routeName}/all/id_crewupgrade/${id}`, this.httpOptions );
  }

  deleteByID(
    id: number
  )
  {
    return this.http
      .get< CrewupgradeDTO[]>(`${this.url}/${this.routeName}/delete/id_crewupgrade/${id}`, this.httpOptions );
  }

  createItem(
    CrewUpgradeObject:  CrewupgradeDTO
  )
  {
    return this.http
      .post(`${this.url}/${this.routeName}/create`,  CrewUpgradeObject, this.httpOptions );
  }

 updateByID(
    id: number,
    CrewUpgradeObject:  CrewupgradeDTO
  )
  {
    return this.http
      .put(`${this.url}/${this.routeName}/update/${id}`,  CrewUpgradeObject, this.httpOptions );
  }
}
