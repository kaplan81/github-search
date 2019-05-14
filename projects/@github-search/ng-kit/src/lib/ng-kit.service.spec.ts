import { TestBed } from '@angular/core/testing';

import { NgKitService } from './ng-kit.service';

describe('NgKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgKitService = TestBed.get(NgKitService);
    expect(service).toBeTruthy();
  });
});
