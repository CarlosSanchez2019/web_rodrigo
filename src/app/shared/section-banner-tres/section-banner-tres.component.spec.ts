import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBannerTresComponent } from './section-banner-tres.component';

describe('SectionBannerTresComponent', () => {
  let component: SectionBannerTresComponent;
  let fixture: ComponentFixture<SectionBannerTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBannerTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBannerTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
