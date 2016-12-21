/**
 * Created by laixiangran on 2016/11/26.
 * homepage：http://www.laixiangran.cn
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BootstrapThemeComponent} from "./pages/bootstrap-theme";
import {EditorDemoComponent} from "./pages/editor-demo";
import {ChartDemoComponent} from "./pages/chart-demo";
import {EsriMapComponent} from "./pages/esri-map";
import {PrintDemoComponent} from "./pages/print-demo/print-demo.component";

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
                loadChildren: 'app/pages/home/pages/lazy/lazy.module#LazyModule'
            },
            {
                path: 'esri',
                component: EsriMapComponent
            },
            {
                path: 'print',
                component: PrintDemoComponent
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
