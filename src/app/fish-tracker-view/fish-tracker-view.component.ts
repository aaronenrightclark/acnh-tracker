import { Component, OnInit } from '@angular/core';
import { selectFish } from './reducers/fish-tracker.reducer';
import { Creature } from '../shared/models/collectible.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/models/app-state.model';
import { map, filter } from 'rxjs/operators';
import {
  toggleFishCollectedAction,
  toggleFishModelObtainedAction,
  toggleHaveFishModelSuppliesAction,
} from './actions/fish-tracker.actions';

@Component({
  selector: 'app-fish-tracker-view',
  templateUrl: './fish-tracker-view.component.html',
  styleUrls: ['./fish-tracker-view.component.css'],
})
export class FishTrackerViewComponent implements OnInit {
  creatures$: Observable<{ [key: number]: Creature }>;

  constructor(private store: Store<AppState>) {
    this.creatures$ = this.store.pipe(
      map((state) => selectFish(state)),
      filter((value) => !!value)
    );
  }

  ngOnInit(): void {}

  toggleFishCollected(fish: Creature) {
    this.store.dispatch(toggleFishCollectedAction({ fish }));
  }

  toggleFishModelCollected(fish: Creature) {
    this.store.dispatch(toggleFishModelObtainedAction({ fish }));
  }

  toggleHaveFishModelSupplies(fish: Creature) {
    this.store.dispatch(toggleHaveFishModelSuppliesAction({ fish }));
  }
}
