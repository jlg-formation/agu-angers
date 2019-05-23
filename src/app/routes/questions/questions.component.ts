import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  nbr = 0;

  constructor(public quizz: QuizzService) { }

  ngOnInit() {
  }

}
