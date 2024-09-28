import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditInsertComponent } from './pages/user/user-edit-insert/user-edit-insert.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: "user-edit-insert/:idUser",
    component: UserEditInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
