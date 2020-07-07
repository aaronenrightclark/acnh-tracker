import { createAction, props } from '@ngrx/store';
import { Critter } from '../../shared/models/critter.model';

export const toggleFishCollected = createAction(
  '[Fish Tracker] Toggle Collected',
  props<{ critter: Critter }>()
);
export const toggleFishModelObtained = createAction(
  '[Fish Tracker] Toggle Model Obtained',
  props<{ critter: Critter }>()
);
