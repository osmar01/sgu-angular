import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginUserComponent } from './pages/login/login-user/login-user.component';
import { UserEditInsertComponent } from './pages/user/user-edit-insert/user-edit-insert.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './pages/user/user.module';
import { SharedModule } from './shared/shared/shared.module';
import { LoginModule } from './pages/login/login.module';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatToolbarModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        UserModule,
        SharedModule,
        LoginModule

      ],
      declarations: [
        AppComponent,
        UserEditInsertComponent
      ],
      providers: [UserService, { HttpClient, useValue: UserService }]
    }).compileComponents();
  });

  it('Deveria criar a aplicação', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deveria ter o titulo 'Gerenciamento de Usuarios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Gerenciamento de Usuarios');
  });

  it('Deveria mostrar o titulo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-toolbar')?.textContent).toContain('Gerenciamento de Usuarios');
  });
});
