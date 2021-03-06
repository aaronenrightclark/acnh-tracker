export const COLLECTIBLE_KEY_COLLECTED = 'collected';
export const COLLECTIBLE_KEY_HAVE_MODEL = 'haveModel';
export const COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES = 'haveModelSupplies';

export interface Collectible {
  index: number;
  name: string;
  price: number;
  type: CollectibleType;
  [COLLECTIBLE_KEY_COLLECTED]: boolean;
  [COLLECTIBLE_KEY_HAVE_MODEL]?: boolean;
  [COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES]?: boolean;
  monthsActive?: ActivityWindow[]; // empty signifies all-year activity
  timesActive?: ActivityWindow[]; // empty signifies all-day activity
  location?: BugLocation[] | FishLocation[];
  size?: SilhouetteSize;
  swimStyle?: SwimStyle;
  notes?: string;
  playerNotes?: number;
  mood?: SongMood;
}

export interface ActivityWindow {
  start: number;
  end: number;
}

export enum SwimStyle {
  STATIONARY,
  SLOW_SHORT,
  SLOW_LONG,
  SLOW_CONSISTENT,
  MODERATE_SHORT,
  MODERATE_LONG,
  MODERATE_CONSISTENT,
  FAST_SHORT,
  FAST_LONG,
  FAST_CONSISTENT,
}

export enum SongMood {
  GRUMPY,
  LAID_BACK,
  REQUEST,
  GOOD,
  BLUE,
  HARD_TO_SAY,
  CHEERFUL_UPBEAT,
}

export enum BugLocation {
  UNDERGROUND,
  GROUND,
  FLYING,
  FLOWER,
  SHRUB,
  ROCK,
  TREE_TRUNK,
  TREE_COCONUT,
  TREE_STUMP,
  TREE_SHAKE,
  WATER_POND,
  WATER_RIVER,
  TRASH,
  ROTTEN_FOOD,
  VILLAGER,
  BEACH,
}

export enum FishLocation {
  SEA,
  PIER,
  SEA_RAINY,
  RIVER,
  RIVER_CLIFF,
  RIVER_MOUTH,
  POND,
  POND_CLIFF,
}

export enum SilhouetteSize {
  SMALLEST,
  SMALL,
  MEDIUM,
  LARGE,
  LARGE_FIN,
  EXTRA_LARGE,
  LARGEST,
  LARGEST_FIN,
  NARROW,
}

export enum CollectibleType {
  BUG,
  FISH,
  SEA_CREATURE,
  SONG,
}

export enum CollectionSubset {
  ALL,
  COLLECTED,
  UNCOLLECTED,
}

export enum CardStyle {
  SMALL,
  DETAILS,
}
