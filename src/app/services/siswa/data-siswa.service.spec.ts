import { TestBed } from '@angular/core/testing';

import { DataSiswaService } from './data-siswa.service';

describe('DataSiswaService', () => {
  let service: DataSiswaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSiswaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
