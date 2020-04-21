import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeCount: number = 0;
  inactiveCount: number = 0;

  constructor() { }

  onCountActive() {
    console.log("Active count: " + ++this.activeCount);
  }

  onCountInactive() {
    console.log("Inactive count: " + ++this.inactiveCount);
  }
}
