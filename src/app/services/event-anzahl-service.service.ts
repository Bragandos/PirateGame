import { Injectable } from '@angular/core';
import { EventDTO } from '../DTO/eventDTO';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventAnzahlServiceService {
  private count: number = 0;
  children: any[] = [];



  setChildCount(count: number) {
    this.count = count;
  }

  getChildCount() {
    return this.count;
  }

  addChild(eveDto: EventDTO){
    this.children.push(eveDto);
  }

  getChild(){
    return this.children;
  }


  setData(data: any[]): void {
    console.log(data);
    this.children = data;
    
  }

  getData() {
    console.log(this.children);
    return this.children;
  }

  constructor() { }
}
