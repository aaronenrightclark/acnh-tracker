import { Collectible } from '../models/collectible.model';
import { getEncodedCollectibleState } from '../services/collection-encoding.service';
import { CollectibleTrackerModel } from '../models/app-state.model';
import {
  AppState,
  CollectibleTrackerFilterState,
} from '../models/app-state.model';
import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelectorWithProps,
} from '@ngrx/store';
import { CollectibleTrackerFilters } from '../models/app-state.model';
import { CollectibleTrackerKey } from '../models/app-state.model';
import {
  TrackerCategory,
  CollectibleTrackerState,
  SessionCategoryData,
} from '../models/app-state.model';

export interface StateEncodingOptions {
  collection: TrackerCategory;
  models?: TrackerCategory;
  modelSupplies?: TrackerCategory;
}

export function getUpdatedStateForCollectibleToggle(
  state: CollectibleTrackerState,
  collectible: Collectible,
  key: string,
  encodingOptions: StateEncodingOptions
): CollectibleTrackerState {
  const updated = {
    ...state,
    collectibles: {
      ...state.collectibles,
      [collectible.index]: {
        ...state.collectibles[collectible.index],
        [key]: !state.collectibles[collectible.index][key],
      },
    },
  } as CollectibleTrackerState;
  updated.encoded = getEncodedCollectibleState(
    updated.collectibles,
    encodingOptions
  );
  return updated;
}

export function getUpdatedCollectibleStateForProperty<
  T extends CollectibleTrackerState
>(
  state: T,
  data: SessionCategoryData,
  propName: string,
  options: StateEncodingOptions
): T {
  const updated = JSON.parse(JSON.stringify(state)) as T;
  for (const key of Object.keys(state.collectibles)) {
    updated.collectibles[key] = {
      ...state.collectibles[key],
    } as Collectible;
    updated.collectibles[key][propName] = data.inclusive
      ? data.indices.indexOf(+key) > -1
      : data.indices.indexOf(+key) < 0;
  }
  updated.encoded = getEncodedCollectibleState(updated.collectibles, options);
  return updated;
}

export const selectCollectibleTracker = (
  state: AppState,
  key: CollectibleTrackerKey
) => state[key];

export const getCollectibleTrackerStateSelector = (
  trackerSelector: (
    state: AppState,
    key: CollectibleTrackerKey
  ) => CollectibleTrackerModel
) => {
  return createSelector(
    trackerSelector,
    (tracker: CollectibleTrackerModel) => tracker.trackerState
  );
};

export const getCollectibleTrackerFilterStateSelector = (
  trackerSelector: (
    state: AppState,
    key: CollectibleTrackerKey
  ) => CollectibleTrackerModel
) => {
  return createSelector(
    trackerSelector,
    (tracker: CollectibleTrackerModel) => tracker.trackerFilterState
  );
};

export const getCollectiblesSelector = (
  trackerStateSelector: MemoizedSelectorWithProps<
    AppState,
    CollectibleTrackerKey,
    CollectibleTrackerState,
    DefaultProjectorFn<CollectibleTrackerState>
  >
) => {
  return createSelector(
    trackerStateSelector,
    (state: CollectibleTrackerState) => state.collectibles
  );
};

export const getCardStyleSelector = (
  trackerStateSelector: MemoizedSelectorWithProps<
    AppState,
    CollectibleTrackerKey,
    CollectibleTrackerState,
    DefaultProjectorFn<CollectibleTrackerState>
  >
) => {
  return createSelector(
    trackerStateSelector,
    (state: CollectibleTrackerState) => state.cardStyle
  );
};

export const getEncodedStateSelector = (
  trackerStateSelector: MemoizedSelectorWithProps<
    AppState,
    CollectibleTrackerKey,
    CollectibleTrackerState,
    DefaultProjectorFn<CollectibleTrackerState>
  >
) => {
  return createSelector(
    trackerStateSelector,
    (state: CollectibleTrackerState) => state.encoded
  );
};

export const getCollectionFiltersSelector = (
  trackerFilterStateSelector: MemoizedSelectorWithProps<
    AppState,
    CollectibleTrackerKey,
    CollectibleTrackerFilterState,
    DefaultProjectorFn<CollectibleTrackerFilterState>
  >
) => {
  return createSelector(
    trackerFilterStateSelector,
    (state: CollectibleTrackerFilterState) => state.filters
  );
};

export const getCollectionNameFilterSelector = (
  collectibleTrackerFiltersSelector: MemoizedSelectorWithProps<
    AppState,
    CollectibleTrackerKey,
    CollectibleTrackerFilters,
    DefaultProjectorFn<CollectibleTrackerFilters>
  >
) => {
  return createSelector(
    collectibleTrackerFiltersSelector,
    (filters: CollectibleTrackerFilters) => filters.partialName
  );
};
