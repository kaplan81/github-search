import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromSearchContainers from '@user-search-search/containers';

const routes: Routes = [
  {
    path: '',
    component: fromSearchContainers.SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
