import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterEventsService, SubscribedContainerWithRouter } from '@github-search/ng-kit';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'usr-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent extends SubscribedContainerWithRouter {
  section: string;

  constructor(public router: Router, private routerEventsService: RouterEventsService) {
    super(router);
    this.routerEventsService
      .filterRouterEvents(this, NavigationEnd)
      .subscribe((navigationEnd: any) => {
        this.section = (navigationEnd as NavigationEnd).urlAfterRedirects;
      });
  }

  hasSearchSection(): boolean {
    return this.section === undefined || this.section === '/search';
  }
}
