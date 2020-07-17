import {
  Collectible,
  COLLECTIBLE_KEY_COLLECTED,
  CardStyle,
} from '../../shared/models/collectible.model';
import { SONG_DATA } from '../../shared/models/constants';
import { CollectibleTrackerState } from '../../shared/models/app-state.model';
import {
  AppState,
  TrackerCategory,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  getDefaultEncoding,
  encodeSessionData,
} from '../../shared/services/collection-encoding.service';
import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import { SongTrackerActions } from '../actions';
import { getEncodedCollectibleState } from '../../shared/helpers/reducer.helper';

const initialState: CollectibleTrackerState = {
  collectibles: SONG_DATA,
  encoded: getDefaultEncoding([TrackerCategory.SONGS]),
  cardStyle: CardStyle.DETAILS,
};

export const selectSongTrackerState = (state: AppState) =>
  state.songTrackerState;

export const selectSongs = createSelector(
  selectSongTrackerState,
  (state: CollectibleTrackerState) => state.collectibles
);

export const selectSongCardStyle = createSelector(
  selectSongTrackerState,
  (state: CollectibleTrackerState) => state.cardStyle
);

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
    sessionData[TrackerCategory.SONGS] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
  });
  return encodeSessionData(sessionData);
};

const _songTrackerReducer: ActionReducer<
  CollectibleTrackerState,
  Action
> = createReducer(
  initialState,
  on(SongTrackerActions.toggleSongCollectedAction, (state, { collectible }) => {
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
      collection: TrackerCategory.SONGS,
    });
    return updated;
  }),
  on(
    SongTrackerActions.updateSongCollectionStateFromSessionAction,
    (state, { data }) =>
      getUpdatedSongStateForProperty(state, data, COLLECTIBLE_KEY_COLLECTED)
  ),
  on(SongTrackerActions.setSongCardStyleAction, (state, { cardStyle }) => {
    return {
      ...state,
      cardStyle,
    };
  })
);

export function getUpdatedSongStateForProperty(
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

export function songTrackerReducer(state, action): CollectibleTrackerState {
  return _songTrackerReducer(state, action);
}
