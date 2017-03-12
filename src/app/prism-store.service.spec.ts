/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrismStoreService } from './prism-store.service';

describe('PrismStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrismStoreService]
    });
  });

  it('should ...', inject([PrismStoreService], (service: PrismStoreService) => {
    expect(service).toBeTruthy();
  }));
});
