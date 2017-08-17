import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoHighLightDirective } from './directives/demo-high-light.directive';
import { AnotherDemoHighLightDirective } from './directives/another-demo-high-light.directive';


@NgModule({
  declarations: [
    AppComponent,
    DemoHighLightDirective,
    AnotherDemoHighLightDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
