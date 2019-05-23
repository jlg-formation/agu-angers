import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

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

}
