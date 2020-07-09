import { Injectable } from '@angular/core';
import { TrackerCategory, SessionData } from '../models/app-state.model';

export function getDefaultEncoding(
  trackerCategories: TrackerCategory[]
): string {
  return trackerCategories.map((cat) => `${cat}-1-`).join('.');
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

@Injectable({
  providedIn: 'root',
})
export class CollectionEncodingService {
  constructor() {}
}
