import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: 'bob', role: 'admin', lastlogin: new Date('2/1/2018') },
    { login: 'lia', role: 'user', lastlogin: new Date('6/6/2020') },
    { login: 'joão', role: 'admin', lastlogin: new Date('9/4/2019') },
    { login: 'fernando', role: 'user', lastlogin: new Date('7/3/2015') },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
