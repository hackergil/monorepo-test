import { TestBed } from '@angular/core/testing';

import { MonorepolibService } from './monorepolib.service';

describe('MonorepolibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonorepolibService = TestBed.get(MonorepolibService);
    expect(service).toBeTruthy();
  });
});
