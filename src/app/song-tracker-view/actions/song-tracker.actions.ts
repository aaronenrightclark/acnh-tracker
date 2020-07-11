import { createAction, props } from '@ngrx/store';
import { Song } from '../../shared/models/collectible.model';
import { SessionCategoryData } from '../../shared/models/app-state.model';

export const toggleSongCollectedAction = createAction(
  '[Song Tracker] Toggle Collected',
  props<{ song: Song }>()
);
export const updateSongCollectionStateFromSessionAction = createAction(
  '[Song Tracker] Update Collection State from Session',
  props<{ data: SessionCategoryData }>()
);
