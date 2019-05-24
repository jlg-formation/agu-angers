import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzWebService extends QuizzService {

  constructor(http: HttpClient) {
    super(http);
    this.list = [];
  }

  save() {
    super.save();
    this.http.post('http://localhost:5000/ws/quizzlist', this.list).subscribe({
      next: data => console.log('saved!', data),
      error: e => console.error('error', e)
    });
  }

  retrieveList() {
    console.log('this.http', this);
    this.http.get('http://localhost:5000/ws/quizzlist').subscribe({
      next: data => {
        console.log('data', data);
        // tslint:disable-next-line: forin
        for (const p in data) {
          data[p].__proto__ = Quizz.prototype;
        }
        this.list = data;
        console.log('this.list', this.list);
        super.save();
      },
      error: e => console.error('error', e)
    });
  }
}
