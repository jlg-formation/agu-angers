import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  f = new FormGroup({
    answer: new FormControl('', Validators.required)
  });

  questionId: number;

  constructor(
    public quizz: QuizzService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      console.log('params', p);
      const quizz = this.quizz.retrieve(p.name);
      if (!quizz) {
        this.router.navigateByUrl('/404');
        return;
      }
      this.quizz.currentQuizz = quizz;
      this.questionId = +p.id;
      if (isNaN(this.questionId)) {
        this.router.navigateByUrl('/404');
        return;
      }
    });
  }

  submit() {
    if (this.f.value.answer === this.quizz.currentQuizz.questions[this.questionId - 1].goodAnswer) {
      this.quizz.progress.score++;
    }
    if (this.quizz.currentQuizz.questions.length === this.questionId) {
      this.router.navigateByUrl(`/score`);
      return;
    }
    this.router.navigateByUrl(`/${this.quizz.currentQuizz.name}/answer/${this.questionId + 1}`);
  }

}
