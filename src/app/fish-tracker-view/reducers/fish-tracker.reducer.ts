import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { FISH_DATA } from '../../shared/models/constants';
import {
  TrackerCategory,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  getDefaultEncoding,
  encodeSessionData,
} from '../../shared/services/collection-encoding.service';
import { FishTrackerActions } from '../actions';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import {
  Collectible,
  COLLECTIBLE_KEY_COLLECTED,
  COLLECTIBLE_KEY_HAVE_MODEL,
  COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
  CardStyle,
} from '../../shared/models/collectible.model';

const initialState: CollectibleTrackerState = {
  collectibles: FISH_DATA,
  encoded: getDefaultEncoding([
    TrackerCategory.FISH_COLLECTION,
    TrackerCategory.FISH_MODELS,
    TrackerCategory.FISH_MODEL_SUPPLIES,
  ]),
  cardStyle: CardStyle.DETAILS,
};

// TODO: genericise for use with any modelable collection state
const getEncodedState = (collectibles: {
  [key: number]: Collectible;
}): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  const haveModels = new Array<number>();
  const missingModels = new Array<number>();
  const haveModelSupplies = new Array<number>();
  const missingModelSupplies = new Array<number>();
  Object.keys(collectibles).forEach((key) => {
    collectibles[key].collected ? collected.push(+key) : uncollected.push(+key);
    collectibles[key].haveModel
      ? haveModels.push(+key)
      : missingModels.push(+key);
    collectibles[key].haveModelSupplies
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
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(FishTrackerActions.toggleFishCollectedAction, (state, { collectible }) => {
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
  }),
  on(
    FishTrackerActions.toggleFishModelObtainedAction,
    (state, { collectible }) => {
      const updated = {
        ...state,
        collectibles: {
          ...state.collectibles,
          [collectible.index]: {
            ...state.collectibles[collectible.index],
            haveModel: !state.collectibles[collectible.index].haveModel,
          },
        },
      } as CollectibleTrackerState;
      updated.encoded = getEncodedState(updated.collectibles);
      return updated;
    }
  ),
  on(
    FishTrackerActions.toggleHaveFishModelSuppliesAction,
    (state, { collectible }) => {
      const updated = {
        ...state,
        collectibles: {
          ...state.collectibles,
          [collectible.index]: {
            ...state.collectibles[collectible.index],
            haveModelSupplies: !state.collectibles[collectible.index]
              .haveModelSupplies,
          },
        },
      } as CollectibleTrackerState;
      updated.encoded = getEncodedState(updated.collectibles);
      return updated;
    }
  ),
  on(
    FishTrackerActions.updateFishCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedFishStateForProperty(state, data, COLLECTIBLE_KEY_COLLECTED)
  ),
  on(
    FishTrackerActions.updateFishModelStateFromSessionAction,
    (state, { data }) =>
      getUpdatedFishStateForProperty(state, data, COLLECTIBLE_KEY_HAVE_MODEL)
  ),
  on(
    FishTrackerActions.updateHaveFishModelSuppliesStateFromSessionAction,
    (state, { data }) =>
      getUpdatedFishStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES
      )
  ),
  on(FishTrackerActions.setFishCardStyleAction, (state, { cardStyle }) => {
    return {
      ...state,
      cardStyle,
    };
  })
);

export function getUpdatedFishStateForProperty(
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

export function fishTrackerReducer(state, action): CollectibleTrackerState {
  return _fishTrackerReducer(state, action);
}
