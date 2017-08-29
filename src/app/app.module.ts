import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MissionService } from './service/mission.service';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronautComponent } from './mission-control/astronaut/astronaut.component';
import { ComStyComponent } from './com-sty/com-sty.component';

@NgModule({
  declarations: [         // 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    AppComponent, MissionControlComponent, AstronautComponent, ComStyComponent
  ],
  imports: [              // 本模块声明的组件模板需要的类所在的其它模块。
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MissionService],          // 服务的创建者，并加入到全局服务列表中，可用于应用任何部分
  bootstrap: [AppComponent] //  指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
})
export class AppModule { }
