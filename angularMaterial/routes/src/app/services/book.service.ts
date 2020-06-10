import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(20)
      .subscribe(() => {
        this.bookSubject$.next([
          { title: "Book1", pages: 200, authors: ["jhn", "nicole"] },
          { title: "Book2", pages: 2000, authors: ["Repolho"] },
          { title: "Book3", pages: 100, authors: ["Batata"] },
          { title: "Book4", pages: 500, authors: ["dunha"] },
          { title: "Book5", pages: 600, authors: ["fernando schimidt","dunha"] },
        ])
      })
  }

  add(b: Book) {
    let books = this.bookSubject$.getValue();
    books.push(b);
  }

  remove(i: number) {
    let books = this.bookSubject$.getValue();
    if (i >= 0 && i < books.length) books.splice(i, 1);
  }

  get(i: number): Observable<Book> {
    return this.books$.pipe(
      map(books => (i >= 0 && i < books.length) ? books[i] : null),
      delay(1000)
    )
  }
}
