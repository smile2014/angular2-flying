import {Component, OnInit} from '@angular/core';

import {EssenceNg2EsriMapService} from "../../components";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor (private esriService: EssenceNg2EsriMapService) {
        // 这里验证不同模块共享着相同的执行环境。 它们共享着同一个依赖注入器，这意味着某个模块中定义的服务在所有模块中也都能用。
        // 比如这里EssenceNg2EsriMapModule中的EssenceNg2EsriMapService服务在HomeModule中也能用。
        console.log(esriService.loadEsriModules);
    }

    ngOnInit () {
        console.log("home init!");
    }
}
