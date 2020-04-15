import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordDisplayToggle = false;
  toggleClicks = [];

  onDisplayPasswordClick() {
    this.passwordDisplayToggle = !this.passwordDisplayToggle;
    this.toggleClicks.push(new Date(Date.now()).toTimeString());
  }

  getDateBackground(index: number) {
    return index > 4 ? 'blue' : 'white';
  }
}
