import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view.component';
import { CardStyle } from '../shared/models/collectible.model';
import { CollectibleTrackerState } from '../shared/models/app-state.model';
import { provideMockStore } from '@ngrx/store/testing';

describe('SeaCreatureTrackerViewComponent', () => {
  let component: SeaCreatureTrackerViewComponent;
  let fixture: ComponentFixture<SeaCreatureTrackerViewComponent>;

  const initialState: CollectibleTrackerState = {
    collectibles: {},
    encoded: '',
    cardStyle: CardStyle.DETAILS,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeaCreatureTrackerViewComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaCreatureTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
