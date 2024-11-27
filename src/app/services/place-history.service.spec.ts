import { TestBed } from '@angular/core/testing';

import { PlaceHistoryService } from './place-history.service';

describe('PlaceHistoryService', () => {
  let service: PlaceHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
