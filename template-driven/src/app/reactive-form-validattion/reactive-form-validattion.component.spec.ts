import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidattionComponent } from './reactive-form-validattion.component';

describe('ReactiveFormValidattionComponent', () => {
  let component: ReactiveFormValidattionComponent;
  let fixture: ComponentFixture<ReactiveFormValidattionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidattionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormValidattionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
