import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  mileseconds: number = 0;
  interval: any;
  running = false
  constructor() { }

  ngOnInit(): void {
  }

  start() {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.mileseconds += 50;
      }, 50);
      this.running = true
    }

  }
  stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }
  clear() {
    this.mileseconds = 0
  }
  public round(n: number): number {
    return Math.round(n);
  }
}
