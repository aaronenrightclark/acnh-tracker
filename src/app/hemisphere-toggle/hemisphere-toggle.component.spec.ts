import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemisphereToggleComponent } from './hemisphere-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

describe('HemisphereToggleComponent', () => {
  let component: HemisphereToggleComponent;
  let fixture: ComponentFixture<HemisphereToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HemisphereToggleComponent],
      imports: [MatButtonToggleModule],
    }).compileComponents();
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
