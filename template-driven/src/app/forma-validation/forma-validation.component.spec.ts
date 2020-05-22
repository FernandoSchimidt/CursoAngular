import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaValidationComponent } from './forma-validation.component';

describe('FormaValidationComponent', () => {
  let component: FormaValidationComponent;
  let fixture: ComponentFixture<FormaValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
