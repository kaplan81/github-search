import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as fromUsersServices from '@user-search-users/services';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users$: Observable<any>;

  constructor(private route: ActivatedRoute, private userService: fromUsersServices.UserService) {
    this.users$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        return this.userService.getUsers(params.get('q'));
      })
    );
  }
}
