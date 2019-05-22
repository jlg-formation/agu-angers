import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  name = 'toto';
  nbr = 0;

  constructor() { }

  ngOnInit() {
  }

}
