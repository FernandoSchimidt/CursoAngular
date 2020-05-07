import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  subscriptionsAreActive = false;
  subscriptions: Subscription[] = [];
  private unsubscrbeAll$: Subject<any> = new Subject();
  private intervalSubscription: Subscription = null;



  constructor() { }

  ngOnInit(): void {
    this.checkSubscriptions();
  }

  checkSubscriptions() {
    this.intervalSubscription = interval(100).subscribe(() => {
      let active = false;
      this.subscriptions.forEach((s) => {
        if (!s.closed) {
          active = true;
        }
      })
      this.subscriptionsAreActive = active;
    })
  }

  subscribe() {
    const subscription1 = interval(100)
      .pipe(takeUntil(this.unsubscrbeAll$))
      .subscribe((i) => { console.log(i); })
    const subscription2 = fromEvent(document, 'mousemove')
      .subscribe((e) => console.log(e));
    this.subscriptions.push(subscription1);
    this.subscriptions.push(subscription2);
  }
  unsubscribe() {
    this.unsubscrbeAll$.next();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.intervalSubscription != null)
      this.intervalSubscription.unsubscribe();
    console.log('Destroy!');
    this.unsubscrbeAll$.next();
  }

}
