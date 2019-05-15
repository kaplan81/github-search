import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as fromUsersModels from '@user-search-users/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'usr-users-pure',
  styleUrls: ['./users-pure.component.scss'],
  templateUrl: './users-pure.component.html'
})
export class UsersPureComponent {
  @Input() users: fromUsersModels.MappedUsersSearch;
  @Output() goToPage = new EventEmitter<{ page: number; query: string }>();

  isDisabledNext(currentPage: number, totalPages: number): boolean {
    return currentPage === totalPages;
  }

  isDisabledPrev(currentPage: number): boolean {
    return currentPage === 1;
  }

  goToNextPage(currentPage: number, query: string): void {
    const page: number = currentPage + 1;
    this.goToPage.emit({ page, query });
  }

  goToPrevPage(currentPage: number, query: string): void {
    const page: number = currentPage - 1;
    this.goToPage.emit({ page, query });
  }
}
