import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBannerDosComponent } from './section-banner-dos.component';

describe('SectionBannerDosComponent', () => {
  let component: SectionBannerDosComponent;
  let fixture: ComponentFixture<SectionBannerDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBannerDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBannerDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
