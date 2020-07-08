import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  AppState,
  SessionData,
  TrackerCategory,
} from './shared/models/app-state.model';
import {
  selectBugTrackerState,
  BugTrackerState,
} from './bug-tracker-view/reducer/bug-tracker.reducer';
import { Observable, Subscription, Subject } from 'rxjs';
import {
  updateBugModelStateFromSessionAction,
  updateBugCollectionStateFromSessionAction,
} from './bug-tracker-view/actions/bug-tracker.actions';
import {
  selectFishTrackerState,
  FishTrackerState,
} from './fish-tracker-view/reducer/fish-tracker.reducer';
import {
  selectSongTrackerState,
  SongTrackerState,
} from './song-tracker-view/reducers/song-tracker.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'acnh-tracker';

  bugs$: Observable<BugTrackerState>;
  fish$: Observable<FishTrackerState>;
  songs$: Observable<SongTrackerState>;

  sessionData: SessionData = {};
  encodedSessionData: string = '';
  sessionDataInput: Subject<string> = new Subject<string>();
  sessionDataInputClasses = {};

  subscriptions = new Array<Subscription>();

  constructor(private store: Store<AppState>) {
    this.bugs$ = this.store.pipe(
      map((state: AppState) => selectBugTrackerState(state))
    );
    this.fish$ = this.store.pipe(
      map((state: AppState) => selectFishTrackerState(state))
    );
    this.songs$ = this.store.pipe(
      map((state: AppState) => selectSongTrackerState(state))
    );

    this.subscriptions.push(
      this.sessionDataInput
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe((input) => {
          console.log('encodedSessionData: ' + input);
          this.encodedSessionData = input.replace(/\s/g, '');
          const validEntry = this.validateSessionDataEntry();
          this.sessionDataInputClasses = {
            valid: validEntry,
            invalid: !validEntry,
          };
          if (validEntry) {
            this.getDecodedSession();
            this.dispatchSessionData();
          }
        })
    );

    this.subscriptions.push(
      this.bugs$.subscribe((bugTrackerState: BugTrackerState) => {
        this.encodedSessionData = bugTrackerState.encoded;
      })
    );
  }

  validateSessionDataEntry(): boolean {
    const entry = this.encodedSessionData;
    if (!entry) {
      return false;
    }
    const categories = entry.split('.');
    if (
      categories.some((cat) => {
        if (cat.indexOf('-') < 0) {
          return true;
        }
        const catData = cat.split('-');
        if (
          catData.length !== 3 ||
          TrackerCategory[catData[0]] === undefined ||
          !(catData[1] === '0' || catData[1] === '1')
        ) {
          return true;
        }
        if (catData[2] !== '') {
          const indices = catData[2].split(',');
          return indices.some((index) => /\D/.test(index));
        }
      })
    ) {
      return false;
    }
    return true;
  }

  updateSessionDataEntry(entry: string): void {
    this.sessionDataInput.next(entry);
  }

  showEncodedSession(): boolean {
    return Object.keys(this.sessionData).length > 0;
  }

  dispatchSessionData(): void {
    Object.keys(this.sessionData).forEach((key) => {
      switch (+key) {
        case TrackerCategory.BUG_COLLECTION: {
          this.store.dispatch(
            updateBugCollectionStateFromSessionAction({
              bugCollectionData: this.sessionData[key],
            })
          );
          break;
        }
        case TrackerCategory.BUG_MODELS: {
          this.store.dispatch(
            updateBugModelStateFromSessionAction({
              bugModelData: this.sessionData[key],
            })
          );
          break;
        }
      }
    });
  }

  getEncodedSession(): string {
    let encodedSession = '';
    Object.keys(this.sessionData).forEach((key) => {
      let encodedSessionCategory = key;
      encodedSessionCategory += `-${+this.sessionData[key].inclusive}`;
      encodedSessionCategory += `-${this.sessionData[key].indices.join(',')}`;
      if (!!encodedSession) {
        encodedSession += '.';
      }
      encodedSession += encodedSessionCategory;
    });
    return encodedSession;
  }

  getDecodedSession(): SessionData {
    const decoded: SessionData = {};
    const sessionCategories = this.encodedSessionData.split('.');
    sessionCategories.forEach((cat) => {
      const catData = cat.split('-');
      decoded[catData[0]] = {
        inclusive: catData[1],
        indices: catData[2].split(',').map((index) => +index.trim()),
      };
    });
    return decoded;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
