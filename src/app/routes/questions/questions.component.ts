import { Component, OnInit, ElementRef } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(public quizz: QuizzService, private elt: ElementRef) { }

  ngOnInit() {
    this.elt.nativeElement.querySelector('button').focus();
  }

}
