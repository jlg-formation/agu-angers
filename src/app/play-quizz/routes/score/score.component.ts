import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { faSmileWink, faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { faPoo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  faSmileWink = faSmileWink;
  faPoo = faPoo;
  faSmileBeam = faSmileBeam;

  constructor(public quizz: QuizzService) { }

  ngOnInit() {
  }

}
