import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundModule } from 'src/app/not-found/not-found.module';
import { NotFoundComponent } from 'src/app/not-found/routes/not-found/not-found.component';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NotFoundModule,
        RouterTestingModule.withRoutes([{ path: '404', component: NotFoundComponent }])
      ],
      declarations: [ StartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
