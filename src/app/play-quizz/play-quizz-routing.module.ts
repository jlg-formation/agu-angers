import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './routes/list/list.component';
import { StartComponent } from './routes/start/start.component';
import { AnswerComponent } from './routes/answer/answer.component';
import { ScoreComponent } from './routes/score/score.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: ':name/start', component: StartComponent },
  { path: 'answer', component: AnswerComponent },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayQuizzRoutingModule { }
