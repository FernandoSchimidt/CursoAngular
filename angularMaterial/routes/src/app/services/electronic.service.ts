import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Electronic } from '../models/electronic';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronicSubject$.asObservable();

  constructor() {
    timer(1000)
      .subscribe(() => {
        this.electronicSubject$.next([
          { name: 'Headphone', brand: "Bose", price: 200, description: "Noise cancelling" },
          { name: 'Portable HD', brand: "Sansung", price: 100, description: "2TB Hard disck" },
          { name: 'Monitor 23\"', brand: "AOC", price: 200, description: "HDMI/VGA" },
          { name: 'Processor 17-8700K', brand: "Intel", price: 400, description: "12Mb Cache" },
          { name: 'Mouse wireless', brand: "Longitech", price: 200, description: "For Games" },
        ])
      })
  }

  get(i: number): Observable<Electronic> {
    return this.electronics$.pipe(
      map(eletronics => (i >= 0 && i < eletronics.length) ? eletronics[i] : null),
      delay(1000)
    )
  }
}
