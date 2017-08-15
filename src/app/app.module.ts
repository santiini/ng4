import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestValueBindComponent } from './test-value-bind/test-value-bind.component';
import { TestTwowayBindComponent } from './test-twoway-bind/test-twoway-bind.component';
import { TestTempRefVarComponent } from './test-temp-ref-var/test-temp-ref-var.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { FontResizerComponent } from './test-twoway-bind/font-resizer/font-resizer.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestNgModuleComponent } from './test-ng-module/test-ng-module.component';
import { TestNgPipeComponent } from './test-ng-pipe/test-ng-pipe.component';
import { TestSafeNavComponent } from './test-safe-nav/test-safe-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TestValueBindComponent,
    TestTwowayBindComponent,
    TestTempRefVarComponent,
    TestEventBindingComponent,
    FontResizerComponent,
    TestNgIfComponent,
    TestNgForComponent,
    TestNgSwitchComponent,
    TestNgClassComponent,
    TestNgStyleComponent,
    TestNgModuleComponent,
    TestNgPipeComponent,
    TestSafeNavComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
