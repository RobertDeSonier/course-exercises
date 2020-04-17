import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  onNumberIncremented(eventNumber: number) {
    if (eventNumber%2 == 0) {
      this.evenNumbers.push(eventNumber);
    }
    else {
      this.oddNumbers.push(eventNumber);
    }
  }
}
