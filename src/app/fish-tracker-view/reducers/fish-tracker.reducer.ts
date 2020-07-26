import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { FISH_DATA } from '../../shared/models/constants';
import { TrackerCategory } from '../../shared/models/app-state.model';
import { getDefaultEncoding } from '../../shared/services/collection-encoding.service';
import { FishTrackerActions } from '../actions';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import {
  getUpdatedStateForCollectibleToggle,
  getUpdatedCollectibleStateForProperty,
} from '../../shared/helpers/reducer.helper';
import {
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

const defaultEncodingOptions = {
  collection: TrackerCategory.FISH_COLLECTION,
  models: TrackerCategory.FISH_MODELS,
  modelSupplies: TrackerCategory.FISH_MODEL_SUPPLIES,
};

const fishTrackerReducer: ActionReducer<
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(FishTrackerActions.toggleFishCollectedAction, (state, { collectible }) => {
    return getUpdatedStateForCollectibleToggle(
      state,
      collectible,
      COLLECTIBLE_KEY_COLLECTED,
      defaultEncodingOptions
    );
  }),
  on(
    FishTrackerActions.toggleFishModelObtainedAction,
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
    FishTrackerActions.toggleHaveFishModelSuppliesAction,
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
    FishTrackerActions.updateFishCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_COLLECTED,
        defaultEncodingOptions
      )
  ),
  on(
    FishTrackerActions.updateFishModelStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_HAVE_MODEL,
        defaultEncodingOptions
      )
  ),
  on(
    FishTrackerActions.updateHaveFishModelSuppliesStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
        defaultEncodingOptions
      )
  ),
  on(FishTrackerActions.setFishCardStyleAction, (state, { cardStyle }) => {
    return {
      ...state,
      cardStyle,
    };
  })
);

export function reducer(state, action): CollectibleTrackerState {
  return fishTrackerReducer(state, action);
}
