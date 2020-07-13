import { createAction, props } from '@ngrx/store';
import { Hemisphere } from '../models/app-state.model';

export const setHemisphereToggleValue = createAction(
  '[Shared] Set Hemisphere Toggle',
  props<{ hemisphere: Hemisphere }>()
);
