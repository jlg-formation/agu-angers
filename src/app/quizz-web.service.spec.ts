import { TestBed } from '@angular/core/testing';

import { QuizzWebService } from './quizz-web.service';

describe('QuizzWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzWebService = TestBed.get(QuizzWebService);
    expect(service).toBeTruthy();
  });
});
