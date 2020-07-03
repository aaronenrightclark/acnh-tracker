import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterCardComponent } from './critter-card.component';

describe('CritterCardComponent', () => {
  let component: CritterCardComponent;
  let fixture: ComponentFixture<CritterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
