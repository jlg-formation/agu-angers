import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { CreateComponent } from './routes/create/create.component';
import { QuestionsComponent } from './routes/questions/questions.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { SavedComponent } from './routes/saved/saved.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'saved', component: SavedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
