import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureTrackerComponent } from './creature-tracker.component';
import { COLLECTIBLE_KEY_COLLECTED } from '../shared/models/collectible.model';
import {
  Collectible,
  CollectibleType,
} from '../shared/models/collectible.model';

describe('CreatureTrackerComponent', () => {
  let component: CreatureTrackerComponent;
  let fixture: ComponentFixture<CreatureTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureTrackerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureTrackerComponent);
    component = fixture.componentInstance;
    component.collectibles = {
      0: {
        index: 0,
        name: 'anything',
        price: 0,
        type: CollectibleType.SONG,
        [COLLECTIBLE_KEY_COLLECTED]: false,
      },
    } as {
      [key: number]: Collectible;
    };
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
