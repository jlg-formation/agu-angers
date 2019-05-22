import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  currentQuizz: Quizz;

  create(name: string) {
    this.currentQuizz = new Quizz(name);
    console.log('quizz', this.currentQuizz);
  }

}
