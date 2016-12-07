/**
 * Created by laixiangran on 2016/11/29.
 * homepage：http://www.laixiangran.cn.
 */

import {NgModule} from '@angular/core';
import {EssenceNg2EsriMapComponent} from "./essence-ng2-esrimap.component";
import {EssenceNg2EsriMapService} from "./essence-ng2-esrimap.service";
import {EsriLoaderService} from 'angular2-esri-loader';

@NgModule({
    declarations: [EssenceNg2EsriMapComponent],
    providers: [EsriLoaderService, EssenceNg2EsriMapService],
    exports: [EssenceNg2EsriMapComponent]
})
export class EssenceNg2EsriMapModule {
}