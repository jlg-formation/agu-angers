import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { QuizzProgress } from 'src/app/quizz-progress';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
    public quizz: QuizzService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(map(p => p.name)).subscribe(name => {
      console.log('params', name);
      const quizz = this.quizz.retrieve(name);
      if (!quizz) {
        this.router.navigateByUrl('/404');
        return;
      }
      this.quizz.currentQuizz = quizz;
    });
  }

  start() {
    this.quizz.progress = new QuizzProgress();
    this.router.navigate(['/', this.quizz.currentQuizz.name, 'answer', 1]);
  }

}
