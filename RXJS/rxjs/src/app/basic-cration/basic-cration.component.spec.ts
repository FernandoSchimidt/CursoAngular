import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCrationComponent } from './basic-cration.component';

describe('BasicCrationComponent', () => {
  let component: BasicCrationComponent;
  let fixture: ComponentFixture<BasicCrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
