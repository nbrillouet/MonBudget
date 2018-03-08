/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImportStatementService } from './importStatement.service';

describe('Service: ImportStatement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportStatementService]
    });
  });

  it('should ...', inject([ImportStatementService], (service: ImportStatementService) => {
    expect(service).toBeTruthy();
  }));
});