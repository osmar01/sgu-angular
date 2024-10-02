import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditInsertComponent } from './user-edit-insert.component';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user.module';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('UserEditInsertComponent', () => {
  let component: UserEditInsertComponent;
  let fixture: ComponentFixture<UserEditInsertComponent>;

  let userService: UserService;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditInsertComponent],
      imports: [
        UserModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
          [
            {
              path: "user-edit-insert/:idUser",
              component: UserEditInsertComponent
            }
          ]
        )
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { HttpClient, useValue: UserService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditInsertComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    http = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('componente criado', () => {
    expect(component).toBeTruthy();
  });

  it('Deveria usar o metodo GET', () => {
    const spy = spyOn(http, "get").and.callThrough();
    userService.getAll();
    expect(spy).toHaveBeenCalled();
  });

});
