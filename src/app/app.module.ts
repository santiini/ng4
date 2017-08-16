import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ParentComponent } from './parent/parent.component';
import { TestChildComponent } from './parent/test-child/test-child.component';
import { BrotherComComponent } from './brother-com/brother-com.component';
import { Child1Component } from './brother-com/child1/child1.component';
import { Child2Component } from './brother-com/child2/child2.component';

import { EventBusService } from './service/event-bus.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    TestChildComponent,
    BrotherComComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
