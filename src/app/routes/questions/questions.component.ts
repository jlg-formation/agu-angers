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
    this.elt.nativeElement.querySelector('button').focus();
  }

  save() {
    console.log('save');
    this.quizz.addCurrentQuizz();
    this.quizz.save();
    this.router.navigateByUrl('/saved');
  }

}
