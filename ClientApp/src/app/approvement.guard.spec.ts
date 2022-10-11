import { TestBed } from '@angular/core/testing';

import { ApprovementGuard } from './approvement.guard';

describe('ApprovementGuard', () => {
  let guard: ApprovementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApprovementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
