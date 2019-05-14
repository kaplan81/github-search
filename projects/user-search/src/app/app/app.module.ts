import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import * as fromRootComponents from '@user-search-app/components';
import * as fromRootContainers from '@user-search-app/containers';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [...fromRootContainers.containers],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [fromRootContainers.AppComponent]
})
export class AppModule {}
