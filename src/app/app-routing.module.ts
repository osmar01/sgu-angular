import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditInsertComponent } from './pages/user/user-edit-insert/user-edit-insert.component';

const routes: Routes = [
  {
    path: "",
    component: UserEditInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
