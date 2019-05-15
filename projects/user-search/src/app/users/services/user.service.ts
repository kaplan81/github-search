import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '@github-search/ng-kit';
import { ConfigService } from '@user-search-core/config.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Do not provide in UsersModule to avoid circular dependency warning.
@Injectable({
  providedIn: 'root'
})
export class UserService {
  static readonly userApiQuery = 'q';
  static readonly userApiSort = 'sort';
  static readonly userApiOrder = 'order';
  private userApi: string;

  constructor(
    private configService: ConfigService,
    private errorService: ErrorService,
    private http: HttpClient
  ) {
    this.userApi = `${this.configService.apiBase}/${this.configService.apiPathEndpoints.users}`;
  }

  // TODO: users model
  getUsers(search: string): Observable<any> {
    const url = `${this.userApi}?${UserService.userApiQuery}=${search}`;

    return this.http
      .get<any>(url)
      .pipe(catchError(this.errorService.handleHttpError<any>('getUsers')));
  }
}
