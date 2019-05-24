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
import { NotFoundModule } from './not-found/not-found.module';
import { QuizzService } from './quizz.service';
import { QuizzWebService } from './quizz-web.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

let factory = (http: HttpClient) => {
  return new QuizzWebService(http);
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    QuestionsComponent,
    AddQuestionComponent,
    SavedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    PlayQuizzModule,
    NotFoundModule
  ],
  providers: [

    { provide: QuizzService, useClass: QuizzWebService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
