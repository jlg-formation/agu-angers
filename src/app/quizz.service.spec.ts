import { TestBed } from '@angular/core/testing';

import { QuizzService } from './quizz.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuizzService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: QuizzService = TestBed.get(QuizzService);
    expect(service).toBeTruthy();
  });
});
