import { NgModule } from '@angular/core';
import * as fromUsersContainers from '@user-search-users/containers';
import { UsersRoutingModule } from '@user-search-users/users-routing.module';

@NgModule({
  imports: [UsersRoutingModule],
  declarations: [...fromUsersContainers.containers],
  entryComponents: [fromUsersContainers.UsersComponent]
})
export class UsersModule {}
