import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasYMediosComponent } from './agendas-y-medios.component';

describe('AgendasYMediosComponent', () => {
  let component: AgendasYMediosComponent;
  let fixture: ComponentFixture<AgendasYMediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendasYMediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendasYMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
