import { TestBed } from '@angular/core/testing';

import { ExistRepoGuard } from './exist-repo.guard';

describe('ExistRepoGuard', () => {
  let guard: ExistRepoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExistRepoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
