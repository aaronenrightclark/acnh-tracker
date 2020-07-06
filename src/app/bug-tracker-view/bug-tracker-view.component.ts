import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Critter } from '../shared/models/critter.model';
import { selectBugs } from './reducer/bug-tracker.reducer';
import { markBugCollected } from './actions/bug-tracker.actions';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from '../shared/models/app-state.model';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent implements OnInit {
  critters$: Observable<{ [key: number]: Critter }>;

  critters: Critter[];

  constructor(private store: Store<AppState>) {
    this.critters$ = this.store.pipe(
      map((state) => selectBugs(state)),
      filter((value) => !!value)
    );
  }

  ngOnInit(): void {}

  markBugCollected(bug: Critter) {
    this.store.dispatch(markBugCollected({ critter: bug }));
  }
}
