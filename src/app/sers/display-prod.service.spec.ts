import { TestBed } from '@angular/core/testing';

import { DisplayProdService } from './display-prod.service';

describe('DisplayProdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayProdService = TestBed.get(DisplayProdService);
    expect(service).toBeTruthy();
  });
});
