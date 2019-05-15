import { NgModule } from '@angular/core';
import { SharedModule } from '@user-search-shared/shared.module';
import * as fromUsersComponents from '@user-search-users/components';
import * as fromUsersContainers from '@user-search-users/containers';
import { UsersRoutingModule } from '@user-search-users/users-routing.module';

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [...fromUsersContainers.containers, ...fromUsersComponents.components],
  entryComponents: [fromUsersContainers.UsersComponent]
})
export class UsersModule {}
