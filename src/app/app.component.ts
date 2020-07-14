import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription, Subject, combineLatest } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { updateSeaCreatureCollectionStateFromSessionAction } from './sea-creature-tracker-view/actions/sea-creature-tracker.actions';
import { updateSongCollectionStateFromSessionAction } from './song-tracker-view/actions/song-tracker.actions';
import { CollectibleTrackerState } from './shared/models/app-state.model';
import {
  AppState,
  SessionData,
  TrackerCategory,
} from './shared/models/app-state.model';
import { selectBugTrackerState } from './bug-tracker-view/reducers/bug-tracker.reducer';
import {
  updateBugCollectionStateFromSessionAction,
  updateBugModelStateFromSessionAction,
  updateHaveBugModelSuppliesStateFromSessionAction,
} from './bug-tracker-view/actions/bug-tracker.actions';
import {
  updateFishCollectionStateFromSessionAction,
  updateFishModelStateFromSessionAction,
  updateHaveFishModelSuppliesStateFromSessionAction,
} from './fish-tracker-view/actions/fish-tracker.actions';
import { selectFishTrackerState } from './fish-tracker-view/reducers/fish-tracker.reducer';
import { selectSongTrackerState } from './song-tracker-view/reducers/song-tracker.reducer';
import { selectSeaCreatureTrackerState } from './sea-creature-tracker-view/reducers/sea-creature-tracker.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'acnh-tracker';

  bugs$: Observable<CollectibleTrackerState>;
  fish$: Observable<CollectibleTrackerState>;
  seaCreatures$: Observable<CollectibleTrackerState>;
  songs$: Observable<CollectibleTrackerState>;

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
    this.seaCreatures$ = this.store.pipe(
      map((state: AppState) => selectSeaCreatureTrackerState(state))
    );
    this.songs$ = this.store.pipe(
      map((state: AppState) => selectSongTrackerState(state))
    );

    this.subscriptions.push(
      this.sessionDataInput
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe((input) => {
          this.encodedSessionData = input.replace(/\s/g, '');
          const validEntry = this.validateSessionDataEntry();
          this.sessionDataInputClasses = {
            valid: validEntry,
            invalid: !validEntry,
          };
          if (validEntry) {
            this.sessionData = this.getDecodedSession();
            this.dispatchSessionData();
          }
        })
    );

    this.subscriptions.push(
      combineLatest([
        this.bugs$,
        this.fish$,
        this.seaCreatures$,
        this.songs$,
      ]).subscribe(
        ([
          bugTrackerState,
          fishTrackerState,
          seaCreatureTrackerState,
          songTrackerState,
        ]) => {
          this.encodedSessionData = [
            bugTrackerState.encoded,
            fishTrackerState.encoded,
            seaCreatureTrackerState.encoded,
            songTrackerState.encoded,
          ].join('.');
        }
      )
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
    const supportedCollections = {
      [TrackerCategory.BUG_COLLECTION]: updateBugCollectionStateFromSessionAction,
      [TrackerCategory.BUG_MODELS]: updateBugModelStateFromSessionAction,
      [TrackerCategory.BUG_MODEL_SUPPLIES]: updateHaveBugModelSuppliesStateFromSessionAction,
      [TrackerCategory.FISH_COLLECTION]: updateFishCollectionStateFromSessionAction,
      [TrackerCategory.FISH_MODELS]: updateFishModelStateFromSessionAction,
      [TrackerCategory.FISH_MODEL_SUPPLIES]: updateHaveFishModelSuppliesStateFromSessionAction,
      [TrackerCategory.SEA_CREATURE_COLLECTION]: updateSeaCreatureCollectionStateFromSessionAction,
      [TrackerCategory.SONGS]: updateSongCollectionStateFromSessionAction,
    };

    Object.keys(this.sessionData).forEach((key) => {
      if (supportedCollections[key]) {
        this.store.dispatch(
          supportedCollections[key]({ data: this.sessionData[key] })
        );
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
    console.log('decoding session...');
    const decoded: SessionData = {};
    const sessionCategories = this.encodedSessionData.split('.');
    sessionCategories.forEach((cat) => {
      const catData = cat.split('-');
      console.log(
        `catData[2].split(','): ` + `'${JSON.stringify(catData[2].split(','))}'`
      );
      decoded[catData[0]] = {
        inclusive: catData[1],
        indices: catData[2]
          .split(',')
          .filter((index) => index !== '')
          .map((index) => +index.trim()),
      };
    });
    console.log('decoded session: ' + JSON.stringify(decoded));
    return decoded;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
