import { TestBed, inject } from '@angular/core/testing';

import { NotebookServiceService } from './notebook-service.service';

describe('NotebookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotebookServiceService]
    });
  });

  it('should be created', inject([NotebookServiceService], (service: NotebookServiceService) => {
    expect(service).toBeTruthy();
  }));
});
