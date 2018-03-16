/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImportStatementHistoService } from './import-statement-histo.service';

describe('Service: ImportStatementHisto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportStatementHistoService]
    });
  });

  it('should ...', inject([ImportStatementHistoService], (service: ImportStatementHistoService) => {
    expect(service).toBeTruthy();
  }));
});