import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validattion',
  templateUrl: './reactive-form-validattion.component.html',
  styleUrls: ['./reactive-form-validattion.component.css']
})
export class ReactiveFormValidattionComponent implements OnInit {

  clientForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(3)]],
    lastName: ['', [Validators.required]],
    birth: [new Date()],
    age: [0, [Validators.required, Validators.minLength(0), Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    phone1: ['', [Validators.required]],
    phone2: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {

  }
}
