import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditInsertComponent } from './pages/user/user-edit-insert/user-edit-insert.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { LoginUserComponent } from './pages/login/login-user/login-user.component';

const routes: Routes = [
  {
    path: "list-user",
    component: UserListComponent
  },
  {
    path: "user-edit-insert/:idUser",
    component: UserEditInsertComponent
  },
  {
    path: "login",
    component: LoginUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
