import { BugTrackerState } from '../../bug-tracker-view/reducers/bug-tracker.reducer';
import { SongTrackerState } from '../../song-tracker-view/reducers/song-tracker.reducer';
import { FishTrackerState } from '../../fish-tracker-view/reducers/fish-tracker.reducer';
import { SeaCreatureTrackerState } from '../../sea-creature-tracker-view/reducers/sea-creature-tracker.reducer';
import { BugTrackerFilterState } from '../../bug-tracker-view/reducers/bug-tracker-filter.reducer';
import { SharedTrackerState } from '../reducers/shared.reducer';
import { FishTrackerFilterState } from '../../fish-tracker-view/reducers/fish-tracker-filter.reducer';

export interface AppState {
  bugTrackerState: BugTrackerState;
  bugTrackerFilterState: BugTrackerFilterState;
  fishTrackerState: FishTrackerState;
  fishTrackerFilterState: FishTrackerFilterState;
  seaCreatureTrackerState: SeaCreatureTrackerState;
  songTrackerState: SongTrackerState;
  sharedTrackerState: SharedTrackerState;
}

export enum TrackerCategory {
  BUG_COLLECTION,
  BUG_MODELS,
  BUG_MODEL_SUPPLIES,
  FISH_COLLECTION,
  FISH_MODELS,
  FISH_MODEL_SUPPLIES,
  SEA_CREATURE_COLLECTION,
  SONGS,
}

export interface SessionCategoryData {
  inclusive: boolean;
  indices: number[];
}

export type SessionData = {
  [key in TrackerCategory]?: SessionCategoryData;
};

export enum Hemisphere {
  NORTH,
  SOUTH,
}
