import { RouterModule } from '@angular/router';
// 异步路由的话就不在这里面引入所有的路由组件，要把component改为loadChildren
export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'       // 指向home.module.ts下的HomeModule,会在home.module.ts内声明路由配置
    },
    {
        path: 'jokes',
        loadChildren: './jokes/jokes.module#JokesModule'        // 指向jokes.module.ts下的JokesModule
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'       // 指向home.module.ts下的HomeModule
    }
];
