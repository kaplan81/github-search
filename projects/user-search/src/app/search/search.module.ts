import { NgModule } from '@angular/core';
import * as fromSearchContainers from '@user-search-search/containers';
import { SearchRoutingModule } from '@user-search-search/search-routing.module';
import { SharedModule } from '@user-search-shared/shared.module';

@NgModule({
  imports: [SharedModule, SearchRoutingModule],
  declarations: [...fromSearchContainers.containers],
  entryComponents: [fromSearchContainers.SearchComponent]
})
export class SearchModule {}
