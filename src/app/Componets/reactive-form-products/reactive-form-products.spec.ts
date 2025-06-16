import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormProducts } from './reactive-form-products';

describe('ReactiveFormProducts', () => {
  let component: ReactiveFormProducts;
  let fixture: ComponentFixture<ReactiveFormProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
