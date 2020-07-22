import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription, Subject, combineLatest } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { updateSeaCreatureCollectionStateFromSessionAction } from './sea-creature-tracker-view/actions/sea-creature-tracker.actions';
import { updateSongCollectionStateFromSessionAction } from './song-tracker-view/actions/song-tracker.actions';
import {
  CollectibleTrackerState,
  CollectibleTrackerKey,
} from './shared/models/app-state.model';
import {
  AppState,
  SessionData,
  TrackerCategory,
} from './shared/models/app-state.model';
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
import { ActivatedRoute } from '@angular/router';
import { getDefaultEncoding } from './shared/services/collection-encoding.service';
import {
  selectCollectibleTracker,
  getCollectibleTrackerStateSelector,
} from './shared/helpers/reducer.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'ACNH Tracker';

  bugs$: Observable<CollectibleTrackerState>;
  fish$: Observable<CollectibleTrackerState>;
  seaCreatures$: Observable<CollectibleTrackerState>;
  songs$: Observable<CollectibleTrackerState>;

  sessionData: SessionData = {};
  encodedSessionData: string = '';
  sessionDataInput: Subject<string> = new Subject<string>();
  sessionQueryParam: Subject<string> = new Subject<string>();
  sessionDataInputClasses = {};

  subscriptions = new Array<Subscription>();

  showSessionForm = false;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.bugs$ = this.store.pipe(
      map((state: AppState) =>
        getCollectibleTrackerStateSelector(selectCollectibleTracker)(
          state,
          CollectibleTrackerKey.BUGS
        )
      )
    );
    this.fish$ = this.store.pipe(
      map((state: AppState) =>
        getCollectibleTrackerStateSelector(selectCollectibleTracker)(
          state,
          CollectibleTrackerKey.FISH
        )
      )
    );
    this.seaCreatures$ = this.store.pipe(
      map((state: AppState) =>
        getCollectibleTrackerStateSelector(selectCollectibleTracker)(
          state,
          CollectibleTrackerKey.SEA_CREATURES
        )
      )
    );
    this.songs$ = this.store.pipe(
      map((state: AppState) =>
        getCollectibleTrackerStateSelector(selectCollectibleTracker)(
          state,
          CollectibleTrackerKey.SONGS
        )
      )
    );

    this.subscriptions.push(
      this.sessionDataInput
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe((input) => {
          this.setEncodedSessionDataValue(input);
        })
    );

    this.subscriptions.push(
      combineLatest([
        this.bugs$.pipe(filter((state) => !!state)),
        this.fish$.pipe(filter((state) => !!state)),
        this.seaCreatures$.pipe(filter((state) => !!state)),
        this.songs$.pipe(filter((state) => !!state)),
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
          this.sessionQueryParam.next(this.encodedSessionData);
        }
      )
    );

    this.subscriptions.push(
      this.activatedRoute.queryParamMap.subscribe((queryParamMap) => {
        if (
          queryParamMap.has('session') &&
          this.validateSessionData(queryParamMap.get('session'))
        ) {
          this.setEncodedSessionDataValue(queryParamMap.get('session'));
        }
      })
    );
  }

  setEncodedSessionDataValue(value: string): void {
    this.encodedSessionData = value.replace(/\s/g, '');
    const validEntry = this.validateSessionDataEntry();
    this.sessionDataInputClasses = {
      valid: validEntry,
      invalid: !validEntry,
    };
    if (validEntry) {
      this.sessionData = this.getDecodedSession();
      this.dispatchSessionData();
      this.sessionQueryParam.next(this.encodedSessionData);
    }
  }

  validateSessionData(data: string): boolean {
    if (!data) {
      return false;
    }
    const categories = data.split('.');
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

  validateSessionDataEntry(): boolean {
    return this.validateSessionData(this.encodedSessionData);
  }

  updateSessionDataEntry(entry: string): void {
    if (!!entry) {
      this.sessionDataInput.next(entry);
    } else {
      this.sessionDataInput.next();
    }
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
    const decoded: SessionData = {};
    const sessionCategories = this.encodedSessionData.split('.');
    sessionCategories.forEach((cat) => {
      const catData = cat.split('-');
      decoded[catData[0]] = {
        inclusive: +catData[1],
        indices: catData[2]
          .split(',')
          .filter((index) => index !== '')
          .map((index) => +index.trim()),
      };
    });
    return decoded;
  }

  resetTracker(): void {
    this.setEncodedSessionDataValue(
      getDefaultEncoding([
        TrackerCategory.BUG_COLLECTION,
        TrackerCategory.BUG_MODELS,
        TrackerCategory.BUG_MODEL_SUPPLIES,
        TrackerCategory.FISH_COLLECTION,
        TrackerCategory.FISH_MODELS,
        TrackerCategory.FISH_MODEL_SUPPLIES,
        TrackerCategory.SEA_CREATURE_COLLECTION,
        TrackerCategory.SONGS,
      ])
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
