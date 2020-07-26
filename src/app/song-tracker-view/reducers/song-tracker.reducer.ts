import {
  COLLECTIBLE_KEY_COLLECTED,
  CardStyle,
} from '../../shared/models/collectible.model';
import { SONG_DATA } from '../../shared/models/constants';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import { TrackerCategory } from '../../shared/models/app-state.model';
import { getDefaultEncoding } from '../../shared/services/collection-encoding.service';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { SongTrackerActions } from '../actions';
import {
  getUpdatedCollectibleStateForProperty,
  getUpdatedStateForCollectibleToggle,
} from '../../shared/helpers/reducer.helper';

const initialState: CollectibleTrackerState = {
  collectibles: SONG_DATA,
  encoded: getDefaultEncoding([TrackerCategory.SONGS]),
  cardStyle: CardStyle.DETAILS,
};

const defaultEncodingOptions = {
  collection: TrackerCategory.SEA_CREATURE_COLLECTION,
};

const songTrackerReducer: ActionReducer<
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(SongTrackerActions.toggleSongCollectedAction, (state, { collectible }) => {
    return getUpdatedStateForCollectibleToggle(
      state,
      collectible,
      COLLECTIBLE_KEY_COLLECTED,
      defaultEncodingOptions
    );
  }),
  on(
    SongTrackerActions.updateSongCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedCollectibleStateForProperty(
        state,
        data,
        COLLECTIBLE_KEY_COLLECTED,
        defaultEncodingOptions
      )
  ),
  on(SongTrackerActions.setSongCardStyleAction, (state, { cardStyle }) => {
    return {
      ...state,
      cardStyle,
    };
  })
);

export function reducer(state, action): CollectibleTrackerState {
  return songTrackerReducer(state, action);
}
