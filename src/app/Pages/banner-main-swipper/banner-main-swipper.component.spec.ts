import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMainSwipperComponent } from './banner-main-swipper.component';

describe('BannerMainSwipperComponent', () => {
  let component: BannerMainSwipperComponent;
  let fixture: ComponentFixture<BannerMainSwipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerMainSwipperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerMainSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
