import { Hemisphere, AppState } from '../models/app-state.model';
import { createSelector, createReducer, on } from '@ngrx/store';
import { SharedTrackerActions } from '../actions';

export interface SharedTrackerState {
  hemisphere: Hemisphere;
}

export const initialState = {
  hemisphere: Hemisphere.NORTH,
};

export const selectSharedTrackerState = (state: AppState) =>
  state.sharedTrackerState;

export const selectHemisphere = createSelector(
  selectSharedTrackerState,
  (state: SharedTrackerState) => state.hemisphere
);

const _sharedTrackerReducer = createReducer(
  initialState,
  on(SharedTrackerActions.setHemisphereToggleValue, (state, { hemisphere }) => {
    console.log('setting hemisphere: ' + JSON.stringify(hemisphere));
    return {
      ...state,
      hemisphere,
    };
  })
);

export function sharedTrackerReducer(state, action) {
  return _sharedTrackerReducer(state, action);
}
