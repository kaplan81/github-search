import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'usr-search-form',
  styleUrls: ['./search-form.component.scss'],
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent {
  constructor(private router: Router) {}

  search(form: NgForm): void {
    const navigationExtras: NavigationExtras = { queryParams: { query: form.value.query } };
    this.router.navigate(['/users'], navigationExtras).then(() => form.reset());
  }
}
