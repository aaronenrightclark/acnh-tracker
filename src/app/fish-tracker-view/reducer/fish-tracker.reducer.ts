import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import { Critter } from '../../shared/models/critter.model';
import { FISH_DATA } from '../../shared/models/constants';
import {
  AppState,
  TrackerCategory,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  toggleFishCollectedAction,
  toggleFishModelObtainedAction,
  toggleHaveFishModelSuppliesAction,
  updateFishCollectionStateFromSessionAction,
  updateFishModelStateFromSessionAction,
  updateHaveFishModelSuppliesStateFromSessionAction,
} from '../actions/fish-tracker.actions';
import {
  getDefaultEncoding,
  encodeSessionData,
} from '../../shared/services/collection-encoding.service';

export interface FishTrackerState {
  fish: { [key: string]: Critter };
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
const getEncodedState = (fish: { [key: number]: Critter }): string => {
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
  on(toggleFishCollectedAction, (state, { critter }) => {
    console.log('toggling fish collected: ' + JSON.stringify(critter));
    const updated = {
      ...state,
      fish: {
        ...state.fish,
        [critter.index]: {
          ...state.fish[critter.index],
          collected: !state.fish[critter.index].collected,
        },
      },
    } as FishTrackerState;
    updated.encoded = getEncodedState(updated.fish);
    return updated;
  }),
  on(toggleFishModelObtainedAction, (state, { critter }) => {
    console.log('toggling fish model obtained: ' + JSON.stringify(critter));
    const updated = {
      ...state,
      fish: {
        ...state.fish,
        [critter.index]: {
          ...state.fish[critter.index],
          haveModel: !state.fish[critter.index].haveModel,
        },
      },
    } as FishTrackerState;
    updated.encoded = getEncodedState(updated.fish);
    return updated;
  }),
  on(toggleHaveFishModelSuppliesAction, (state, { critter }) => {
    console.log(
      'toggling have fish model supplies: ' + JSON.stringify(critter)
    );
    const updated = {
      ...state,
      fish: {
        ...state.fish,
        [critter.index]: {
          ...state.fish[critter.index],
          haveModelSupplies: !state.fish[critter.index].haveModelSupplies,
        },
      },
    } as FishTrackerState;
    updated.encoded = getEncodedState(updated.fish);
    return updated;
  }),
  on(
    updateFishCollectionStateFromSessionAction,
    (state, { fishCollectionData }) =>
      getUpdatedFishStateForProperty(state, fishCollectionData, 'collected')
  ),
  on(updateFishModelStateFromSessionAction, (state, { fishModelData }) =>
    getUpdatedFishStateForProperty(state, fishModelData, 'haveModel')
  ),
  on(
    updateHaveFishModelSuppliesStateFromSessionAction,
    (state, { haveFishSuppliesData }) =>
      getUpdatedFishStateForProperty(
        state,
        haveFishSuppliesData,
        'haveModelSupplies'
      )
  )
);

export function getUpdatedFishStateForProperty(
  state: FishTrackerState,
  data: SessionCategoryData,
  propName: string
): FishTrackerState {
  console.log(
    `updating ${propName} state from session data: ` + JSON.stringify(data)
  );
  const updated = JSON.parse(JSON.stringify(state)) as FishTrackerState;
  for (const key of Object.keys(state.fish)) {
    updated.fish[key] = {
      ...state.fish[key],
    } as Critter;
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
