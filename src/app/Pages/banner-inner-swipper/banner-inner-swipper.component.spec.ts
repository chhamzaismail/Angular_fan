import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInnerSwipperComponent } from './banner-inner-swipper.component';

describe('BannerInnerSwipperComponent', () => {
  let component: BannerInnerSwipperComponent;
  let fixture: ComponentFixture<BannerInnerSwipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerInnerSwipperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerInnerSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
