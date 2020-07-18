import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { SongTrackerViewComponent } from './song-tracker-view.component';
import { CollectibleTrackerState } from '../shared/models/app-state.model';
import { CardStyle } from '../shared/models/collectible.model';

describe('SongTrackerViewComponent', () => {
  let component: SongTrackerViewComponent;
  let fixture: ComponentFixture<SongTrackerViewComponent>;

  const initialState: CollectibleTrackerState = {
    collectibles: {},
    encoded: '',
    cardStyle: CardStyle.DETAILS,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongTrackerViewComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
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
