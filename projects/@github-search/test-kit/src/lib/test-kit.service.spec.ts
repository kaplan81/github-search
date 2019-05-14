import { TestBed } from '@angular/core/testing';

import { TestKitService } from './test-kit.service';

describe('TestKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestKitService = TestBed.get(TestKitService);
    expect(service).toBeTruthy();
  });
});
