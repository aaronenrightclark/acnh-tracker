import { Creature } from '../../shared/models/collectible.model';
import { SEA_CREATURE_DATA } from '../../shared/models/constants';
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
import {
  toggleSeaCreatureCollectedAction,
  updateSeaCreatureCollectionStateFromSessionAction,
} from '../actions/sea-creature-tracker.actions';

export interface SeaCreatureTrackerState {
  seaCreatures: { [key: number]: Creature };
  encoded: string;
}

const initialState: SeaCreatureTrackerState = {
  seaCreatures: SEA_CREATURE_DATA,
  encoded: getDefaultEncoding([TrackerCategory.SEA_CREATURE_COLLECTION]),
};

export const selectSeaCreatureTrackerState = (state: AppState) =>
  state.seaCreatureTrackerState;

export const selectSeaCreatures = createSelector(
  selectSeaCreatureTrackerState,
  (state: SeaCreatureTrackerState) => state.seaCreatures
);

// TODO: genericise for use with any modelable collection state
const getEncodedState = (seaCreatures: { [key: number]: Creature }): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  Object.keys(seaCreatures).forEach((key) => {
    seaCreatures[key].collected ? collected.push(+key) : uncollected.push(+key);
    sessionData[TrackerCategory.SEA_CREATURE_COLLECTION] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
  });
  return encodeSessionData(sessionData);
};

const _seaCreatureTrackerReducer: ActionReducer<
  SeaCreatureTrackerState,
  Action
> = createReducer(
  initialState,
  on(toggleSeaCreatureCollectedAction, (state, { creature }) => {
    const updated = {
      ...state,
      seaCreatures: {
        ...state.seaCreatures,
        [creature.index]: {
          ...state.seaCreatures[creature.index],
          collected: !state.seaCreatures[creature.index].collected,
        },
      },
    } as SeaCreatureTrackerState;
    updated.encoded = getEncodedState(updated.seaCreatures);
    return updated;
  }),
  on(updateSeaCreatureCollectionStateFromSessionAction, (state, { data }) =>
    getUpdatedSeaCreatureStateForProperty(state, data, 'collected')
  )
);

export function getUpdatedSeaCreatureStateForProperty(
  state: SeaCreatureTrackerState,
  data: SessionCategoryData,
  propName: string
): SeaCreatureTrackerState {
  const updated = JSON.parse(JSON.stringify(state)) as SeaCreatureTrackerState;
  for (const key of Object.keys(state.seaCreatures)) {
    updated.seaCreatures[key] = {
      ...state.seaCreatures[key],
    } as Creature;
    updated.seaCreatures[key][propName] = data.inclusive
      ? data.indices.indexOf(+key) > -1
      : data.indices.indexOf(+key) < 0;
  }
  updated.encoded = getEncodedState(updated.seaCreatures);
  return updated;
}

export function seaCreatureTrackerReducer(
  state,
  action
): SeaCreatureTrackerState {
  return _seaCreatureTrackerReducer(state, action);
}
