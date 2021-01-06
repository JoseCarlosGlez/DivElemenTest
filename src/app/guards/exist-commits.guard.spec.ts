import { TestBed } from '@angular/core/testing';

import { ExistCommitsGuard } from './exist-commits.guard';

describe('ExistCommitsGuard', () => {
  let guard: ExistCommitsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExistCommitsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
