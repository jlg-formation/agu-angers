import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayQuizzRoutingModule } from './play-quizz-routing.module';
import { ListComponent } from './routes/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PlayQuizzRoutingModule
  ]
})
export class PlayQuizzModule { }
