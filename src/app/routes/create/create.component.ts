import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router, 
    private elt: ElementRef,
    private quizz: QuizzService) {  }

  ngOnInit() {
    this.elt.nativeElement.querySelector('input').focus();
  }

  submit() {
    console.log('submit');
    this.quizz.create(this.f.value.name);
    this.router.navigateByUrl('/questions');
  }

}
