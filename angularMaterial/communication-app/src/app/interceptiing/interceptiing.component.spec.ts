import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptiingComponent } from './interceptiing.component';

describe('InterceptiingComponent', () => {
  let component: InterceptiingComponent;
  let fixture: ComponentFixture<InterceptiingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptiingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptiingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
