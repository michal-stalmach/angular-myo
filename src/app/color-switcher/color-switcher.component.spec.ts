import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwitcherComponent } from './color-switcher.component';

describe('ColorSwitcherComponent', () => {
  let component: ColorSwitcherComponent;
  let fixture: ComponentFixture<ColorSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
