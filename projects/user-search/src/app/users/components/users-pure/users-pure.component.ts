import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'usr-users-pure',
  styleUrls: ['./users-pure.component.scss'],
  templateUrl: './users-pure.component.html'
})
export class UsersPureComponent {
  @Input() users: any;
}
