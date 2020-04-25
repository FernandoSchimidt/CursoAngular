import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public color: string = 'accent';
  public btnDisabled = false;
  idx = 0;
  colors = ['primary', 'accent', 'warn', '']

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx + 1) % this.color.length
    }, 1000)
  }

}
