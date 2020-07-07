import { BugTrackerState } from '../../bug-tracker-view/reducer/bug-tracker.reducer';
import { SongTrackerState } from '../../song-tracker-view/reducers/song-tracker.reducer';
import { FishTrackerState } from '../../fish-tracker-view/reducer/fish-tracker.reducer';

export interface AppState {
  bugTrackerState: BugTrackerState;
  fishTrackerState: FishTrackerState;
  songTrackerState: SongTrackerState;
}
