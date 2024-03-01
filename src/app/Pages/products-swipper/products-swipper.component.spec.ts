import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSwipperComponent } from './products-swipper.component';

describe('ProductsSwipperComponent', () => {
  let component: ProductsSwipperComponent;
  let fixture: ComponentFixture<ProductsSwipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsSwipperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
