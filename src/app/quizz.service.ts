import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { QuizzProgress } from './quizz-progress';

const CURRENT = 'current';
const QUIZZ_LIST = 'quizz-list';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  currentQuizz: Quizz;
  list: any;
  progress: QuizzProgress;

  constructor() {
    this.retrieveLocal();
    this.retrieveList();
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

  retrieveList() {
    console.log('parent retrieveList');
    const quizz = JSON.parse(localStorage.getItem(QUIZZ_LIST));
    if (!quizz) {
      this.list = {};
      return;
    }
    // tslint:disable-next-line: forin
    for (const p in quizz) {
      quizz[p].__proto__ = Quizz.prototype;
    }
    this.list = quizz;
  }

  addCurrentQuizz() {
    this.list[this.currentQuizz.name] = this.currentQuizz;
  }

  save() {
    localStorage.setItem(QUIZZ_LIST, JSON.stringify(this.list));
  }

  hasAtLeastOneQuizz() {
    return Object.keys(this.list).length > 0;
  }

  getArray(): Quizz[] {
    return Object.values(this.list);
  }

  retrieve(name: string): Quizz {
    return this.list[name];
  }





}
