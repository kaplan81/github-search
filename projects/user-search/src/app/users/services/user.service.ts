import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '@github-search/ng-kit';
import { ConfigService } from '@user-search-core/config.service';
import * as fromUsersModels from '@user-search-users/models';
import { from, Observable } from 'rxjs';
import { catchError, concatMap, map, switchMap, take, toArray } from 'rxjs/operators';

// Do not provide in UsersModule to avoid circular dependency warning.
@Injectable({
  providedIn: 'root'
})
export class UserService {
  static readonly userApiQuery = 'q';
  static readonly userApiSort = 'sort';
  static readonly userApiOrder = 'order';
  static readonly userPage = 'page';
  static readonly userPageDefault = 1;
  static readonly userPerPage = 'per_page';
  static readonly userPerPageDefault = 10;
  private userApi: string;

  constructor(
    private configService: ConfigService,
    private errorService: ErrorService,
    private http: HttpClient
  ) {
    this.userApi = `${this.configService.apiBase}/${this.configService.apiPathEndpoints.users}`;
  }

  getUsers(query: string, page?: number, perPage?: number): Observable<any> {
    const pageNumber: number = page ? page : UserService.userPageDefault;
    const perPageCount: number = perPage ? perPage : UserService.userPerPageDefault;
    const url = `${this.userApi}?${UserService.userApiQuery}=${query}&${
      UserService.userPage
    }=${pageNumber}&${UserService.userPerPage}=${perPageCount}`;

    return this.http.get<fromUsersModels.UsersSearch>(url).pipe(
      map(
        (usersSearch: fromUsersModels.UsersSearch): fromUsersModels.MappedUsersSearch => {
          const totalCount: number = +usersSearch.total_count;
          const users: string[] = usersSearch.items.map(
            (item: fromUsersModels.UserItem) => item.url
          );

          return { totalCount, pageNumber, perPageCount, users };
        }
      ),
      switchMap((mappedUsersSearch: fromUsersModels.MappedUsersSearch) => {
        return this.getUsersDetails(mappedUsersSearch.users as string[], perPageCount).pipe(
          map((users: fromUsersModels.User[]) => {
            return { ...mappedUsersSearch, users };
          }),
          catchError(this.errorService.handleHttpError<any>('getUsers'))
        );
      })
    );
  }

  private getUsersDetails(userUrls: string[], asMany: number): Observable<fromUsersModels.User[]> {
    return from(userUrls).pipe(
      concatMap(
        (userUrl: string): Observable<fromUsersModels.User> =>
          this.http.get<fromUsersModels.User>(userUrl)
      ),
      take(asMany),
      toArray()
    );
  }
}
