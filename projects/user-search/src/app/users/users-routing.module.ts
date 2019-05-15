import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromUsersContainers from '@user-search-users/containers';

const routes: Routes = [
  {
    path: '',
    component: fromUsersContainers.UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
