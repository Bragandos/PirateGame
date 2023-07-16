import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventAnzahlServiceService {

  private count: number = 0;

  setChildCount(count: number) {
    this.count = count;
  }

  getChildCount() {
    return this.count;
  }

  constructor() { }
}
