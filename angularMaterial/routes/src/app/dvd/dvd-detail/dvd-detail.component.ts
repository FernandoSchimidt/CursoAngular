import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DvdService } from 'src/app/services/dvd.service';
import { Dvd } from 'src/app/models/dvd';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>
  title = null;
  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router) { }

  ngOnInit(): void {
    //pega o index
    let index: number = +this.route.snapshot.paramMap.get('index');
    // this.route.paramMap
    //   .subscribe((params: ParamMap) => { console.log("index: ", params.get('index')) })
    this.dvd$ = this.dvdService.get(index);
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if (params.has('title'))
          this.title = params.get('title');
      })
  }
  goBack() {
    this.router.navigate(['/dvds']);
  }
}
