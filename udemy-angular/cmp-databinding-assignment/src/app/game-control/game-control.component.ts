import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberIncremented = new EventEmitter<number>();
  interval: any;
  currentNumber: number = 0;

  constructor() {
   }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {this.numberIncremented.emit(++this.currentNumber);}, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
