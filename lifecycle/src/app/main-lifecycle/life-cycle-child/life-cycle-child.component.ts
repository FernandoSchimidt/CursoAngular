import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { clear } from 'console';
export interface LifeCicleEvent {
  id: number;
  name: string;
  color: string;
}
@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCicleEvent[] = [];
  nextEventId: number = 0;

  colors: string[] = ["accent", "warn", "primary"]
  private intervalRef = null
  constructor() {
    console.log(this.name + " - constructor")
    this.newEvent("constructor");
    this.intervalRef = setInterval(() => { console.log('interval') }, 2000)
  }

  ngOnInit(): void {
    console.log(this.name + " - ngOnInit")
    this.newEvent("ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name + " - ngOnChanges")
    this.newEvent("ngOnChanges");
    for (let propName in changes) {
      console.log(propName)
    }
    // if (changes['name']) {
    //   console.log('new name' + changes['name'].currentValue);
    // }
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.name + " - After")
    this.newEvent("ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.name + " - ngAfterInit")
    this.newEvent("ngAfterViewInit");
  }
  ngOnDestroy(): void {
    console.log(this.name + " - ngOnDestroy")
    this.newEvent("ngOnDestroy");
    clearInterval(this.intervalRef);
  }
  newEvent(name: string) {
    let i = this.nextEventId++;
    this.events.push({ id: i, color: this.colors[i % this.colors.length], name: name });
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id = i);
      if (idx >= 0) {
        this.events.splice(idx, 1)
      }
    }, 3000 + this.events.length * 2000)
  }

}
