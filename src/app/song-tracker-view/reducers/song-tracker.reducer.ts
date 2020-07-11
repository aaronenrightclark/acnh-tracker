import { Song, Collectible } from '../../shared/models/collectible.model';
import { SONG_DATA } from '../../shared/models/constants';
import {
  AppState,
  TrackerCategory,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  toggleSongCollectedAction,
  updateSongCollectionStateFromSessionAction,
} from '../actions/song-tracker.actions';
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

export interface SongTrackerState {
  songs: {
    [key: number]: Song;
  };
  encoded: string;
}

const initialState: SongTrackerState = {
  songs: SONG_DATA,
  encoded: getDefaultEncoding([TrackerCategory.SONGS]),
};

export const selectSongTrackerState = (state: AppState) =>
  state.songTrackerState;

export const selectSongs = createSelector(
  selectSongTrackerState,
  (state: SongTrackerState) => state.songs
);

// TODO: genericise for use with any collection state
const getEncodedState = (bugs: { [key: number]: Collectible }): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  Object.keys(bugs).forEach((key) => {
    bugs[key].collected ? collected.push(+key) : uncollected.push(+key);
    sessionData[TrackerCategory.SONGS] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
  });
  return encodeSessionData(sessionData);
};

const _songTrackerReducer: ActionReducer<
  SongTrackerState,
  Action
> = createReducer(
  initialState,
  on(toggleSongCollectedAction, (state, { song }) => {
    console.log('toggling song collected: ' + JSON.stringify(song));
    return {
      ...state,
      songs: {
        ...state.songs,
        [song.index]: {
          ...state.songs[song.index],
          collected: !state.songs[song.index].collected,
        },
      },
    };
  }),
  on(updateSongCollectionStateFromSessionAction, (state, { data }) =>
    getUpdatedSongStateForProperty(state, data, 'collected')
  )
);

export function getUpdatedSongStateForProperty(
  state: SongTrackerState,
  data: SessionCategoryData,
  propName: string
): SongTrackerState {
  console.log(
    `updating ${propName} state from session data: ` + JSON.stringify(data)
  );
  const updated = JSON.parse(JSON.stringify(state)) as SongTrackerState;
  for (const key of Object.keys(state.songs)) {
    updated.songs[key] = {
      ...state.songs[key],
    } as Collectible;
    updated.songs[key][propName] = data.inclusive
      ? data.indices.indexOf(+key) > -1
      : data.indices.indexOf(+key) < 0;
  }
  updated.encoded = getEncodedState(updated.songs);
  return updated;
}

export function songTrackerReducer(state, action): SongTrackerState {
  return _songTrackerReducer(state, action);
}
