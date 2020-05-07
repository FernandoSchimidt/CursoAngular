import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PErson } from './person.model';
import { Observable, fromEvent, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map, mergeAll, switchAll, switchMap, debounceTime } from 'rxjs/operators';
import { MergeMapOperator, mergeMap } from 'rxjs/internal/operators/mergeMap';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit {

  // @ViewChild('searchBy') el: ElementRef;
  @ViewChild('searchBy', { static: true }) el: ElementRef;
  searchInput: string = ''
  people$: Observable<PErson[]>;


  constructor(private http: HttpClient) { }

  private readonly url: string = 'http://localhost:3000'

  ngOnInit(): void {
    // this.firstOption();
    // this.secondOption();
    this.thirdOption();
  }

  filterPeople(searchInput: string): Observable<PErson[]> {
    if (searchInput.length === 0) {
      return of([]);
    } else {
      return this.http.get<PErson[]>(`${this.url}/${searchInput}`)
    }
  }
  thirdOption() {
    let keyUp$ = fromEvent(this.el.nativeElement, 'keyup');

    // this.people$ = keyUp$
    //   .pipe(map((e) => this.filterPeople(this.searchInput)))
    //   .pipe(switchAll());

    this.people$ = keyUp$
      .pipe(
        debounceTime(700), //tempo de espera para enviar a requisição
        switchMap(() => this.filterPeople(this.searchInput)))
  }
  secondOption() {
    let keyUp$ = fromEvent(this.el.nativeElement, 'keyup');

    // let fetch$ = keyUp$.pipe(map((e) => this.filterPeople(this.searchInput)))
    // fetch$
    //   .pipe(mergeAll())
    //   .subscribe((data) => console.log(data));

    // this.people$ = fetch$.pipe(mergeAll());

    this.people$ = keyUp$.pipe(mergeMap((e) => this.filterPeople(this.searchInput)));

  }


  firstOption() {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe(e => {
        this.filterPeople(this.searchInput)
          .subscribe(r => console.log(r))
      });
  }

}
