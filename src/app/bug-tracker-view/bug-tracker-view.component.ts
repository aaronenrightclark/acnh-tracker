import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Critter } from '../shared/models/critter.model';
import { selectBugs } from './reducer/bug-tracker.reducer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from '../shared/models/app-state.model';
import { toggleBugCollectedAction } from './actions/bug-tracker.actions';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent implements OnInit {
  critters$: Observable<{ [key: number]: Critter }>;

  constructor(private store: Store<AppState>) {
    this.critters$ = this.store.pipe(
      map((state) => selectBugs(state)),
      filter((value) => !!value)
    );
  }

  ngOnInit(): void {}

  toggleBugCollected(bug: Critter) {
    this.store.dispatch(toggleBugCollectedAction({ critter: bug }));
  }
}
