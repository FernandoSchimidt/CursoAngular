import { Component, OnInit } from '@angular/core';
import { Observable, Observer, from, of, interval, timer, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-basic-cration',
  templateUrl: './basic-cration.component.html',
  styleUrls: ['./basic-cration.component.css']
})
export class BasicCrationComponent implements OnInit {

  subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }
  observableCreate() {
    const hello = Observable.create((observer: Observer<string>) => {
      observer.next("hello");
      observer.next("from");
      observer.next("observable");
      observer.complete();
    });
    hello.subscribe(val => console.log(val));
  }
  fromClick() {
    from([1, 2, 3, 4, 5, 6])
      .subscribe((v) => console.log(v))
  }
  offClick() {
    of([1, 2, 3, 4, 5])
      .subscribe((v) => console.log(v))
  }
  intervalClick() {
    const source = interval(1000);
    const subscription = source.subscribe((v) => console.log(v));
    this.subscription.add(subscription);
  }

  timerClick() {
    const source = timer(3000, 1000);
    const subscription = source.subscribe((v) => console.log(v));
    this.subscription.add(subscription)
  }
  fromEventClick() {
    const subscription = fromEvent(document, 'click')
      .subscribe((e) => console.log(e));
    this.subscription.add(subscription)
  }
  unsubscribeClick() {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }

}
