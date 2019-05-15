import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from '@user-search-shared/search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent],
  exports: [CommonModule, FormsModule, SearchFormComponent],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class SharedModule {}
