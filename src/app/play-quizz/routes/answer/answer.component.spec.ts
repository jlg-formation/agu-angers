import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponent } from './answer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from 'src/app/not-found/routes/not-found/not-found.component';
import { NotFoundModule } from 'src/app/not-found/not-found.module';

describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        NotFoundModule,
        RouterTestingModule.withRoutes([{ path: '404', component: NotFoundComponent }])
      ],
      declarations: [AnswerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
