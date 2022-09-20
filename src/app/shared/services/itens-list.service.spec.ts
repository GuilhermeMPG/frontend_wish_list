import { TestBed } from '@angular/core/testing';

import { ItensListService } from './itens-list.service';

describe('ItensListService', () => {
  let service: ItensListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
