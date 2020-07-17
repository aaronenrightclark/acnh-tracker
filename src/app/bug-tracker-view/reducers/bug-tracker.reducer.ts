import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import { BUG_DATA } from '../../shared/models/constants';
import {
  COLLECTIBLE_KEY_COLLECTED,
  COLLECTIBLE_KEY_HAVE_MODEL,
  COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
  CardStyle,
} from '../../shared/models/collectible.model';
import {
  AppState,
  TrackerCategory,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  getDefaultEncoding,
  encodeSessionData,
} from '../../shared/services/collection-encoding.service';
import { BugTrackerActions } from '../actions';
import {
  getEncodedCollectibleState,
  getUpdatedCollectibleStateForProperty,
} from '../../shared/helpers/reducer.helper';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import { Collectible } from '../../shared/models/collectible.model';

const initialState: CollectibleTrackerState = {
  collectibles: BUG_DATA,
  encoded: getDefaultEncoding([
    TrackerCategory.BUG_COLLECTION,
    TrackerCategory.BUG_MODELS,
    TrackerCategory.BUG_MODEL_SUPPLIES,
  ]),
  cardStyle: CardStyle.DETAILS,
};

export const selectBugTrackerState = (state: AppState) => state.bugTrackerState;

export const selectBugs = createSelector(
  selectBugTrackerState,
  (state: CollectibleTrackerState) => state.collectibles
);

export const selectBugCardStyle = createSelector(
  selectBugTrackerState,
  (state: CollectibleTrackerState) => state.cardStyle
);

// TODO: genericise for use with any modelable collection state
const getEncodedState = (bugs: { [key: number]: Collectible }): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  const haveModels = new Array<number>();
  const missingModels = new Array<number>();
  const haveModelSupplies = new Array<number>();
  const missingModelSupplies = new Array<number>();
  Object.keys(bugs).forEach((key) => {
    bugs[key].collected ? collected.push(+key) : uncollected.push(+key);
    bugs[key].haveModel ? haveModels.push(+key) : missingModels.push(+key);
    bugs[key].haveModelSupplies
      ? haveModelSupplies.push(+key)
      : missingModelSupplies.push(+key);
    sessionData[TrackerCategory.BUG_COLLECTION] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
    sessionData[TrackerCategory.BUG_MODELS] = {
      inclusive: haveModels.length <= missingModels.length,
      indices:
        haveModels.length <= missingModels.length ? haveModels : missingModels,
    };
    sessionData[TrackerCategory.BUG_MODEL_SUPPLIES] = {
      inclusive: haveModelSupplies.length <= missingModelSupplies.length,
      indices:
        haveModelSupplies.length <= missingModelSupplies.length
          ? haveModelSupplies
          : missingModelSupplies,
    };
  });
  return encodeSessionData(sessionData);
};

const _bugTrackerReducer: ActionReducer<
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(BugTrackerActions.toggleBugCollectedAction, (state, { collectible }) => {
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
    updated.encoded = getEncodedCollectibleState(updated.collectibles, {
      collection: TrackerCategory.BUG_COLLECTION,
      models: TrackerCategory.BUG_MODELS,
      modelSupplies: TrackerCategory.BUG_MODEL_SUPPLIES,
    });
    return updated;
  }),
  on(
    BugTrackerActions.toggleBugModelObtainedAction,
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
      updated.encoded = getEncodedCollectibleState(updated.collectibles, {
        collection: TrackerCategory.BUG_COLLECTION,
        models: TrackerCategory.BUG_MODELS,
        modelSupplies: TrackerCategory.BUG_MODEL_SUPPLIES,
      });
      return updated;
    }
  ),
  on(
    BugTrackerActions.toggleHaveBugModelSuppliesAction,
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
      updated.encoded = getEncodedCollectibleState(updated.collectibles, {
        collection: TrackerCategory.BUG_COLLECTION,
        models: TrackerCategory.BUG_MODELS,
        modelSupplies: TrackerCategory.BUG_MODEL_SUPPLIES,
      });
      return updated;
    }
  ),
  on(
    BugTrackerActions.updateBugCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedBugStateForProperty(state, data, COLLECTIBLE_KEY_COLLECTED)
  ),
  on(
    BugTrackerActions.updateBugModelStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_HAVE_MODEL,
        {
          collection: TrackerCategory.BUG_COLLECTION,
          models: TrackerCategory.BUG_MODELS,
          modelSupplies: TrackerCategory.BUG_MODEL_SUPPLIES,
        }
      )
  ),
  on(
    BugTrackerActions.updateHaveBugModelSuppliesStateFromSessionAction,
    (state, { data }) =>
      getUpdatedBugStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES
      )
  ),
  on(BugTrackerActions.setBugCardStyleAction, (state, { cardStyle }) => {
    return {
      ...state,
      cardStyle,
    };
  })
);

export function getUpdatedBugStateForProperty(
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

export function bugTrackerReducer(state, action): CollectibleTrackerState {
  return _bugTrackerReducer(state, action);
}
