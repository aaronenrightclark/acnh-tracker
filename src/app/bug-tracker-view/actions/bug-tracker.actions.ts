import { createAction, props } from '@ngrx/store';
import { Critter } from '../../shared/models/critter.model';

export const toggleBugCollectedAction = createAction(
  '[Bug Tracker] Toggle Collected',
  props<{ critter: Critter }>()
);
export const toggleBugModelObtainedAction = createAction(
  '[Bug Tracker] Toggle Model Obtained',
  props<{ critter: Critter }>()
);
