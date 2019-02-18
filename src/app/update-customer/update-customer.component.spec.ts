import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerComponent } from './update-customer.component';

describe('UpdateCustomerComponent', () => {
  let component: UpdateCustomerComponent;
  let fixture: ComponentFixture<UpdateCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
