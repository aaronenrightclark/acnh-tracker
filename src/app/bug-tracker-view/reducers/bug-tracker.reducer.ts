import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { BUG_DATA } from '../../shared/models/constants';
import {
  COLLECTIBLE_KEY_COLLECTED,
  COLLECTIBLE_KEY_HAVE_MODEL,
  COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
  CardStyle,
} from '../../shared/models/collectible.model';
import { TrackerCategory } from '../../shared/models/app-state.model';
import { getDefaultEncoding } from '../../shared/services/collection-encoding.service';
import { BugTrackerActions } from '../actions';
import { getUpdatedCollectibleStateForProperty } from '../../shared/helpers/reducer.helper';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import { getUpdatedStateForCollectibleToggle } from '../../shared/helpers/reducer.helper';

const initialState: CollectibleTrackerState = {
  collectibles: BUG_DATA,
  encoded: getDefaultEncoding([
    TrackerCategory.BUG_COLLECTION,
    TrackerCategory.BUG_MODELS,
    TrackerCategory.BUG_MODEL_SUPPLIES,
  ]),
  cardStyle: CardStyle.DETAILS,
};

const defaultEncodingOptions = {
  collection: TrackerCategory.BUG_COLLECTION,
  models: TrackerCategory.BUG_MODELS,
  modelSupplies: TrackerCategory.BUG_MODEL_SUPPLIES,
};

const bugTrackerReducer: ActionReducer<
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(BugTrackerActions.toggleBugCollectedAction, (state, { collectible }) => {
    return getUpdatedStateForCollectibleToggle(
      state,
      collectible,
      COLLECTIBLE_KEY_COLLECTED,
      defaultEncodingOptions
    );
  }),
  on(
    BugTrackerActions.toggleBugModelObtainedAction,
    (state, { collectible }) => {
      return getUpdatedStateForCollectibleToggle(
        state,
        collectible,
        COLLECTIBLE_KEY_HAVE_MODEL,
        defaultEncodingOptions
      );
    }
  ),
  on(
    BugTrackerActions.toggleHaveBugModelSuppliesAction,
    (state, { collectible }) => {
      return getUpdatedStateForCollectibleToggle(
        state,
        collectible,
        COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
        defaultEncodingOptions
      );
    }
  ),
  on(
    BugTrackerActions.updateBugCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_COLLECTED,
        defaultEncodingOptions
      )
  ),
  on(
    BugTrackerActions.updateBugModelStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_HAVE_MODEL,
        defaultEncodingOptions
      )
  ),
  on(
    BugTrackerActions.updateHaveBugModelSuppliesStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
        defaultEncodingOptions
      )
  ),
  on(BugTrackerActions.setBugCardStyleAction, (state, { cardStyle }) => {
    return {
      ...state,
      cardStyle,
    };
  })
);

export function reducer(state, action): CollectibleTrackerState {
  return bugTrackerReducer(state, action);
}
