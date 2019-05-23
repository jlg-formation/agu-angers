import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayQuizzRoutingModule } from './play-quizz-routing.module';
import { ListComponent } from './routes/list/list.component';
import { StartComponent } from './routes/start/start.component';
import { AnswerComponent } from './routes/answer/answer.component';
import { ScoreComponent } from './routes/score/score.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListComponent, StartComponent, AnswerComponent, ScoreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    PlayQuizzRoutingModule
  ]
})
export class PlayQuizzModule { }
