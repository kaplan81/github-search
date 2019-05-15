import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as fromUsersModels from '@user-search-users/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'usr-users-pure',
  styleUrls: ['./users-pure.component.scss'],
  templateUrl: './users-pure.component.html'
})
export class UsersPureComponent {
  @Input() users: fromUsersModels.MappedUsersSearch;
}
