import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, ParamMap, Router } from '@angular/router';
import * as fromUsersModels from '@user-search-users/models';
import * as fromUsersServices from '@user-search-users/services';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users$: Observable<fromUsersModels.MappedUsersSearch>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: fromUsersServices.UserService
  ) {
    this.users$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        const page: null | number = params.get('p') ? +params.get('p') : null;

        return this.userService.getUsers(params.get('q'), page);
      })
    );
  }

  navigateToPage(navigation: { page: number; query: string }): void {
    console.log('navigation:::', navigation);
    const navigationExtras: NavigationExtras = {
      queryParams: { q: navigation.query, p: navigation.page }
    };
    this.router.navigate(['/users'], navigationExtras);
  }
}
