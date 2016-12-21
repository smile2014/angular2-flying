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
import {BootstrapThemeComponent} from './pages/bootstrap-theme';
import {EditorDemoComponent} from "./pages/editor-demo";
import {EssenceNg2EditorModule, EssenceNg2EsriMapModule} from "../../components";
import {ChartDemoComponent} from "./pages/chart-demo";
import {EssenceNg2ChartModule} from "../../directives";
import {EsriMapComponent} from './pages/esri-map';
import {PrintDemoComponent} from './pages/print-demo';
import {EssenceNg2PrintModule} from "../../components";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
		HomeRoutingModule,
		EssenceNg2EditorModule,
		EssenceNg2ChartModule,
		EssenceNg2EsriMapModule,
		EssenceNg2PrintModule
    ],
    declarations: [
        HomeComponent,
        BootstrapThemeComponent,
        EditorDemoComponent,
        ChartDemoComponent,
        EsriMapComponent,
        PrintDemoComponent
    ],
    providers: []
})
export class HomeModule {
}
