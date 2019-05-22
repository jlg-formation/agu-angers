import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la France ?', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/questions');
  }

}
