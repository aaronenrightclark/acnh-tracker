import { BugTrackerState } from '../../bug-tracker-view/reducer/bug-tracker.reducer';
import { SongTrackerState } from '../../song-tracker-view/reducers/song-tracker.reducer';
import { FishTrackerState } from '../../fish-tracker-view/reducer/fish-tracker.reducer';

export interface AppState {
  bugTrackerState: BugTrackerState;
  fishTrackerState: FishTrackerState;
  songTrackerState: SongTrackerState;
}

export enum TrackerCategory {
  BUG_COLLECTION,
  BUG_MODELS,
  FISH_COLLECTION,
  FISH_MODELS,
  SONGS,
}

export interface SessionCategoryData {
  inclusive: boolean;
  indices: number[];
}

export type SessionData = {
  [key in TrackerCategory]?: SessionCategoryData;
};
