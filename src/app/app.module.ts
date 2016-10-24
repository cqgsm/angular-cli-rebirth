import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTING } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import BlogAppModule from './blog-app';
import ManageAppModule from './manage-app';
// Application wide providers
const APP_PROVIDERS = [];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    BlogAppModule,
    ManageAppModule,
    ROUTING
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
