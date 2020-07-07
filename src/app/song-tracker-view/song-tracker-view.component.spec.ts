import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTrackerViewComponent } from './song-tracker-view.component';

describe('SongTrackerViewComponent', () => {
  let component: SongTrackerViewComponent;
  let fixture: ComponentFixture<SongTrackerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTrackerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
