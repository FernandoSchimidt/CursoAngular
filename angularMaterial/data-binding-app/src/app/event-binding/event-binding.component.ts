import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  i = 0;
  public buttonName = 'My Button'
  selectDisabeld = false

  constructor() { }
  spinnerMode = 'determinate'
  btnEnable = true
  selectedOption = 1;

  inputName = "Fernando"

  ngOnInit(): void {
  }
  cbChange(event) {
    console.log(event.checked)
    this.selectDisabeld = event.checked
  }
  selectionChane(event) {
    console.log(event)
    this.selectedOption = event.value
  }
  save() {
    console.log('Click')
  }
  inc() {
    this.i += 5;
    this.buttonName = "It was clicked " + this.i + ' times'
  }
  disable() {
    this.btnEnable = false
    this.spinnerMode = 'indeterminate'
    setTimeout(() => {
      this.btnEnable = true
      this.spinnerMode = 'determinate'
    }, 3000)
  }
  // inputEvent(event) {
  //   console.log(event.target.value)
  //   console.log(this.inputName)
  // }
}
