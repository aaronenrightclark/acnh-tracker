import { Injectable } from '@angular/core';
import { TrackerCategory, SessionData } from '../models/app-state.model';
import { Collectible } from '../models/collectible.model';
import { StateEncodingOptions } from '../helpers/reducer.helper';

export function getDefaultEncoding(
  trackerCategories?: TrackerCategory[]
): string {
  return (trackerCategories?.length
    ? trackerCategories
    : Object.keys(TrackerCategory)
        .filter((cat) => isNaN(Number(cat)) === false)
        .map((cat) => +cat)
  )
    .sort()
    .map((cat) => `${cat}-1-`)
    .join('.');
}

export function encodeSessionData(sessionData: SessionData): string {
  let encodedSession = '';
  Object.keys(sessionData).forEach((key) => {
    let encodedSessionCategory = key;
    encodedSessionCategory += `-${+sessionData[key].inclusive}`;
    encodedSessionCategory += `-${sessionData[key].indices.join(',')}`;
    if (!!encodedSession) {
      encodedSession += '.';
    }
    encodedSession += encodedSessionCategory;
  });
  return encodedSession;
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

// TODO: why is this a service?
@Injectable({
  providedIn: 'root',
})
export class CollectionEncodingService {
  constructor() {}
}
