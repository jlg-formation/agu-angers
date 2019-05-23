import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { CreateComponent } from './routes/create/create.component';
import { HomeComponent } from './routes/home/home.component';
import { QuestionsComponent } from './routes/questions/questions.component';
import { SavedComponent } from './routes/saved/saved.component';
import { PlayQuizzModule } from './play-quizz/play-quizz.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    QuestionsComponent,
    AddQuestionComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    PlayQuizzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
