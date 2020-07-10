import { Song } from '../../shared/models/collectible.model';
import { SONG_DATA } from '../../shared/models/constants';
import { AppState } from '../../shared/models/app-state.model';
import { toggleSongCollectedAction } from '../actions/song-tracker.actions';
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
  encoded: '',
};

export const selectSongTrackerState = (state: AppState) =>
  state.songTrackerState;

export const selectSongs = createSelector(
  selectSongTrackerState,
  (state: SongTrackerState) => state.songs
);

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
  })
);

export function songTrackerReducer(state, action): SongTrackerState {
  return _songTrackerReducer(state, action);
}
