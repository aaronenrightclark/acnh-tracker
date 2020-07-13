import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import { Creature } from '../../shared/models/collectible.model';
import { FISH_DATA } from '../../shared/models/constants';
import {
  AppState,
  TrackerCategory,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  getDefaultEncoding,
  encodeSessionData,
} from '../../shared/services/collection-encoding.service';
import { FishTrackerActions } from '../actions';

export interface FishTrackerState {
  fish: { [key: string]: Creature };
  encoded: string;
}

const initialState: FishTrackerState = {
  fish: FISH_DATA,
  encoded: getDefaultEncoding([
    TrackerCategory.FISH_COLLECTION,
    TrackerCategory.FISH_MODELS,
    TrackerCategory.FISH_MODEL_SUPPLIES,
  ]),
};

export const selectFishTrackerState = (state: AppState) =>
  state.fishTrackerState;

export const selectFish = createSelector(
  selectFishTrackerState,
  (state: FishTrackerState) => state.fish
);

// TODO: genericise for use with any modelable collection state
const getEncodedState = (fish: { [key: number]: Creature }): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  const haveModels = new Array<number>();
  const missingModels = new Array<number>();
  const haveModelSupplies = new Array<number>();
  const missingModelSupplies = new Array<number>();
  Object.keys(fish).forEach((key) => {
    fish[key].collected ? collected.push(+key) : uncollected.push(+key);
    fish[key].haveModel ? haveModels.push(+key) : missingModels.push(+key);
    fish[key].haveModelSupplies
      ? haveModelSupplies.push(+key)
      : missingModelSupplies.push(+key);
    sessionData[TrackerCategory.FISH_COLLECTION] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
    sessionData[TrackerCategory.FISH_MODELS] = {
      inclusive: haveModels.length <= missingModels.length,
      indices:
        haveModels.length <= missingModels.length ? haveModels : missingModels,
    };
    sessionData[TrackerCategory.FISH_MODEL_SUPPLIES] = {
      inclusive: haveModelSupplies.length <= missingModelSupplies.length,
      indices:
        haveModelSupplies.length <= missingModelSupplies.length
          ? haveModelSupplies
          : missingModelSupplies,
    };
  });
  return encodeSessionData(sessionData);
};

const _fishTrackerReducer: ActionReducer<
  FishTrackerState,
  Action
> = createReducer(
  initialState,
  on(FishTrackerActions.toggleFishCollectedAction, (state, { fish }) => {
    const updated = {
      ...state,
      fish: {
        ...state.fish,
        [fish.index]: {
          ...state.fish[fish.index],
          collected: !state.fish[fish.index].collected,
        },
      },
    } as FishTrackerState;
    updated.encoded = getEncodedState(updated.fish);
    return updated;
  }),
  on(FishTrackerActions.toggleFishModelObtainedAction, (state, { fish }) => {
    const updated = {
      ...state,
      fish: {
        ...state.fish,
        [fish.index]: {
          ...state.fish[fish.index],
          haveModel: !state.fish[fish.index].haveModel,
        },
      },
    } as FishTrackerState;
    updated.encoded = getEncodedState(updated.fish);
    return updated;
  }),
  on(
    FishTrackerActions.toggleHaveFishModelSuppliesAction,
    (state, { fish }) => {
      const updated = {
        ...state,
        fish: {
          ...state.fish,
          [fish.index]: {
            ...state.fish[fish.index],
            haveModelSupplies: !state.fish[fish.index].haveModelSupplies,
          },
        },
      } as FishTrackerState;
      updated.encoded = getEncodedState(updated.fish);
      return updated;
    }
  ),
  on(
    FishTrackerActions.updateFishCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedFishStateForProperty(state, data, 'collected')
  ),
  on(
    FishTrackerActions.updateFishModelStateFromSessionAction,
    (state, { data }) =>
      getUpdatedFishStateForProperty(state, data, 'haveModel')
  ),
  on(
    FishTrackerActions.updateHaveFishModelSuppliesStateFromSessionAction,
    (state, { data }) =>
      getUpdatedFishStateForProperty(state, data, 'haveModelSupplies')
  )
);

export function getUpdatedFishStateForProperty(
  state: FishTrackerState,
  data: SessionCategoryData,
  propName: string
): FishTrackerState {
  const updated = JSON.parse(JSON.stringify(state)) as FishTrackerState;
  for (const key of Object.keys(state.fish)) {
    updated.fish[key] = {
      ...state.fish[key],
    } as Creature;
    updated.fish[key][propName] = data.inclusive
      ? data.indices.indexOf(+key) > -1
      : data.indices.indexOf(+key) < 0;
  }
  updated.encoded = getEncodedState(updated.fish);
  return updated;
}

export function fishTrackerReducer(state, action): FishTrackerState {
  return _fishTrackerReducer(state, action);
}
