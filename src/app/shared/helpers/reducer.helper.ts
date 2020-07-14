import { Collectible } from '../models/collectible.model';
import { encodeSessionData } from '../services/collection-encoding.service';
import {
  TrackerCategory,
  CollectibleTrackerState,
  SessionCategoryData,
} from '../models/app-state.model';

export interface StateEncodingOptions {
  collection: TrackerCategory;
  models?: TrackerCategory;
  modelSupplies?: TrackerCategory;
}

export const getEncodedCollectibleState = (
  collectibles: {
    [key: number]: Collectible;
  },
  options: StateEncodingOptions
): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  let haveModels: Array<number>;
  let missingModels: Array<number>;
  if (options.models) {
    haveModels = new Array<number>();
    missingModels = new Array<number>();
  }
  let haveModelSupplies: Array<number>;
  let missingModelSupplies: Array<number>;
  if (options.modelSupplies) {
    haveModelSupplies = new Array<number>();
    missingModelSupplies = new Array<number>();
  }
  Object.keys(collectibles).forEach((key) => {
    collectibles[key].collected ? collected.push(+key) : uncollected.push(+key);
    sessionData[options.collection] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
    if (options.models) {
      collectibles[key].haveModel
        ? haveModels.push(+key)
        : missingModels.push(+key);
      sessionData[options.models] = {
        inclusive: haveModels.length <= missingModels.length,
        indices:
          haveModels.length <= missingModels.length
            ? haveModels
            : missingModels,
      };
    }
    if (options.modelSupplies) {
      collectibles[key].haveModelSupplies
        ? haveModelSupplies.push(+key)
        : missingModelSupplies.push(+key);
      sessionData[options.modelSupplies] = {
        inclusive: haveModelSupplies.length <= missingModelSupplies.length,
        indices:
          haveModelSupplies.length <= missingModelSupplies.length
            ? haveModelSupplies
            : missingModelSupplies,
      };
    }
  });
  return encodeSessionData(sessionData);
};

export function getUpdatedCollectibleStateForProperty<
  T extends CollectibleTrackerState
>(
  state: T,
  data: SessionCategoryData,
  propName: string,
  options: StateEncodingOptions
): T {
  const updated = JSON.parse(JSON.stringify(state)) as T;
  for (const key of Object.keys(state.collectibles)) {
    updated.collectibles[key] = {
      ...state.collectibles[key],
    } as Collectible;
    updated.collectibles[key][propName] = data.inclusive
      ? data.indices.indexOf(+key) > -1
      : data.indices.indexOf(+key) < 0;
  }
  updated.encoded = getEncodedCollectibleState(updated.collectibles, options);
  return updated;
}
