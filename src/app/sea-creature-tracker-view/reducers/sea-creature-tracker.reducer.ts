import { SEA_CREATURE_DATA } from '../../shared/models/constants';
import {
  Collectible,
  COLLECTIBLE_KEY_COLLECTED,
} from '../../shared/models/collectible.model';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import {
  getDefaultEncoding,
  encodeSessionData,
} from '../../shared/services/collection-encoding.service';
import {
  TrackerCategory,
  AppState,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  createSelector,
  ActionReducer,
  Action,
  createReducer,
  on,
} from '@ngrx/store';
import { SeaCreatureTrackerActions } from '../actions';

const initialState: CollectibleTrackerState = {
  collectibles: SEA_CREATURE_DATA,
  encoded: getDefaultEncoding([TrackerCategory.SEA_CREATURE_COLLECTION]),
};

export const selectSeaCreatureTrackerState = (state: AppState) =>
  state.seaCreatureTrackerState;

export const selectSeaCreatures = createSelector(
  selectSeaCreatureTrackerState,
  (state: CollectibleTrackerState) => state.collectibles
);

// TODO: genericise for use with any modelable collection state
const getEncodedState = (collectibles: {
  [key: number]: Collectible;
}): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  Object.keys(collectibles).forEach((key) => {
    collectibles[key].collected ? collected.push(+key) : uncollected.push(+key);
    sessionData[TrackerCategory.SEA_CREATURE_COLLECTION] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
  });
  return encodeSessionData(sessionData);
};

const _seaCreatureTrackerReducer: ActionReducer<
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(
    SeaCreatureTrackerActions.toggleSeaCreatureCollectedAction,
    (state, { collectible }) => {
      const updated = {
        ...state,
        collectibles: {
          ...state.collectibles,
          [collectible.index]: {
            ...state.collectibles[collectible.index],
            collected: !state.collectibles[collectible.index].collected,
          },
        },
      } as CollectibleTrackerState;
      updated.encoded = getEncodedState(updated.collectibles);
      return updated;
    }
  ),
  on(
    SeaCreatureTrackerActions.updateSeaCreatureCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedSeaCreatureStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_COLLECTED
      )
  )
);

export function getUpdatedSeaCreatureStateForProperty(
  state: CollectibleTrackerState,
  data: SessionCategoryData,
  propName: string
): CollectibleTrackerState {
  const updated = JSON.parse(JSON.stringify(state)) as CollectibleTrackerState;
  for (const key of Object.keys(state.collectibles)) {
    updated.collectibles[key] = {
      ...state.collectibles[key],
    } as Collectible;
    updated.collectibles[key][propName] = data.inclusive
      ? data.indices.indexOf(+key) > -1
      : data.indices.indexOf(+key) < 0;
  }
  updated.encoded = getEncodedState(updated.collectibles);
  return updated;
}

export function seaCreatureTrackerReducer(
  state,
  action
): CollectibleTrackerState {
  return _seaCreatureTrackerReducer(state, action);
}
