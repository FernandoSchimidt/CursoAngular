import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges
    .subscribe((newName)=>{
      console.log('OnChange',newName)
    })
  }
  setFirstName() {
    this.firstName.setValue('Fernando')
    console.log(this.firstName.value)
  }

}
