import { TestBed } from '@angular/core/testing';
import { StudentPlacementService } from './student-placement.service';

describe('StudentPlacementService', () => {
  let service: StudentPlacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentPlacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});