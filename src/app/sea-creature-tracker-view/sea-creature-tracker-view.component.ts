import { Component, OnInit, Inject } from '@angular/core';
import {
  CollectionSubset,
  Collectible,
  CardStyle,
} from '../shared/models/collectible.model';
import { Store, select } from '@ngrx/store';
import {
  AppState,
  Hemisphere,
  TRACKER_KEY,
} from '../shared/models/app-state.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import {
  SeaCreatureTrackerActions,
  SeaCreatureTrackerFilterActions,
} from './actions';
import { SharedTrackerActions } from '../shared/actions';
import { CollectibleTrackerViewComponent } from '../collectible-tracker-view/collectible-tracker-view.component';

@Component({
  selector: 'app-sea-creature-tracker-view',
  templateUrl: './sea-creature-tracker-view.component.html',
  styleUrls: ['./sea-creature-tracker-view.component.css'],
})
export class SeaCreatureTrackerViewComponent
  extends CollectibleTrackerViewComponent
  implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  reset = true;

  constructor(
    @Inject(TRACKER_KEY) public trackerKey,
    public store: Store<AppState>
  ) {
    super(trackerKey, store);
  }

  ngOnInit(): void {}

  onFilterByName(partialName: string) {
    this.store.dispatch(
      SeaCreatureTrackerFilterActions.filterSeaCreaturesByNameAction({
        partialName,
      })
    );
  }

  toggleSeaCreatureCollected(collectible: Collectible) {
    this.store.dispatch(
      SeaCreatureTrackerActions.toggleSeaCreatureCollectedAction({
        collectible,
      })
    );
  }

  toggleSeaCreatureCardStyle(cardStyle: CardStyle) {
    this.store.dispatch(
      SeaCreatureTrackerActions.setSeaCreatureCardStyleAction({ cardStyle })
    );
  }

  resetFilters() {
    this.store.dispatch(
      SeaCreatureTrackerFilterActions.resetSeaCreatureFilterStateAction()
    );
    this.reset = !this.reset; // value irrelevant, just triggers function
  }

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.store.dispatch(
      SharedTrackerActions.setHemisphereToggleValue({ hemisphere })
    );
  }

  setSeaCreatureCollectionStatusStatusFilter(
    collectionType: CollectionStatusFilterType,
    subset: CollectionSubset
  ) {
    this.store.dispatch(
      SeaCreatureTrackerFilterActions.setSeaCreatureCollectionStatusFilterAction(
        {
          collectionType,
          subset,
        }
      )
    );
  }
}
