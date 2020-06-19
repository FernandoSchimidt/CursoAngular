import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-atuthors',
  templateUrl: './book-atuthors.component.html',
  styleUrls: ['./book-atuthors.component.css']
})
export class BookAtuthorsComponent implements OnInit {

  authors$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log('Booksasasas')
    this.route.paramMap
    this.authors$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => (params.get('authors').split(',')))
      )
  }

}
