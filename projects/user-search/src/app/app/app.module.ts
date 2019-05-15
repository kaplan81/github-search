import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import * as fromRootComponents from '@user-search-app/components';
import * as fromRootContainers from '@user-search-app/containers';
import { CoreModule } from '@user-search-core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [...fromRootContainers.containers],
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [fromRootContainers.AppComponent]
})
export class AppModule {}
