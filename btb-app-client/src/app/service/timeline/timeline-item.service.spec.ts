import { TestBed } from '@angular/core/testing';

import { TimelineItemService } from './timeline-item.service';

describe('TimelineItemService', () => {
  let service: TimelineItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
