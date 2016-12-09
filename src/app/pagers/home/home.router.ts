/**
 * Created by laixiangran on 2016/11/26.
 * homepage：http://www.laixiangran.cn
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BootstrapThemeComponent} from "./bootstrap-theme";
import {EditorDemoComponent} from "./editor-demo";
import {ChartDemoComponent} from "./chart-demo";
import {EsriMapComponent} from "./esri-map";

const homeRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home/editor',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'editor',
                component: EditorDemoComponent
            },
            {
                path: 'chart',
                component: ChartDemoComponent
            },
            {
                path: 'bootstrap',
                component: BootstrapThemeComponent
            },
            {
                path: 'lazy',
                loadChildren: 'app/pagers/home/lazy/lazy.module#LazyModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {
}
