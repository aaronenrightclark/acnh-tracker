import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemisphereToggleComponent } from './hemisphere-toggle.component';

describe('HemisphereToggleComponent', () => {
  let component: HemisphereToggleComponent;
  let fixture: ComponentFixture<HemisphereToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemisphereToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemisphereToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
