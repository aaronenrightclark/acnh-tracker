import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedFilterToggleComponent } from './collected-filter-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

describe('CollectedFilterToggleComponent', () => {
  let component: CollectedFilterToggleComponent;
  let fixture: ComponentFixture<CollectedFilterToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectedFilterToggleComponent],
      imports: [MatButtonToggleModule, FormsModule],
    }).compileComponents();
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
