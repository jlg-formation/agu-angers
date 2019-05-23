import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

const CURRENT = 'current';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {


  currentQuizz: Quizz;

  constructor() {
    this.retrieveLocal();
  }

  create(name: string) {
    this.currentQuizz = new Quizz(name);
    console.log('quizz', this.currentQuizz);
    this.saveLocal();
  }

  saveLocal() {
    localStorage.setItem(CURRENT, JSON.stringify(this.currentQuizz));
  }

  retrieveLocal() {
    const quizz = JSON.parse(localStorage.getItem(CURRENT));
    if (!quizz) {
      return;
    }
    quizz.__proto__ = Quizz.prototype;
    this.currentQuizz = quizz;
  }





}
