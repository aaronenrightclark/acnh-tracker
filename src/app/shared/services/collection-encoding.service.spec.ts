import { TestBed } from '@angular/core/testing';

import { CollectionEncodingService } from './collection-encoding.service';

describe('CollectionEncodingService', () => {
  let service: CollectionEncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionEncodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
