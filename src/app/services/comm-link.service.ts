import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommLinkService {
  public dataArray: any[] = [];
  public changed: boolean = false;
  
  constructor() { }
}
