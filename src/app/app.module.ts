import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { TestFlyInComponent } from './test-fly-in/test-fly-in.component';
import { TemplateComponent } from './template/template.component';
import { ChildComponent } from './template/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    TestFlyInComponent,
    TemplateComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
