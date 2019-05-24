import { TestBed } from '@angular/core/testing';

import { QuizzWebService } from './quizz-web.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuizzWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: QuizzWebService = TestBed.get(QuizzWebService);
    expect(service).toBeTruthy();
  });
});
