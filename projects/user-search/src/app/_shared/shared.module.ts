import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '@user-search-shared/loading/loading.component';
import { SearchFormComponent } from '@user-search-shared/search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent, LoadingComponent],
  exports: [CommonModule, FormsModule, SearchFormComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class SharedModule {}
