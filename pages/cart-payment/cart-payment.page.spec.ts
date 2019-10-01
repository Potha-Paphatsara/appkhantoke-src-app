import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPaymentPage } from './cart-payment.page';

describe('CartPaymentPage', () => {
  let component: CartPaymentPage;
  let fixture: ComponentFixture<CartPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
