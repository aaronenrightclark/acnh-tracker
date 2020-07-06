import { createAction, props } from '@ngrx/store';
import { Critter } from '../../shared/models/critter.model';

export const markBugCollected = createAction(
  '[Bug Tracker] Mark Collected',
  props<{ critter: Critter }>()
);
export const markBugModelObtained = createAction(
  '[Bug Tracker] Mark Model Obtained',
  props<{ critter: Critter }>()
);
