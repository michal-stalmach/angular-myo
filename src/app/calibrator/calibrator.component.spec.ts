import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibratorComponent } from './calibrator.component';

describe('CalibratorComponent', () => {
  let component: CalibratorComponent;
  let fixture: ComponentFixture<CalibratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalibratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
