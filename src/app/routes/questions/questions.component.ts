import { Component, OnInit, ElementRef } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(
    public quizz: QuizzService,
    private elt: ElementRef,
    private router: Router) { }

  ngOnInit() {
    const b = this.elt.nativeElement.querySelector('button');
    if (!b) {
      return;
    }
    b.focus();
  }

  save() {
    console.log('save');
    this.quizz.addCurrentQuizz();
    this.quizz.save();
    this.router.navigateByUrl('/saved');
  }

}
