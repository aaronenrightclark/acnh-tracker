import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedFilterToggleComponent } from './collected-filter-toggle.component';

describe('CollectedFilterToggleComponent', () => {
  let component: CollectedFilterToggleComponent;
  let fixture: ComponentFixture<CollectedFilterToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectedFilterToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedFilterToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
