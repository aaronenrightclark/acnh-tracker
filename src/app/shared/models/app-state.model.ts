import { SharedTrackerState } from '../reducers/shared.reducer';
import { Collectible, CollectionSubset, CardStyle } from './collectible.model';
import { CollectionStatusFilterType } from './filter.model';
import { InjectionToken } from '@angular/core';

export const TRACKER_KEY = new InjectionToken<CollectibleTrackerKey>(
  'TRACKER_KEY'
);
export const TRACKER_STATE_KEY = new InjectionToken<CollectibleTrackerStateKey>(
  'TRACKER_STATE_KEY'
);
export const TRACKER_FILTER_STATE_KEY = new InjectionToken<
  CollectibleTrackerFilterStateKey
>('TRACKER_FILTER_STATE_KEY');

export interface CollectibleTrackerState {
  collectibles: { [key: string]: Collectible };
  encoded: string;
  cardStyle: CardStyle;
}

export interface CollectibleTrackerFilters {
  partialName: string;
  [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset;
  [CollectionStatusFilterType.MODEL]?: CollectionSubset;
  [CollectionStatusFilterType.MODEL_SUPPLIES]?: CollectionSubset;
}

export interface CollectibleTrackerFilterState {
  filters: CollectibleTrackerFilters;
}

export enum CollectibleTrackerKey {
  BUGS = 'bugTracker',
  FISH = 'fishTracker',
  SEA_CREATURES = 'seaCreatureTracker',
  SONGS = 'songTracker',
}

export enum CollectibleTrackerStateKey {
  BUGS = 'bugTrackerState',
  FISH = 'fishTrackerState',
  SEA_CREATURES = 'seaCreatureTrackerState',
  SONGS = 'songTrackerState',
}

export enum CollectibleTrackerFilterStateKey {
  BUGS = 'bugTrackerFilterState',
  FISH = 'fishTrackerFilterState',
  SEA_CREATURES = 'seaCreatureTrackerFilterState',
  SONGS = 'songTrackerFilterState',
}

export interface CollectibleTrackerModel {
  trackerState: CollectibleTrackerState;
  trackerFilterState: CollectibleTrackerFilterState;
}

export interface AppState {
  [CollectibleTrackerKey.BUGS]: CollectibleTrackerModel;
  [CollectibleTrackerKey.FISH]: CollectibleTrackerModel;
  [CollectibleTrackerKey.SEA_CREATURES]: CollectibleTrackerModel;
  [CollectibleTrackerKey.SONGS]: CollectibleTrackerModel;
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
