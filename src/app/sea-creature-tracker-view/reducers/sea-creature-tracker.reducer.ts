import { SEA_CREATURE_DATA } from '../../shared/models/constants';
import {
  COLLECTIBLE_KEY_COLLECTED,
  CardStyle,
} from '../../shared/models/collectible.model';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import { getDefaultEncoding } from '../../shared/services/collection-encoding.service';
import { TrackerCategory } from '../../shared/models/app-state.model';
import { ActionReducer, Action, createReducer, on } from '@ngrx/store';
import { SeaCreatureTrackerActions } from '../actions';
import {
  getUpdatedStateForCollectibleToggle,
  getUpdatedCollectibleStateForProperty,
} from '../../shared/helpers/reducer.helper';

const initialState: CollectibleTrackerState = {
  collectibles: SEA_CREATURE_DATA,
  encoded: getDefaultEncoding([TrackerCategory.SEA_CREATURE_COLLECTION]),
  cardStyle: CardStyle.DETAILS,
};

const defaultEncodingOptions = {
  collection: TrackerCategory.SEA_CREATURE_COLLECTION,
};

const seaCreatureTrackerReducer: ActionReducer<
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(
    SeaCreatureTrackerActions.toggleSeaCreatureCollectedAction,
    (state, { collectible }) => {
      return getUpdatedStateForCollectibleToggle(
        state,
        collectible,
        COLLECTIBLE_KEY_COLLECTED,
        defaultEncodingOptions
      );
    }
  ),
  on(
    SeaCreatureTrackerActions.updateSeaCreatureCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_COLLECTED,
        defaultEncodingOptions
      )
  ),
  on(
    SeaCreatureTrackerActions.setSeaCreatureCardStyleAction,
    (state, { cardStyle }) => {
      return {
        ...state,
        cardStyle,
      };
    }
  )
);

export function reducer(state, action): CollectibleTrackerState {
  return seaCreatureTrackerReducer(state, action);
}
