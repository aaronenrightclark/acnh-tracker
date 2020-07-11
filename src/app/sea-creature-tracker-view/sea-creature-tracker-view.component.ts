import { Component, OnInit } from '@angular/core';
import { selectSeaCreatures } from './reducers/sea-creature-tracker.reducer';
import { Observable } from 'rxjs';
import { Creature } from '../shared/models/collectible.model';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/models/app-state.model';
import { map, filter } from 'rxjs/operators';
import { toggleSeaCreatureCollectedAction } from './actions/sea-creature-tracker.actions';

@Component({
  selector: 'app-sea-creature-tracker-view',
  templateUrl: './sea-creature-tracker-view.component.html',
  styleUrls: ['./sea-creature-tracker-view.component.css'],
})
export class SeaCreatureTrackerViewComponent implements OnInit {
  creatures$: Observable<{ [key: number]: Creature }>;

  constructor(private store: Store<AppState>) {
    this.creatures$ = this.store.pipe(
      map((state) => selectSeaCreatures(state)),
      filter((value) => !!value)
    );
  }

  ngOnInit(): void {}

  toggleSeaCreatureCollected(creature: Creature) {
    this.store.dispatch(toggleSeaCreatureCollectedAction({ creature }));
  }
}
