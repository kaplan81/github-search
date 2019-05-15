import { NgModule } from '@angular/core';
import * as fromSearchContainers from '@user-search-search/containers';
import { SearchRoutingModule } from '@user-search-search/search-routing.module';

@NgModule({
  imports: [SearchRoutingModule],
  declarations: [...fromSearchContainers.containers]
})
export class SearchModule {}
