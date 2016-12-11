/**
 * Created by laixiangran on 2016/11/26.
 * homepage：http://www.laixiangran.cn
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from "@angular/common";

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home.router";
import {BootstrapThemeComponent} from './bootstrap-theme';
import {EditorDemoComponent} from "./editor-demo";
import {EssenceNg2EditorModule, EssenceNg2EsriMapModule} from "../../components";
import {ChartDemoComponent} from "./chart-demo";
import {EssenceNg2ChartModule} from "../../directives";
import {EsriMapComponent} from './esri-map';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        EssenceNg2EditorModule,
        EssenceNg2ChartModule,
        EssenceNg2EsriMapModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        BootstrapThemeComponent,
        EditorDemoComponent,
        ChartDemoComponent,
        EsriMapComponent
    ],
    providers: [
    ]
})
export class HomeModule {
}
