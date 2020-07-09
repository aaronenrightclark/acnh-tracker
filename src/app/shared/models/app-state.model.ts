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
  BUG_MODEL_SUPPLIES,
  FISH_COLLECTION,
  FISH_MODELS,
  FISH_MODEL_SUPPLIES,
  SONGS,
  SEA_CREATURE_COLLECTION,
  SEA_CREATURE_MODELS,
  SEA_CREATURE_SUPPLIES,
}

export interface SessionCategoryData {
  inclusive: boolean;
  indices: number[];
}

export type SessionData = {
  [key in TrackerCategory]?: SessionCategoryData;
};
