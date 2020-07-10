import { createAction, props } from '@ngrx/store';
import { Song } from '../../shared/models/collectible.model';

export const toggleSongCollectedAction = createAction(
  '[Song Tracker] Toggle Collected',
  props<{ song: Song }>()
);
