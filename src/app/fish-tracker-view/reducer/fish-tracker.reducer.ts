import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import { Critter } from '../../shared/models/critter.model';
import { FISH_DATA } from '../../shared/models/constants';
import { AppState } from '../../shared/models/app-state.model';
import { toggleFishCollected } from '../actions/fish-tracker.actions';

export interface FishTrackerState {
  fish: { [key: string]: Critter };
}

const initialState: FishTrackerState = {
  fish: FISH_DATA,
};

export const selectFishTrackerState = (state: AppState) =>
  state.fishTrackerState;

export const selectFish = createSelector(
  selectFishTrackerState,
  (state: FishTrackerState) => state.fish
);

const _fishTrackerReducer: ActionReducer<
  FishTrackerState,
  Action
> = createReducer(
  initialState,
  on(toggleFishCollected, (state, { critter }) => {
    console.log('toggling fish collected: ' + JSON.stringify(critter));
    return {
      ...state,
      bugs: {
        ...state.fish,
        [critter.index]: {
          ...state.fish[critter.index],
          collected: !state.fish[critter.index].collected,
        },
      },
    };
  })
);

export function fishTrackerReducer(state, action): FishTrackerState {
  return _fishTrackerReducer(state, action);
}
